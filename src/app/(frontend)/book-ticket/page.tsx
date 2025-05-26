import BookNowMainPage from "@/components/pages/BookNowMainPage";
import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";

export default async function Page() {

    const preloadPayments = await preloadQuery(api.payments.get, {})

    return <BookNowMainPage preloadedPayments={preloadPayments} />
}