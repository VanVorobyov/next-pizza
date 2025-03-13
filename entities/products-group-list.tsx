'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/shared/lib/utils';
import { ProductCard } from './product-card';
import { Title } from '@/shared/ui';
import { useIntersection } from '@/shared/hooks';
import { useCategoryStore } from '@/shared/store/category';

interface Props {
  title: string;
  items: IProduct[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  items: { price: number }[];
  ingredients: string[];
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            ingredients={[]}
          />
        ))}
      </div>
    </div>
  );
};
