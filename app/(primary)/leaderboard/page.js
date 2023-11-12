import { Leaderboard } from "@/app/(components)/Leaderboard";

export default async function LeaderboardPage() {
    // TODO: username=minhtran1 should get from context.req after succesful login since context.req saved per session
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'}/api/leaderboard?username=minhtran1`, {
    method: "GET",
  });
  const leaderboardData = (await response.json()).leaderBoard;
  return <Leaderboard initialData={leaderboardData} />;
}
