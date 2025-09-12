'use client' ;

import { useEffect, useState } from 'react';

export default function NavbarTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <span>
      <div className="component-landingPage-NavbarTimer ml-4 bg-yellow-400 rounded-full flex items-center px-3 py-1 text-black font-semibold text-xs md:text-sm">
        <div className="component-landingPage-NavbarTimer flex flex-col items-center mx-1">
          <span>{timeLeft.days}</span>
          <span className="component-landingPage-NavbarTimer text-[10px]">DAYS</span>
        </div>
        <div className="component-landingPage-NabarTimer flex flex-col items-center mx-1">
          <span>{timeLeft.hours}</span>
          <span className="component-landingPage-NavbarTimer text-[10px]">HOURS</span>
        </div>
        <div className="component-landingPage-NabarTimer flex flex-col items-center mx-1">
          <span>{timeLeft.minutes}</span>
          <span className="component-landingPage-NavbarTimer text-[10px]">MINUTES</span>
        </div>
        <div className="component-landingPage-NavbarTimer flex flex-col items-center mx-1">
          <span>{timeLeft.seconds}</span>
          <span className="component-landingPage-NavbarTimer text-[10px]">SECONDS</span>
        </div>
      </div>
    </span>
  );
}