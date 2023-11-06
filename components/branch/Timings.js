"use client";
import React from "react";

const Timings = () => {
  const timings = [
    {
      day: "Monday",
      timing: "1:00 PM - 10:00 PM",
    },
    {
      day: "Tuesday",
      timing: "1:00 PM - 10:00 PM",
    },
    {
      day: "Wednesday",
      timing: "1:00 PM - 10:00 PM",
    },
    {
      day: "Thursday",
      timing: "1:00 PM - 10:00 PM",
    },
    {
      day: "Friday",
      timing: "1:00 PM - 10:00 PM",
    },
    {
      day: "Saturday",
      timing: "1:00 PM - 10:00 PM",
    },
    {
      day: "Sunday",
      timing: "1:00 PM - 10:00 PM",
    },
  ];
  return (
    <div className="bg-white border-y border-gray-300">
      {timings.map((time) => (
        <div
          key={time.day}
          className="p-3 flex w-full justify-between items-center"
        >
          <span>{time.day}</span>
          <span>{time.timing}</span>
        </div>
      ))}
    </div>
  );
};

export default Timings;
