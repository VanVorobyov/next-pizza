import { cn } from '@/shared/lib/utils';
import React from 'react';

interface ICategoriesProps {
  className?: string;
}

const categories = [
  'Пиццы',
  'Комбо',
  'Закуски',
  'Коктейли',
  'Кофе',
  'Напитки',
  'Десерты',
];
const activeIndex = 0;

export const Categories: React.FC<ICategoriesProps> = ({ className }) => {
  return (
    <ul
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {categories.map((categorie, index) => (
        <li key={index}>
          <a
            href='#'
            className={cn(
              'flex items-center gap-1 font-bold h-11 px-5 rounded-xl',
              index === activeIndex &&
                'bg-white shadow-md shadow-gray-200 text-primary'
            )}
          >
            <button className='flex items-center gap-1 font-bold h-11 px-5 rounded-xl'>
              {categorie}
            </button>
          </a>
        </li>
      ))}
    </ul>
  );
};
