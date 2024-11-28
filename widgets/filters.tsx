import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title, Input } from '@/shared';
import { FilterCheckbox, RangeSlider } from '@/entities';
import { CheckboxFiltersGroup } from '@/entities/checkbox-filters-group';

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

        <RangeSlider min={0} max={2000} step={10} value={[0, 2000]} />
      </div>

      <CheckboxFiltersGroup
        title={'Ингредиенты'}
        className="mt-5"
        items={[
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Моцарелла',
            value: '2',
          },
          {
            text: 'Чеснок',
            value: '3',
          },
          {
            text: 'Соленые огурчики',
            value: '4',
          },
          {
            text: 'Красный лук',
            value: '5',
          },
          {
            text: 'Томаты',
            value: '6',
          },
        ]}
        limit={6}
        defaultItems={[
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Моцарелла',
            value: '2',
          },
          {
            text: 'Чеснок',
            value: '3',
          },
          {
            text: 'Соленые огурчики',
            value: '4',
          },
          {
            text: 'Красный лук',
            value: '5',
          },
          {
            text: 'Томаты',
            value: '6',
          },
        ]}
      />
    </div>
  );
};
