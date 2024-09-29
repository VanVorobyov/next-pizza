import React from 'react';
import { Container, Title } from '@/shared/ui';
import { TopBar } from '@/widgets';

const Home: React.FC = () => {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
    </>
  );
};

export default Home;
