'use client';

import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import EventCard from '../../components/EventCard';
import events from '../../data/events';

// Helper to get YYYY-MM from a date string
const getMonth = (dateStr: string) => dateStr.slice(0, 7);

// Convert YYYY-MM to Month Year format
const formatMonthYear = (monthStr: string) => {
  const [year, month] = monthStr.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${months[month - 1]} ${year}`;
};

export default function EventsPage() {
  const [locationFilter, setLocationFilter] = useState('All Cities');
  const [monthFilter, setMonthFilter] = useState('All');

  const uniqueLocations = ['All Cities', ...Array.from(new Set(events.map(e => e.location))).sort()];
  const uniqueMonths = ['All', ...Array.from(new Set(events.map(e => getMonth(e.date))))];

  const filteredEvents = events.filter((event) => {
    const matchesLocation = locationFilter === 'All Cities' || event.location === locationFilter;
    const matchesMonth = monthFilter === 'All' || getMonth(event.date) === monthFilter;
    return matchesLocation && matchesMonth;
  });

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-black dark:text-white text-4xl font-bold">Events</h1>

        <div className="flex flex-wrap gap-4 items-center">
          {/* Location Filter */}
          <div className="relative">
            <Listbox value={locationFilter} onChange={setLocationFilter}>
              <div className="relative">
                <Listbox.Button className="w-48 bg-white dark:bg-black border border-gray-700 text-black dark:text-white rounded-md py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {locationFilter}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-[#202124] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                  {uniqueLocations.map((loc, i) => (
                    <Listbox.Option
                      key={i}
                      value={loc}
                      className={({ active }) =>
                        `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                          active ? 'bg-blue-100 dark:bg-gray-700 text-black dark:text-white' : 'text-gray-900 dark:text-gray-300'
                        }`
                      }
                    >
                      {loc}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Month Filter */}
          <div className="relative">
            <Listbox value={monthFilter} onChange={setMonthFilter}>
              <div className="relative">
                <Listbox.Button className="w-48 bg-white dark:bg-black border border-gray-700 text-black dark:text-white rounded-md py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {monthFilter === 'All' ? 'All Dates' : formatMonthYear(monthFilter)}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-[#202124] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                  {uniqueMonths.map((month, i) => (
                    <Listbox.Option
                      key={i}
                      value={month}
                      className={({ active }) =>
                        `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                          active ? 'bg-blue-100 dark:bg-gray-700 text-black dark:text-white' : 'text-gray-900 dark:text-gray-300'
                        }`
                      }
                    >
                      {month === 'All' ? 'All Dates' : formatMonthYear(month)}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
  setLocationFilter('All Cities');
  setMonthFilter('All');
}}

            className="text-white bg-black dark:bg-[#202124] px-4 py-2 rounded-md text-sm font-bold transition"
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
