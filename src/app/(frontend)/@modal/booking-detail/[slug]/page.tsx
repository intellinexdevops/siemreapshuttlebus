import BookingDetailPage from '@/components/pages/BookingDetailPage'
import React from 'react'
import { preloadQuery } from "convex/nextjs";
import { Id } from "../../../../../../convex/_generated/dataModel";
import { api } from "../../../../../../convex/_generated/api";

interface BookingDetailPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function Page({ params }: BookingDetailPageProps) {
    const { slug } = await params

    const transactionId = slug as Id<"transactions">;

    const preloadedTransaction = await preloadQuery(api.transactions.select, { id: transactionId })

    return <BookingDetailPage transactionPreloaded={preloadedTransaction} />
}