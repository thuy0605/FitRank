import ActivityDistributionChart from "@/app/(components)/ActivityDistributionChart";
import CaloriesBurnedChart from "@/app/(components)/CaloriesBurnedChart";

export default async function UserPage() {
  const userData = await import("@/app/(mock)/userData.json");
  const fitnessHistory = userData.fitnessHistory;
  return (
    <>
      <ActivityDistributionChart fitnessHistory={fitnessHistory} />
      <CaloriesBurnedChart fitnessHistory={fitnessHistory} />
    </>
  );
}
