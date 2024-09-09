import React from 'react';
import { Container, Title } from '@/shared/ui';

const Home: React.FC = () => {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
    </>
  );
};

export default Home;
