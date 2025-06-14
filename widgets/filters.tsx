'use client';

import React, { useState } from 'react';
import { cn } from '@/shared/lib/utils';
import { Title, Input } from '@/shared';
import { RangeSlider } from '@/entities';
import { CheckboxFiltersGroup } from '@/entities/checkbox-filters-group';
import { useIngredients } from '@/shared/hooks/useIngredients';
import { useFilters } from '@/shared/hooks';

interface IFiltersProps {
  className?: string;
}

interface IPriceRange {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<IFiltersProps> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  const [priceRange, setPriceRange] = useState<IPriceRange>({
    priceFrom: 0,
    priceTo: 2000,
  });
  const items = ingredients.map((item) => ({
    text: item.name,
    value: String(item.id),
  }));

  return (
    <div className={cn('', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до: </p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="от"
            min={0}
            max={2000}
            value={String(priceRange.priceFrom)}
            onChange={(e) =>
              setPriceRange({
                ...priceRange,
                priceFrom: Number(e.target.value),
              })
            }
          />
          <Input
            placeholder="2000"
            type="number"
            min={100}
            max={2000}
            value={String(priceRange.priceTo)}
            onChange={(e) =>
              setPriceRange({
                ...priceRange,
                priceTo: Number(e.target.value),
              })
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={2000}
          step={10}
          value={[priceRange.priceFrom, priceRange.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPriceRange({ priceFrom, priceTo })
          }
        />
      </div>

      <CheckboxFiltersGroup
        title={'Ингредиенты'}
        className="mt-5"
        name="ingredients"
        items={items}
        limit={6}
        defaultItems={items.slice(0, 6)}
        loading={loading}
        onClickCheckbox={(value) => filters.setSelectedIngredients(value)}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
