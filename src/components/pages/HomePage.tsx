"use client"
// import { useQuery } from 'convex/react'
import React from 'react'
import TicketBookingSection from '../TicketBookingSection'
import AirportShuttleBusSection from '../AirportShuttleBusSection'
import PrivateTransportationServiceSection from '../PrivateTransportationServiceSection'
// import { api } from '../../convex/_generated/api'

const HomePage = () => {
    // const tasks = useQuery(api.tasks.get)
    {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)} */ }
    return (
        <>
            <TicketBookingSection />
            <AirportShuttleBusSection />
            <PrivateTransportationServiceSection />
        </>
    )
}

export default HomePage