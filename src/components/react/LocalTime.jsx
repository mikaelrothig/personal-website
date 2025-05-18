import { useEffect, useState } from 'react';

const LocalTime = ({ timeZone = 'Europe/Amsterdam' }) => {
    const [time, setTime] = useState('00:00');
    const [offset, setOffset] = useState('(UTC +00:00)');

    const updateTime = () => {
        const now = new Date();

        const formatter = new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone,
        });

        const timeParts = formatter.formatToParts(now);
        const hours = timeParts.find(p => p.type === 'hour')?.value ?? '00';
        const minutes = timeParts.find(p => p.type === 'minute')?.value ?? '00';

        const tzDate = new Date(now.toLocaleString('en-US', { timeZone }));
        const offsetMinutes = -tzDate.getTimezoneOffset();
        const offsetHours = Math.floor(offsetMinutes / 60);
        const offsetRemain = Math.abs(offsetMinutes % 60);

        const sign = offsetHours >= 0 ? '+' : '-';
        const offsetString = `(UTC ${sign}${String(Math.abs(offsetHours)).padStart(2, '0')}:${String(offsetRemain).padStart(2, '0')})`;

        setTime(`${hours}:${minutes}`);
        setOffset(offsetString);
    };

    useEffect(() => {
        updateTime();

        const now = new Date();
        const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

        const timeoutId = setTimeout(() => {
            updateTime();
            const intervalId = setInterval(updateTime, 60000);
            return () => clearInterval(intervalId);
        }, msUntilNextMinute);

        return () => clearTimeout(timeoutId);
    }, [timeZone]);

    return (
        <>
            <span>{time}</span>{' '}
            <span className="text-light-text-secondary dark:text-text-secondary">{offset}</span>
        </>
    );
};

export default LocalTime;