'use client'

import { useState, useEffect } from 'react';

export default function Clock() {
    const [daysPassed, setDaysPassed] = useState(0);

    function countingDays(startDate) {
        const start = new Date(startDate);
        const today = new Date();
        const timeDiff = today.getTime() - start.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        return daysDiff;
    }

    useEffect(() => {
        const startDate = "2023-01-08"; // "YYYY-MM-DD" format
        const daysPassed = countingDays(startDate);
        setDaysPassed(daysPassed);
    }, []);

    return (
        <div>
            <p className='text-block'> Há  {daysPassed} dias aguardando por justiça</p>
        </div>
    );
}
