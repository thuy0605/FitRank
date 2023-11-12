import { redis } from "@/utils/cache";

export async function POST(request) {
  const body = await request.json();
  const response = await fetch(
    `${
      process.env.NEXT_BACKEND_URL ?? "http://localhost:4000"
    }/api/v1/authentication/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: body.username,
        password: body.password,
        application: "ui_client",
      }),
    }
  );
  const json = await response.json();
  if (json && json.auth) {
    await (await redis).set(body.username, json.token);
    return new Response("Login successful!", {
      status: 200,
    });
  }
  return new Response("Login failed - bad request!", {
    status: 400,
  });
}
