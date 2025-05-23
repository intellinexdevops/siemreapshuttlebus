import BookingDetailPage from '@/components/pages/BookingDetailPage'
import React from 'react'

interface BookingDetailPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function Page({ params }: BookingDetailPageProps) {
    const { slug } = await params
    return <BookingDetailPage slug={slug} />
}
