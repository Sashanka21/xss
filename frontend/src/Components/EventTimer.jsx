import React, { useState, useEffect } from 'react';

const EventTimer = () => {
  const today = new Date();
  const eventDate = new Date(today.setDate(today.getDate() + 365));

  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      } else {
        setTimeLeft({
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
      }
    };

    const timerId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerId);
  }, [eventDate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-2">Event Starts In:</h1>
        <div className="text-4xl font-mono tracking-wider">
          {timeLeft.hours}H:{timeLeft.minutes}M:{timeLeft.seconds}S
        </div>
      </div>
    </div>
  );
};

export default EventTimer;
