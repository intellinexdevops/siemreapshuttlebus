import BookTransportationMainPage from '@/components/pages/BookTransportationMainPage'
import React from 'react'
import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";

interface RequestParams {
    params: Promise<{ id: string }>
}

export default async function Page({
    params
}: RequestParams) {

    const { id } = await params

    const transportationId = id as Id<"transportations">;

    const preloadedTransportation = await preloadQuery(api.transportation.select, { id: transportationId })


    return <BookTransportationMainPage preloadedTransportation={preloadedTransportation} />
}
