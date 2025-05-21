"use client"
import React, { useRef, useState } from 'react'
import TextField from "@mui/material/TextField"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import SwapHorizOutlined from "@mui/icons-material/SwapHorizOutlined"

const TicketBookingSection = () => {
    const today = new Date();

    // Departure time related state and handlers
    const [selectedTime, setSelectedTime] = useState<Date | null>(today);
    const [isOpen, setIsOpen] = useState(false);
    const timePickerRef = useRef(null);

    const handleTimeFocus = () => {
        setIsOpen(true);
    };

    const handleTimeChange = (date: Date | null) => {
        setSelectedTime(date);
        setIsOpen(false);
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

            // Set a reasonable default return time (same time as departure)
            if (selectedTime) {
                const defaultReturnTime = new Date(selectedTime);
                setReturnTime(defaultReturnTime);
            }
        }
    };

    const [direction, setDirection] = useState("from");
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

    return (
        <section className='mt-[132px]' >
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
                                            />
                                            <SwapHorizOutlined />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>

                        <div className='relative lg:col-span-1 col-span-2'>
                            <TextField
                                required
                                label="Departure Time"
                                className='w-full'
                                id="departure-time-field"
                                value={selectedTime ? moment(selectedTime).format("hh:mm A") : ""}
                                onFocus={handleTimeFocus}
                                InputProps={{ readOnly: true }}
                            />
                            {isOpen && (
                                <div className="absolute top-8 z-10 right-1/2">
                                    <DatePicker
                                        selected={selectedTime}
                                        onChange={(date) => handleTimeChange(date)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="hh:mm a"
                                        open={true}
                                        onClickOutside={() => setIsOpen(false)}
                                        ref={timePickerRef}
                                        className='hidden'
                                    />
                                </div>
                            )}
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
                <div className='mt-6 grid lg:grid-cols-6 grid-cols-1 gap-4'>
                    <div className='grid lg:grid-cols-3 grid-cols-1 items-center gap-3 lg:col-span-5'>
                        <div className='flex items-center gap-1.5'>
                            <Image
                                src="/bus2.svg"
                                alt='Bus 2'
                                width={20}
                                height={20}
                                loading='lazy'
                            />
                            <span className='text-xs text-neutral-500'>Journey duration is 1 hrs 0 mins.</span>
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <Image
                                src="/clock.svg"
                                alt='Bus 2'
                                width={18}
                                height={18}
                                loading='lazy'
                            />
                            <span className='text-xs text-neutral-500'>First bus is at 05:30 & last bus is at 19:00.</span>
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <Image
                                src="/dollar.svg"
                                alt='Bus 2'
                                width={18}
                                height={18}
                                loading='lazy'
                            />
                            <span className='text-xs text-neutral-500'>Price starts from USD 8.</span>
                        </div>
                    </div>
                    <div className=''>
                        <Link href="/book-ticket">
                            <Button className='h-12 w-full rounded cursor-pointer'>
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TicketBookingSection