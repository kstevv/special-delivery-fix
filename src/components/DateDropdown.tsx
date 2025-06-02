'use client';

import { Listbox } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';

interface Props {
  selected: string;
  options: string[];
  onChange: (val: string) => void;
}

export default function DateDropdown({ selected, options, onChange }: Props) {
  return (
    <div className="relative w-full sm:w-64">
      <Listbox value={selected} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Button className="w-full bg-white dark:bg-[#202124] border border-gray-700 text-left px-4 py-2 rounded-md flex items-center justify-between text-black dark:text-white">
              {selected === 'All'
                ? 'All Dates'
                : new Date(`${selected}`).toLocaleString('default', {
                    month: 'long',
                    year: 'numeric',
                  })}
              <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
            </Listbox.Button>
            <Listbox.Options className="absolute z-50 mt-1 w-full bg-white dark:bg-[#202124] shadow-lg rounded-md max-h-60 overflow-auto text-black dark:text-white ring-1 ring-black ring-opacity-5">
              {options.map((month, idx) => (
                <Listbox.Option
                  key={idx}
                  value={month}
                  className={({ active }) =>
                    `cursor-pointer select-none px-4 py-2 ${
                      active ? 'bg-gray-100 dark:bg-zinc-800' : ''
                    }`
                  }
                >
                  {({ selected }) => (
                    <div className="flex justify-between items-center">
                      <span>
                        {month === 'All'
                          ? 'All Dates'
                          : new Date(`${month}`).toLocaleString('default', {
                              month: 'long',
                              year: 'numeric',
                            })}
                      </span>
                      {selected && <Check className="w-4 h-4 text-blue-500" />}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
}
