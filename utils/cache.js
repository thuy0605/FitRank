import { createClient } from "redis";

export const redis = createClient({
  url: "rediss://default:AVNS_5aR2UFgN56IJbGwfzT4@redis-1fd5096b-fit-rank.a.aivencloud.com:10327",
})
  .on("error", (err) => console.error("Redis err!", err))
  .connect();
