import ActivityDistributionChart from "@/app/(components)/ActivityDistributionChart";
import CaloriesBurnedChart from "@/app/(components)/CaloriesBurnedChart";

export default async function UserPage() {
  const userData = await import("@/app/(mock)/userData.json");
  const fitnessHistory = userData.fitnessHistory;
  return (
    <div className="flex justify-evenly ">
      <div className="w-1/3 ">
      <ActivityDistributionChart fitnessHistory={fitnessHistory} />
      </div>
      <div className="w-2/3 ">
      <CaloriesBurnedChart fitnessHistory={fitnessHistory} />
      </div>
    </div>
  );
}
