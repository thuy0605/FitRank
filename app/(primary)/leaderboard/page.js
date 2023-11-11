import { Leaderboard } from "@/app/(components)/Leaderboard";

export default async function LeaderboardPage() {
  const leaderboardData = JSON.parse(
    JSON.stringify(await import("@/app/(mock)/leaderboardData.json"))
  );
  return <Leaderboard initialData={leaderboardData} />;
}
