'use client';

import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import React from 'react';

interface ICategoriesProps {
  className?: string;
}

const categories = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Кофе' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десерты' },
];

export const Categories: React.FC<ICategoriesProps> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <ul
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {categories.map(({ name, id }) => (
        <li key={id}>
          <a
            href={`#${name}`}
            className={cn(
              'flex items-center gap-1 font-bold h-11 px-5 rounded-xl',
              id === categoryActiveId &&
                'bg-white shadow-md shadow-gray-200 text-primary'
            )}
          >
            <button>{name}</button>
          </a>
        </li>
      ))}
    </ul>
  );
};
