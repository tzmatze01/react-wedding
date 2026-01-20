// lib/encrypt-edge.ts (or src/app/api/login/encrypt-edge.ts)

const secret_iv = process.env.SECRET_IV ?? "";
const secret_key = process.env.SECRET_KEY ?? "";

// Convert hex string to ArrayBuffer
function hexToArrayBuffer(hex: string): ArrayBuffer {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes.buffer; // Return the underlying ArrayBuffer
}

export async function encrypt(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  const keyBuffer = hexToArrayBuffer(secret_key);
  const ivBuffer = hexToArrayBuffer(secret_iv);

  const cryptoKey = await crypto.subtle.importKey("raw", keyBuffer, { name: "AES-CBC" }, false, ["encrypt"]);

  const encrypted = await crypto.subtle.encrypt({ name: "AES-CBC", iv: ivBuffer }, cryptoKey, data);

  // Convert to base64
  const bytes = new Uint8Array(encrypted);
  const binary = String.fromCharCode(...bytes);
  return btoa(binary);
}

export async function decrypt(encryptedBase64: string): Promise<string> {
  // Convert from base64
  const binary = atob(encryptedBase64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  const keyBuffer = hexToArrayBuffer(secret_key);
  const ivBuffer = hexToArrayBuffer(secret_iv);

  const cryptoKey = await crypto.subtle.importKey("raw", keyBuffer, { name: "AES-CBC" }, false, ["decrypt"]);

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-CBC", iv: ivBuffer },
    cryptoKey,
    bytes.buffer, // Use .buffer to get the ArrayBuffer
  );

  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
}
