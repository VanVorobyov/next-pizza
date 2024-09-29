import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Container } from '@/shared/ui';
import { Categories, SortPopup } from '@/entities';

interface ITopBarProps {
  className?: string;
}

export const TopBar: React.FC<ITopBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
        className
      )}
    >
      <Container className='flex items-center justify-between'>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
