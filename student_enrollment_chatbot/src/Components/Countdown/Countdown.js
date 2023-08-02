import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Countdown.css';

export default function Countdown() {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate()

    useEffect(() => {
        // Exit early if countdown is already zero or less
        if (countdown <= 0) navigate("/page3");

        const intervalId = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => {
            clearInterval(intervalId);
        };
    }, [countdown, navigate]);

    return <div className="countdown-container">{countdown}</div>;
}
