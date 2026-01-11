
export async function POST(request: Request, env: any) {


  const password= env.INVITE_PASSWORD;
  
  const stuff = await request.json();

  let message = "Nope!"
  if(env.INVITE_PASSWORD === stuff) {
    message = "Correct password!"
  }

  console.log("amina password: "+password)
  console.log("secret: "+env.INVITE_PASSWORD)
  // console.log("amina succuk: "+JSON.stringify(stuff, null, 2))
    
  const responseData = {
    message: message,
    timestamp: new Date().toISOString(),
    method: "POST"
  };

  return Response.json(responseData);
}