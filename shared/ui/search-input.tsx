'use client';

import React, { useRef, useState } from 'react';
import { cn } from '../lib/utils';
import { Search } from 'lucide-react';
import { useClickOutside } from '../hooks';

interface ISearchInputProps {
  className?: string;
}

export const SearchInput: React.FC<ISearchInputProps> = React.memo(
  ({ className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [focused, setFocused] = useState<boolean>(false);

    useClickOutside(ref, () => {
      setFocused(false);
    });

    return (
      <>
        {focused && (
          <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
        )}

        <div
          ref={ref}
          className={cn(
            'flex rounded-2xl flex-1 justify-between relative h-11 z-30',
            className
          )}
        >
          <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
          <input
            className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
            type="text"
            placeholder="Найти пиццу..."
            onFocus={() => setFocused(true)}
          ></input>
        </div>
      </>
    );
  }
);
