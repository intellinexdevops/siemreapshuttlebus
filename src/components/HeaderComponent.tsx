"use client"
import Image from 'next/image'
import React from 'react'
// import Navigation from './Navigation'
import Link from 'next/link'

const HeaderComponent = () => {


    return (
        <header className='bg-white fixed left-0 right-0 top-0 z-50'>
            <div className='container mx-auto grid grid-cols-3 items-center h-[92px] md:px-0 px-6'>
                <Link href="/" className='flex items-center gap-2'>
                    <Image
                        src="/bus.svg"
                        alt='Logo'
                        width={24}
                        height={24}
                    />
                    <span className='text-lg font-medium uppercase text-primary hidden md:flex'>siem reap shuttle bus</span>
                </Link>
                <nav>
                    <ul className='flex items-center justify-center gap-6'>
                        {/* <Navigation /> */}
                        <li>
                            <Link href="/">
                                <Image src="/logo.png" width={70} height={70} alt='Logo' loading='lazy' />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='flex justify-end'>
                    <Link href="/help-center">
                        <div className='flex items-center gap-2'>
                            <Image
                                src="/help.svg"
                                width={20}
                                height={20}
                                alt='Help'
                                loading='lazy'
                            />
                            <span className='text-sm text-neutral-500'>
                                Help
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent