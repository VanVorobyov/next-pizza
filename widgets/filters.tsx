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

  const items = ingredients.map((item) => ({
    text: item.name,
    value: String(item.id),
  }));

  const updatePrices = (prices: number[]) => {
    console.log(prices, 999);
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

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
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices('priceFrom', Number(e.target.value))
            }
          />
          <Input
            placeholder="2000"
            type="number"
            min={100}
            max={2000}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices('priceTo', Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={2000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 2000,
          ]}
          onValueChange={updatePrices}
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
