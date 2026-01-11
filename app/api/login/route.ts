import { serialize } from "cookie";
import { encrypt } from "./encrypt";

type LoginBody = {
  password: string;
};

export async function POST(request: Request) {
  const password = process.env.INVITE_PASSWORD;

  const body: LoginBody = await request.json();

  console.log("sessionData: " + body);

  if (process.env.INVITE_PASSWORD === body["password"]) {
    const encryptedSessionData = encrypt(body["password"]);

    const cookie = serialize("session", encryptedSessionData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // One week
      path: "/",
    });
    
    //res.setHeader("Set-Cookie", cookie);
    //res.status(200).json({ message: "Successfully set cookie!" });
    return new Response("Log in", {
      status: 200,
      headers: { "Set-Cookie": cookie },
    });
  }
  return new Response("Wrong Password.", {
    status: 401,
  });
}
