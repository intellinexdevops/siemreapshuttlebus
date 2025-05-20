"use client"
import Image from 'next/image'
import React from 'react'
import Navigation from './Navigation'
import Link from 'next/link'

const HeaderComponent = () => {


    return (
        <header className='container mx-auto h-[92px] grid grid-cols-3 items-center'>
            <div className='flex items-center gap-2'>
                <Image
                    src="/bus.svg"
                    alt='Logo'
                    width={24}
                    height={24}
                />
                <span className='text-lg font-medium uppercase text-primary'>siem reap shuttle bus</span>
            </div>
            <nav>
                <ul className='flex items-center justify-center gap-6'>
                    <Navigation />
                </ul>
            </nav>
            <div className='flex justify-end'>
                <Link href="/help-center">
                    <div className='flex items-center gap-2'>
                        <Image
                            src="help.svg"
                            width={24}
                            height={24}
                            alt='Help'
                        />
                        <span className='text-sm text-neutral-500'>
                            Help
                        </span>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default HeaderComponent