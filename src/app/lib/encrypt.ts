import { createCipheriv, createDecipheriv } from "crypto";

const secret_iv = process.env.SECRET_IV ?? "";
const secret_key = process.env.SECRET_KEY ?? "";

// Replace with your own key and iv
// You can generate them with crypto.randomBytes(32) and crypto.randomBytes(16)
const key = Buffer.from(secret_key, "hex");
const iv = Buffer.from(secret_iv, "hex");
const algorithm = "aes-256-cbc";

export const encrypt = (text: string) => {
  const cipher = createCipheriv(algorithm, key, iv);
  const encrypted = cipher.update(text, "utf8", "base64");
  return `${encrypted}${cipher.final("base64")}`;
};

export const decrypt = (encrypted: string) => {
  const decipher = createDecipheriv(algorithm, key, iv);
  const decrypted = decipher.update(encrypted, "base64", "utf8");
  return `${decrypted}${decipher.final("utf8")}`;
};
