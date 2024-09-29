import React from 'react';
import { Container, Title } from '@/shared/ui';
import { Categories } from '@/entities';
import { SortPopup } from '@/entities/sort-popup';

const Home: React.FC = () => {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
        <Categories />
        <SortPopup />
      </Container>
    </>
  );
};

export default Home;
