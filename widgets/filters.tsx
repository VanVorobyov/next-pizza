import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Checkbox, Title } from '@/shared';
import { FilterCheckbox } from '@/entities';

interface IFiltersProps {
  className?: string;
}

export const Filters: React.FC<IFiltersProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
    </div>
  );
};
