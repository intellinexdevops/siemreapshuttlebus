"use client"
import { useQuery } from 'convex/react'
import React from 'react'
import { api } from '../../convex/_generated/api'
import Image from 'next/image'
import Link from 'next/link'

const PrivateTransportationServiceSection = () => {
    const transportations = useQuery(api.transportation.get)

    // console.table(transportations)
    return (
        <section className='mt-[62px] container mx-auto mb-[100px]' id='#transport'>
            <div>
                <h1 className='text-2xl font-medium text-neutral-800'>Private Transportation Service</h1>
                <p className='text-sm text-neutral-500 max-w-[80%] mt-2'>If you don&apos;t like the hassle of public transportation you can alternatively book a private transportation.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {transportations?.map(({ _id, title, url, price, unit }) => <div key={_id} className='flex items-center gap-x-3 bg-white p-3 rounded-lg transition-all duration-200 ease-in-out hover:shadow-2xl'>
                    <div className='w-[70px] h-[70px] relative overflow-hidden rounded-md'>
                        <Image
                            src={url}
                            alt={title}
                            fill
                            objectFit='cover'
                            loading='lazy'
                        />
                    </div>
                    <div className=''>
                        <p className='text-sm font-medium text-neutral-800'>{title}</p>
                        <div className='flex items-center gap-x-2 mb-2'>
                            <span className='text-xs text-neutral-500'>Price:</span>
                            <span className='text-primary text-sm font-semibold'>{parseFloat(price).toFixed(2)} USD <span className='text-neutral-500 text-xs font-normal'>per {unit}</span></span>
                        </div>
                        <Link href="/book-transportation" className='flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="var(--primary)" d="m19 12l-7-6v5H6v2h6v5z" /></svg>
                            <span className='text-xs text-primary font-semibold'>Book Now</span>
                        </Link>
                    </div>
                </div>)}
            </div>
        </section>
    )
}

export default PrivateTransportationServiceSection