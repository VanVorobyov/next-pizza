import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Checkbox, Title, Input } from '@/shared';
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

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до: </p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="от"
            min={0}
            max={2000}
            defaultValue={0}
          />
          <Input
            placeholder="2000"
            type="number"
            min={100}
            max={2000}
            defaultValue={500}
          />
        </div>
      </div>
    </div>
  );
};
