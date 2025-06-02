'use client';

import { useState } from "react";
import EventCard from "../../components/EventCard";
import events from '../../data/events';

// Helper to extract "YYYY-MM" from full date
const getMonth = (dateStr: string) => dateStr.slice(0, 7);

// ✅ Manual formatter to avoid timezone issues
const formatMonthYear = (monthStr: string) => {
  const [year, month] = monthStr.split("-").map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${months[month - 1]} ${year}`;
};

export default function EventsPage() {
  const [locationFilter, setLocationFilter] = useState("All");
  const [monthFilter, setMonthFilter] = useState("All");
  
  const uniqueLocations = ["All", ...Array.from(new Set(events.map(e => e.location))).sort()];
  const uniqueMonths = ["All", ...Array.from(new Set(events.map(e => getMonth(e.date))))];

  const filteredEvents = events.filter((event) => {
    const matchesLocation = locationFilter === "All" || event.location === locationFilter;
    const matchesMonth = monthFilter === "All" || getMonth(event.date) === monthFilter;
    return matchesLocation && matchesMonth;
  });

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-black dark:text-white text-4xl font-bold">Events</h1>

        <div className="flex flex-wrap items-center gap-4 mb-2">
          {/* Location Filter */}
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="text-black dark:text-white bg-white dark:bg-[#202124] border border-gray-700 px-3 py-2 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-[#202124]"
          >
            {uniqueLocations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc === "All" ? "All Locations" : loc}
              </option>
            ))}
          </select>

          {/* Month Filter */}
          <select
            value={monthFilter}
            onChange={(e) => setMonthFilter(e.target.value)}
            className="text-black dark:text-white bg-white dark:bg-[#202124] border border-gray-700 px-3 py-2 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-[#202124]"
          >
            {uniqueMonths.map((month, index) => (
              <option key={index} value={month}>
                {month === "All" ? "All Dates" : formatMonthYear(month)}
              </option>
            ))}
          </select>

          {/* Reset Button */}
          <button
            onClick={() => {
              setLocationFilter("All");
              setMonthFilter("All");
            }}
            className="text-black dark:text-white bg-white dark:bg-[#202124] border border-gray-700 px-4 py-2 rounded-md text-sm font-bold transition"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}
