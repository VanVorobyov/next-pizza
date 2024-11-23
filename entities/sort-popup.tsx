import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ArrowUpDown } from 'lucide-react';

interface ISortPopupProps {
  className?: string;
}

export const SortPopup: React.FC<ISortPopupProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
        className
      )}
    >
      <ArrowUpDown size={16} />
      <strong>Сортировка</strong>
      <strong className="text-primary">популярное</strong>
    </div>
  );
};
