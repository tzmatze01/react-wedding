import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

// TypeScript interface for the request data
interface GuestData {
  name: string;
  surname: string;
  email: string;
  questions: string;
  coming_buenos_aires: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const { env } = getCloudflareContext();

    // Parse form data
    const body: GuestData = await request.json();

    console.log("body: " + JSON.stringify(body, null, 2));

    console.log("body name: " + JSON.stringify(body["name"], null, 2));

    const data: GuestData = {
      name: body.name,
      surname: body.surname,
      email: body.email,
      questions: body.questions,
      coming_buenos_aires: body.coming_buenos_aires || false,
    };

    const { results: existingGuest } = await env.wedding_db
      .prepare(`SELECT * FROM Guest WHERE email = '${data.email}'`)
      .all();

    if (existingGuest && existingGuest.length > 0) {
      // Update existing guest
      await env.wedding_db
        .prepare(
          `
          UPDATE Guest
          SET name = '${data.name}',
          surname = '${data.surname}',
          questions = '${data.questions}',
          coming_buenos_aires = '${data.coming_buenos_aires}'
          WHERE email = '${data.email}'
        `,
        )
        .run();

      return NextResponse.json({
        success: true,
        message: "Guest updated successfully",
        data: data,
      });
    } else {
      // Insert new guest
      await env.wedding_db
        .prepare(
          `
          INSERT INTO Guest (name, surname, email, questions, coming_buenos_aires)
          VALUES ('${data.name}', '${data.surname}', '${data.email}', '${data.questions}', '${data.coming_buenos_aires}')
        `,
        )
        .run();

      return NextResponse.json({
        success: true,
        message: "Guest created successfully",
        data: data,
      });
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to process guest data" }, { status: 500 });
  }
}
