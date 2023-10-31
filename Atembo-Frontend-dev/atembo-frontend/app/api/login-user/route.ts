import { BASE_URL } from "@/config";

export async function POST(request: Request) {
  try {
    if (!BASE_URL) {
      return new Response(" URL not found", {
        status: 404,
        statusText: "Failed",
      });
    }

    const body = await request.json();

    const result = await fetch(`${BASE_URL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const response = await result.json();

    return new Response(JSON.stringify(response), {
      status: result.status,
      statusText: result.statusText,
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: "Failed",
    });
  }
}
