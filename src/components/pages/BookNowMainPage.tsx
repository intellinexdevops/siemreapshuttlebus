"use client"
import React, { useRef, useState } from 'react'
import TextField from "@mui/material/TextField"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import SwapHorizOutlined from "@mui/icons-material/SwapHorizOutlined"
import { Button } from '../ui/button';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import Loading from '@/app/loading';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import {
    Dialog,
    DialogContent,
    // DialogDescription,
    // DialogFooter,
    // DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from 'next/image';
import Link from 'next/link';

type CustomerInfoType = Partial<{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    paymentInfo: string;
    specialRequest: string;
}>

const BookNowMainPage = () => {
    const today = new Date();

    const departureFrom = useQuery(api.airplane_time.getFrom);
    const departureTo = useQuery(api.airplane_time.getTo);

    const [direction, setDirection] = useState("from");

    // Departure time related state and handlers
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    React.useEffect(() => {
        // if (selectedTime === null) { // only set if nothing selected yet
        if (direction === "from" && departureFrom?.length) {
            setSelectedTime(departureFrom[0].time);
        } else if (direction === "to" && departureTo?.length) {
            setSelectedTime(departureTo[0].time);
        }
        // }
    }, [direction, departureFrom, departureTo, selectedTime]);

    const handleTimeChange = (date: string | null) => {
        setSelectedTime(date);
        // setIsOpen(false);
    };

    // Return time related state and handlers
    const [returnTime, setReturnTime] = useState<Date | null>(today);
    const [isReturnTimeOpen, setIsReturnTimeOpen] = useState(false);
    const returnTimePickerRef = useRef(null);

    const handleReturnTimeFocus = () => {
        setIsReturnTimeOpen(true);
    };

    const handleReturnTimeChange = (date: Date | null) => {
        setReturnTime(date);
        setIsReturnTimeOpen(false);
    };

    // Departure date related state and handlers
    const [selectedDate, setSelectedDate] = useState<Date | null>(today);
    const [isDateOpen, setIsDateOpen] = useState<boolean>(false);
    const datePickerRef = useRef(null);

    const handleDateFocus = () => {
        setIsDateOpen(true);
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        setIsDateOpen(false);

        // If return date is earlier than the new departure date, update it
        if (returnDate && date && returnDate < date) {
            setReturnDate(date);
        }
    };

    // Return date related state and handlers
    const [returnDate, setReturnDate] = useState<Date | null>(today);
    const [isReturnDateOpen, setIsReturnDateOpen] = useState<boolean>(false);
    const returnDatePickerRef = useRef(null);

    const handleReturnDateFocus = () => {
        setIsReturnDateOpen(true);
    };

    const handleReturnDateChange = (date: Date | null) => {
        setReturnDate(date);
        setIsReturnDateOpen(false);
    };

    // Passenger selection state
    const [passager, setPassager] = useState('1');

    const handleChange = (event: SelectChangeEvent) => {
        setPassager(event.target.value as string);
    };

    // Payment Method
    const [payment, setPayment] = useState('cash')

    const handleChangePayment = (event: SelectChangeEvent) => {
        setPayment(event.target.value as string)
    }

    // Trip type selection state
    const [trip, setTrip] = useState('1');

    const handleChangeTrip = (event: SelectChangeEvent) => {
        setTrip(event.target.value as string);

        // When switching to round trip, initialize return date and time if needed
        if (event.target.value === '2' && selectedDate) {
            // Set return date to at least the departure date
            const nextDay = new Date(selectedDate);
            nextDay.setDate(nextDay.getDate() + 1);
            setReturnDate(nextDay);
        }
    };

    const airport = "SR Int. Airport";
    const siemreap = "Siem Reap Town";
    const [displayDirection, setDisplayDirection] = useState<string>(`${airport} - ${siemreap}`)

    const handleOnSwapChange = () => {
        if (direction === "from") {
            setDirection("to")
            setDisplayDirection(`${siemreap} - ${airport}`)
        } else {
            setDirection("from")
            setDisplayDirection(`${airport} - ${siemreap}`)
        }
    }

    // ReCAPTCHA
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerified, setIsVerified] = useState(false);

    async function handleCaptchaSubmission(token: string | null) {
        try {
            if (token) {
                await fetch("/api/recaptcha", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                });
                setIsVerified(true);
            }
        } catch (e: unknown) {
            console.error(e)
            setIsVerified(false);
        }
    }

    function onChange(token: string | null) {
        handleCaptchaSubmission(token)
    }

    function handleExpired() {
        setIsVerified(false);
    }

    const [customerInfo, setCustomerInfo] = useState<CustomerInfoType | null>(null)

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleBookNow = async () => {
        setIsLoading(true);
        try {
            const data = {
                to: customerInfo?.email,
                name: `${customerInfo?.firstName} ${customerInfo?.lastName}`,
                ticketType: "Airplane Ticket",
                phone: customerInfo?.phoneNumber,
                passager: Number(passager),
                price: "35",
                email: customerInfo?.email
            }

            const response = await axios.post('/api/send', data)

            if (response.data.status.code === 0) {
                setCustomerInfo(null)
                setIsSuccess(true)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className='mt-[132px] mb-[100px]' >
            {isLoading && (
                <Loading />
            )}
            <div className='container mx-auto bg-white p-5 rounded-lg'>
                <div className='flex'>
                    <div className='flex flex-col gap-y-2'>
                        <p className='text-xl font-semibold text-neutral-700'>Ticket Booking</p>
                        <div className='h-[3px] bg-primary' />
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-x-4 gap-y-8'>
                        <div className='col-span-2'>
                            <FormControl fullWidth variant='outlined'>
                                <InputLabel htmlFor="direction">From - To</InputLabel>
                                <OutlinedInput
                                    id='direction'
                                    type='text'
                                    label="From - To"
                                    value={displayDirection}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label='swap'
                                                edge="end"
                                                onClick={handleOnSwapChange}
                                            >
                                                <SwapHorizOutlined />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>

                        <div className='relative lg:col-span-1 col-span-2'>
                            <FormControl fullWidth>
                                {departureFrom && departureTo ? (
                                    <>
                                        <InputLabel id="departure-time-select-label">Departure Time</InputLabel>
                                        <Select
                                            labelId="departure-time-select-label"
                                            id="departure-time-select"
                                            value={selectedTime ?? ""}
                                            label="Departure Time"
                                            onChange={(e) => handleTimeChange(e.target.value)}
                                        >
                                            {(direction === 'from') && (
                                                departureFrom ? (
                                                    departureFrom.map((item, index) => (
                                                        <MenuItem key={index} value={item.time}>
                                                            {item.time}
                                                        </MenuItem>
                                                    ))) : (<div className='flex justify-center items-center py-4'>
                                                        <CircularProgress size={20} />
                                                    </div>
                                                )
                                            )}

                                            {(direction === 'to') && (
                                                departureTo ? (
                                                    departureTo.map((item, index) => (
                                                        <MenuItem key={index} value={item.time}>
                                                            {item.time}
                                                        </MenuItem>
                                                    ))) : (<div className='flex justify-center items-center py-4'>
                                                        <CircularProgress size={20} />
                                                    </div>
                                                )
                                            )}
                                        </Select>
                                    </>
                                ) : (
                                    <>
                                        <TextField
                                            id="departure-time-select"
                                            disabled
                                            label="Departure Time"
                                            onChange={(e) => handleTimeChange(e.target.value)}
                                            value={moment(today).format("HH:mm A")}
                                        />
                                        <CircularProgress className='absolute top-4 right-4' size={20} />

                                    </>
                                )}
                            </FormControl>


                        </div>
                        <div className='relative lg:col-span-1 col-span-2'>
                            <TextField
                                required
                                label="Departure Date"
                                className='w-full'
                                id="departure-date-field"
                                onFocus={handleDateFocus}
                                value={selectedDate ? moment(selectedDate).format("DD MMM YYYY") : ""}
                                InputProps={{ readOnly: true }}
                            />
                            {isDateOpen && (
                                <div className='absolute left-1/2 top-8 z-10'>
                                    <DatePicker
                                        selected={selectedDate}
                                        className='hidden'
                                        onChange={(date) => handleDateChange(date)}
                                        timeIntervals={15}
                                        ref={datePickerRef}
                                        open={true}
                                        onClickOutside={() => setIsDateOpen(false)}
                                        minDate={today}
                                    />
                                </div>
                            )}
                        </div>

                        <div className='grid grid-cols-2 col-span-2 gap-4'>
                            <div>
                                <FormControl fullWidth>
                                    <InputLabel id="passenger-select-label">No. Passager</InputLabel>
                                    <Select
                                        labelId="passenger-select-label"
                                        id="passenger-select"
                                        value={passager}
                                        label="No. Passager"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'1'}>1 passager</MenuItem>
                                        <MenuItem value={'2'}>2 passagers</MenuItem>
                                        <MenuItem value={'3'}>3 passagers</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div>
                                <FormControl fullWidth>
                                    <InputLabel id="trip-select-label">Trip</InputLabel>
                                    <Select
                                        labelId="trip-select-label"
                                        id="trip-select"
                                        value={trip}
                                        label="Trip"
                                        onChange={handleChangeTrip}
                                    >
                                        <MenuItem value={'1'}>One Way</MenuItem>
                                        <MenuItem value={'2'}>Round trip</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                        </div>
                        {trip === "2" && (
                            <>
                                <div className='relative col-span-2'>
                                    <TextField
                                        required
                                        label="Return Date"
                                        className='w-full'
                                        id="return-date-field"
                                        onFocus={handleReturnDateFocus}
                                        value={returnDate ? moment(returnDate).format("DD MMM YYYY") : ""}
                                        InputProps={{ readOnly: true }}
                                    />
                                    {isReturnDateOpen && (
                                        <div className='absolute left-1/2 top-8 z-10'>
                                            <DatePicker
                                                selected={returnDate}
                                                className='hidden'
                                                onChange={(date) => handleReturnDateChange(date)}
                                                timeIntervals={15}
                                                ref={returnDatePickerRef}
                                                open={true}
                                                onClickOutside={() => setIsReturnDateOpen(false)}
                                                minDate={selectedDate || today}
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className='relative lg:col-span-1 col-span-2'>
                                    <TextField
                                        required
                                        label="Return Time"
                                        className='w-full'
                                        id="return-time-field"
                                        value={returnTime ? moment(returnTime).format("hh:mm A") : ""}
                                        onFocus={handleReturnTimeFocus}
                                        InputProps={{ readOnly: true }}
                                    />
                                    {isReturnTimeOpen && (
                                        <div className="absolute top-8 z-10 right-1/2">
                                            <DatePicker
                                                selected={returnTime}
                                                onChange={(date) => handleReturnTimeChange(date)}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="Time"
                                                dateFormat="hh:mm a"
                                                open={true}
                                                onClickOutside={() => setIsReturnTimeOpen(false)}
                                                ref={returnTimePickerRef}
                                                className='hidden'
                                            />
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className='mt-14'>
                    <div className='flex'>
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-xl font-medium text-neutral-700'>Personal Information</p>
                            {/* <div className='h-[3px] bg-primary' /> */}
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mt-4'>
                        <TextField
                            required
                            label="First name"
                            type='text'
                            id='firstname'
                            value={customerInfo?.firstName ?? ""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomerInfo({ ...customerInfo, firstName: e.target.value })}
                        />
                        <TextField
                            required
                            label="Last name"
                            type='text'
                            id='lastname'
                            value={customerInfo?.lastName ?? ""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomerInfo({ ...customerInfo, lastName: e.target.value })}
                        />
                        <TextField
                            required
                            label="Email"
                            type='email'
                            value={customerInfo?.email ?? ""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                        />
                        <TextField
                            required
                            label="Phone Number"
                            type='text'
                            value={customerInfo?.phoneNumber ?? ""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomerInfo({ ...customerInfo, phoneNumber: e.target.value })}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="payment-select-label">Payment Method</InputLabel>
                            <Select
                                labelId="payment-select-label"
                                id="payment-select"
                                value={payment}
                                label="Payment Method"
                                onChange={handleChangePayment}
                            >
                                <MenuItem value={'cash'}>Cash</MenuItem>
                                <MenuItem value={'khqr'}>KHQR</MenuItem>
                                <MenuItem value={'abapay'}>Credit Card</MenuItem>
                            </Select>
                        </FormControl>
                        <div className='col-span-2'>
                            <TextField
                                type='text'
                                label="Special Request (optional)"
                                className='w-full'
                                multiline
                                id='special-request'
                                placeholder='Ex: I need a bottle of water'
                                maxRows={4}
                                value={customerInfo?.specialRequest ?? ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomerInfo({ ...customerInfo, specialRequest: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-6 grid lg:grid-cols-6 grid-cols-1 gap-4'>
                    <div className='grid lg:grid-cols-3 grid-cols-1 items-center gap-3 lg:col-span-5'>
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                            ref={recaptchaRef}
                            onChange={onChange}
                            onExpired={handleExpired}
                        />
                    </div>
                    <div className=''>

                        <Button className='h-12 w-full rounded cursor-pointer' disabled={!isVerified} onClick={handleBookNow}>
                            Book Now
                        </Button>

                    </div>
                </div>
            </div>
            <Dialog modal open={isSuccess} onOpenChange={setIsSuccess}>
                <DialogTitle>
                </DialogTitle>
                <DialogContent>
                    <div className='flex flex-col items-center justify-center'>
                        <Image
                            src="/email-tick.svg"
                            alt='Success Booking'
                            width={50}
                            height={50}
                            loading='lazy'
                        />
                        <p className='md:text-xl text-center text-lg font-medium text-neutral-700 mt-4'>
                            Your booking has been confirmed!
                        </p>
                        <p className='text-sm text-neutral-500 mt-2 text-center'>
                            Check your email for detail and bring <br /> confirmation number upon arrival.
                        </p>
                        <div className='mt-6 flex items-center gap-x-4'>
                            <Link href='/booking-detail'>
                                <Button className='h-10 px-5 rounded cursor-pointer bg-neutral-100 text-neutral-500 hover:bg-neutral-200' onClick={() => setCustomerInfo(null)}>
                                    View Detail
                                </Button>
                            </Link>

                            <Button className='h-10 px-8 rounded cursor-pointer' onClick={() => setIsSuccess(false)}>
                                Done
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    )
}

export default BookNowMainPage