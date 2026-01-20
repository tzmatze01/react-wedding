import { SessionData } from "@/lib/types";
import { encrypt, decrypt } from "../../lib/encrypt-edge";
import { serialize } from "cookie";

export async function createSessionCookie(userData: SessionData): Promise<string> {
  const sessionData = JSON.stringify(userData);
  const encryptedSessionData = await encrypt(sessionData); // Now async

  return serialize("session", encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7 * 8, // 2 months
    path: "/",
    sameSite: "lax",
  });
}

export async function getSessionData(encryptedSession: string): Promise<SessionData | null> {
  try {
    const decrypted = await decrypt(encryptedSession);
    return JSON.parse(decrypted);
  } catch (error) {
    console.error("Session decrypt error:", error);
    return null;
  }
}
