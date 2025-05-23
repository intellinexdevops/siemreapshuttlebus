import React from 'react'
import Modal from '../ui/modal'
import { ArrowRightAltOutlined } from "@mui/icons-material"
import { Button } from '../ui/button'

const BookingDetailPage = ({ slug }: { slug: string }) => {
    console.log(slug)
    return (
        <div className='h-screen'>
            <Modal>
                <div className='text-center text-xl md:text-2xl font-medium'>Booking Summary</div>
                <p className='text-neutral-500 text-xs md:text-sm text-center max-w-[70%] mx-auto'>Thank you for booking with Siem Reap Wonder! We&apos;re thrilled to have you with us. A confirmation email with all the details has been sent to you. See you soon for an unforgettable experience! </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                    <div className='border border-neutral-200/55 rounded-lg p-4'>
                        <p className='text-base font-semibold text-neutral-700'>Order Summary</p>
                        <div className='grid md:grid-cols-1 lg:grid-cols-2 grid-cols-2 max-[500px]:grid-cols-1 gap-x-4 gap-y-6 mt-4'>
                            <div className=''>
                                <p className='text-xs text-neutral-500'>Order Ref</p>
                                <p className='text-sm font-medium text-neutral-700'>SR-123456</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-neutral-500'>Departure Date</p>
                                <p className='text-sm font-medium text-neutral-700'>Sep 12, 2023 / 09:30 AM</p>
                            </div>
                            <div>
                                <p className='text-xs text-neutral-500'>Status</p>
                                <p className='text-sm font-medium text-neutral-700'>SAI <ArrowRightAltOutlined fontSize='small' color='action' />  Siem Reap Town</p>
                            </div>
                            <div>
                                <p className='text-xs text-neutral-500'>Passager</p>
                                <p className='text-sm font-medium text-neutral-700'>1 passager</p>
                            </div>
                            <div>
                                <p className='text-xs text-neutral-500'>Trip</p>
                                <p className='text-sm font-medium text-neutral-700'>One Way</p>
                            </div>
                            <div>
                                <p className='text-xs text-neutral-500'>Payment Method</p>
                                <p className='text-sm font-medium text-neutral-700'>Cash</p>
                            </div>
                        </div>
                    </div>

                    <div className='border border-neutral-200/55 rounded-lg p-4'>
                        <p className='text-base font-semibold text-neutral-700'>Customer Information</p>
                        <div className='grid md:grid-cols-1 lg:grid-cols-2 max-[500px]:grid-cols-1 grid-cols-2 gap-x-4 gap-y-6 mt-4'>
                            <div className=''>
                                <p className='text-xs text-neutral-500'>Full Name</p>
                                <p className='text-sm font-medium text-neutral-700'>Chenter PHAI</p>
                            </div>
                            <div>
                                <p className='text-xs text-neutral-500'>Phone</p>
                                <p className='text-sm font-medium text-neutral-700'>0964903404</p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-neutral-500'>Email</p>
                                <p className='text-sm font-medium text-neutral-700'>chenterphai61@gmail.com</p>
                            </div>
                            <div>
                                <p className='text-xs text-neutral-500'>Special Request</p>
                                <p className='text-sm font-medium text-neutral-700'>A bottle of water</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-neutral-50 shadow p-4 rounded-lg flex items-center justify-between mt-4'>
                    <div>
                        <p className='text-sm font-medium text-neutral-600'>Total Amount</p>
                        <p className='text-xl font-semibold text-primary'>$10.00</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <Button variant="outline" className='text-neutral-600 text-sm cursor-pointer px-8'>
                            Print
                        </Button>
                        <Button className='text-sm cursor-pointer px-8'>
                            Done
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default BookingDetailPage