import BookTransportationMainPage from '@/components/pages/BookTransportationMainPage'
import React from 'react'

interface RequestParams {
    params: Promise<{ id: string }>
}

export default async function Page({
    params
}: RequestParams) {

    const { id } = await params

    return <BookTransportationMainPage _id={id} />
}
