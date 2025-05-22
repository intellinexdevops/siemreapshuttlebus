
import React from 'react'
import { Button } from './ui/button'
import { Maps } from './Map'

const AirportShuttleBusSection = () => {
    return (
        <section className='container mx-auto mt-[62px]'>
            <div>
                <h1 className='text-2xl font-medium text-neutral-800'>Airport Shuttle Bus</h1>
                <p className='text-sm text-neutral-500 max-w-[80%] mt-2'>Book your ticket for the Airport Shuttle Bus from Siem Reap Angkor International Airport to Siem Reap Town and back.
                    Get instant confirmation.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-6'>
                <div className='md:me-6 me-0'>
                    <div className='bg-primary p-5 rounded-xl'>
                        <div className='flex justify-between'>
                            <div className='text-3xl text-white font-bold'>
                                Bus Station in <br /> Town
                            </div>
                            <div>
                                <div className='bg-white text-neutral-800 px-1.5 py-1 text-sm font-semibold rounded-md'>
                                    $8
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[13px] text-neutral-50 font-light mt-5'>Arrival and departure from the bus station in Siem Reap town is at CDF Duty Free shop, which is a 3 minutes ride by TukTuk or 10 minutes walk from the city centre.</p>
                            <p className='text-[13px] text-neutral-50 font-light mt-5'>
                                There is always a team of TukTuk drivers waiting for you at CDF to bring you to your hotel or guesthouse for a fixed price of $1.
                            </p>
                        </div>
                        <div className='mt-24'>
                            <Button className='bg-white text-neutral-800 w-full py-5 cursor-pointer hover:bg-neutral-200'>
                                View Maps
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Maps />
                </div>
            </div>
        </section>
    )
}

export default AirportShuttleBusSection