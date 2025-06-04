'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title, Input } from '@/shared';
import { FilterCheckbox, RangeSlider } from '@/entities';
import { CheckboxFiltersGroup } from '@/entities/checkbox-filters-group';
import { useFilterIngredients } from '@/shared/hooks';

interface IFiltersProps {
  className?: string;
}

export const Filters: React.FC<IFiltersProps> = ({ className }) => {
  const { ingredients } = useFilterIngredients();
  const items = ingredients.map((item) => ({
    text: item.name,
    value: String(item.id),
  }));

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

        <RangeSlider min={0} max={2000} step={10} value={[0, 2000]} />
      </div>

      <CheckboxFiltersGroup
        title={'Ингредиенты'}
        className="mt-5"
        items={items}
        limit={6}
        defaultItems={items.slice(0, 6)}
      />
    </div>
  );
};
