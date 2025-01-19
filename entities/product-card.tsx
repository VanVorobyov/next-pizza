import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Button, Title } from '@/shared/ui';
import clsx from 'clsx';
import { Plus } from 'lucide-react';

interface IProductCardProps {
  className?: string;
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  ingredients: string[];
}

export const ProductCard: React.FC<IProductCardProps> = ({
  className,
  id,
  title,
  price,
  imageUrl,
  ingredients,
}) => {
  return (
    <article className={clsx('flex flex-col', className)}>
      <Title text={title} size="md" className="mb-1 mt-3 font-bold order-2" />
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px] order-1">
          <img
            className="w-[215px] h-[215px]"
            src={
              imageUrl ||
              'https://media.dodostatic.net/image/r:584x584/11eef9e43dc39c94aa5765dbf1c97100.avif'
            }
            alt={`Изображение ${title}`}
          />
        </div>
      </Link>

      <p className="text-sm text-gray-400 order-3">
        {ingredients.map((ingredient) => ingredient).join(', ')}
      </p>

      <div className="flex justify-between items-center mt-4 order-4">
        <span className="text-[20px]">
          от <b>{price} ₽</b>
        </span>

        <Button variant="secondary" className="text-base font-bold">
          <Plus size={20} className="mr-1" />
          Добавить
        </Button>
      </div>
    </article>
  );
};
