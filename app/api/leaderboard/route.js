import { redis } from "@/utils/cache";

export async function GET(request) {
    const [[_1, username], [_2, gender], [_3, usertype], __]= new URL(request.url).searchParams;
    const token = await (await redis).get(username);
    const response = await fetch(`${process.env.NEXT_BACKEND_URL ?? 'http://localhost:4000'}/api/v1/users/leaderboard/_pace?application=ui_client&gender=${gender}&usertype=${usertype}&radius=28`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return Response.json(await response.json());
}