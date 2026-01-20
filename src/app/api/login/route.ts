import { LoginBody } from "@/lib/types";
import { createSessionCookie } from "./auth";

export async function POST(request: Request) {
  const password = process.env.INVITE_PASSWORD;
  const admin_password = process.env.ADMIN_PASSWORD;

  const body: LoginBody = await request.json();
  if (password === body["password"] || admin_password === body["password"]) {
    const cookie = await createSessionCookie({
      roles: admin_password === body["password"] ? ["admin", "user"] : ["user"],
    });

    return new Response("Log in", {
      status: 200,
      headers: { "Set-Cookie": cookie },
    });
  }
  return new Response("Wrong Password.", {
    status: 401,
  });
}
