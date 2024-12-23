import React from 'react';
import { Container, Title } from '@/shared/ui';
import { TopBar } from '@/widgets';
import { Filters } from '@/widgets/filters';

const Home: React.FC = () => {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap=[60px]">
          {/* left side of content (filters) */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* right side of content (pizzas) */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">pizza list</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
