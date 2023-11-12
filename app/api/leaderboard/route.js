import { redis } from "@/utils/cache";

export async function GET(request) {
    const [[_, username], __]= new URL(request.url).searchParams;
    const token = await (await redis).get(username);
    const response = await fetch(`${process.env.NEXT_BACKEND_URL ?? 'http://localhost:4000'}/api/v1/users/leaderboard/_pace?application=ui_client`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return Response.json(await response.json());
}