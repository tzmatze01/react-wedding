import { env } from "cloudflare:workers";


export async function POST(request: Request) {


  const password= env.INVITE_PASSWORD;
  
  const stuff = await request.json();

  let message = "Correct password!"
  console.log("amina succuk: "+JSON.stringify(stuff, null, 2))
    
  const responseData = {
    message: "Hello from Next.js backend!",
    timestamp: new Date().toISOString(),
    method: "GET"
  };

  // Return a JSON response with a 200 status code
  return Response.json(responseData);
}