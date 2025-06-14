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
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const uniqueLocations = ['All Cities', ...Array.from(new Set(events.map(e => e.location))).sort()];
  const uniqueMonths = ['All', ...Array.from(new Set(events.map(e => getMonth(e.date))))];

  const filteredEvents = events.filter((event) => {
    const matchesLocation = locationFilter === 'All Cities' || event.location === locationFilter;
    const matchesMonth = monthFilter === 'All' || getMonth(event.date) === monthFilter;
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase());
    return matchesLocation && matchesMonth && matchesSearch;
  });

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Title and Filters Row */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-4xl font-bold text-black dark:text-white">Events</h1>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden text-sm px-3 py-2 text-white bg-[#0071e3] px-4 py-2 rounded-md text-sm font-bold transition hover:bg-blue-600"
          >
            {showFilters ? 'Close' : 'Filter'}
          </button>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center gap-4">
            <input
              type="text"
              placeholder="Search artist..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-72 px-4 py-2 border border-gray-700 rounded-md bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 focus:outline-none focus:ring-[#0071e3] dark:focus:ring-[#202124]"
            />

            <div className="relative w-48">
              <Listbox value={locationFilter} onChange={setLocationFilter}>
                <div className="relative">
                  <Listbox.Button className="w-full bg-white dark:bg-black border border-gray-700 text-black dark:text-white rounded-md py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-[#0071e3] dark:focus:ring-[#202124] hover:bg-gray-100 dark:hover:bg-[#202124]">
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

            <div className="relative w-48">
              <Listbox value={monthFilter} onChange={setMonthFilter}>
                <div className="relative">
                  <Listbox.Button className="w-full bg-white dark:bg-black border border-gray-700 text-black dark:text-white rounded-md py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-[#0071e3] dark:focus:ring-[#202124] hover:bg-gray-100 dark:hover:bg-[#202124]">
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

            <button
              onClick={() => {
                setLocationFilter('All Cities');
                setMonthFilter('All');
                setSearch('');
              }}
              className="text-black dark:text-white bg-[#E2E5E9] dark:bg-neutral-800 px-4 py-2 rounded-md text-sm font-bold transition hover:bg-[#DADDE1] dark:hover:bg-neutral-700"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="lg:hidden flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search artist..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 focus:outline-none focus:ring-[#0071e3] dark:focus:ring-[#202124]"
            />

            <div className="relative w-full">
              <Listbox value={locationFilter} onChange={setLocationFilter}>
                <div className="relative">
                  <Listbox.Button className="w-full bg-white dark:bg-black border border-gray-700 text-black dark:text-white rounded-md py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-[#0071e3] dark:focus:ring-[#202124] hover:bg-gray-100 dark:hover:bg-[#202124]">
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

            <div className="relative w-full">
              <Listbox value={monthFilter} onChange={setMonthFilter}>
                <div className="relative">
                  <Listbox.Button className="w-full bg-white dark:bg-black border border-gray-700 text-black dark:text-white rounded-md py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-[#0071e3] dark:focus:ring-[#202124] hover:bg-gray-100 dark:hover:bg-[#202124]">
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

            <button
              onClick={() => {
                setLocationFilter('All Cities');
                setMonthFilter('All');
                setSearch('');
              }}
              className="text-black dark:text-white bg-[#E2E5E9] dark:bg-neutral-800 bg-neutral-800 px-6 py-2 rounded-md text-sm font-bold transition self-center hover:bg-[#DADDE1] dark:hover:bg-neutral-700"
            >
              Reset
            </button>
          </div>
        )}
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}
