import { ActivityDistributionChart } from "@/app/(components)/ActivityDistributionChart";
import { CaloriesBurnedChart } from "@/app/(components)/CaloriesBurnedChart";

export default async function UserPage() {
  // TODO: username=minhtran1 should get from context.req after succesful login since context.req saved per session
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'}/api/fitness/history?username=minhtran1`, {
    method: "GET",
  });
  const fitnessHistory = (await response.json()).fitnessHistory;
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
