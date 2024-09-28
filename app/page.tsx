import React from 'react';
import { Container, Title } from '@/shared/ui';
import { Categories } from '@/entities';

const Home: React.FC = () => {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
        <Categories />
      </Container>
    </>
  );
};

export default Home;
