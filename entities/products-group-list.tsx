'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ProductCard } from './product-card';
import { Title } from '@/shared/ui';

interface Props {
  title: string;
  items: IProduct[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  items: {
    price: number;
  };
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  className,
}) => {
  const { price } = items[0].items;
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            imageUrl={product.imageUrl}
            price={price as number}
            ingredients={[]}
          />
        ))}
      </div>
    </div>
  );
};
