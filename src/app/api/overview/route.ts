import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET(request: Request) {
  const {env} = getCloudflareContext() 

  const { results } = await env.wedding_db
    .prepare("SELECT * FROM Customers")
    .all()

    console.log("results: "+JSON.stringify(results, null, 2))
  return Response.json(results);
}
