import HomePage from "@/components/pages/HomePage";

import { preloadQuery } from "convex/nextjs";
import {api} from "../../../convex/_generated/api";

export default async function Home() {

  const preloadDepartureFrom = await preloadQuery(api.airplane_time.getFrom, {});
  const preloadDepartureTo = await preloadQuery(api.airplane_time.getTo, {});
  const preloadTransportation = await preloadQuery(api.transportation.get, {});

  return <HomePage
      preloadedDepartureFrom={preloadDepartureFrom}
      preloadedDepartureTo={preloadDepartureTo}
      preloadedTransportation={preloadTransportation}
  />;
}
