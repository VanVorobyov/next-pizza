import React, { Suspense } from 'react';
import { Container, Title } from '@/shared/ui';
import { TopBar } from '@/widgets';
import { Filters } from '@/widgets/filters';
import { ProductsGroupList } from '@/entities/products-group-list';
import { prisma } from '@/prisma/prisma-client';

const Home: React.FC = async () => {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
          ingredients: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* left side of content (filters) */}
          <div className="w-[250px]">
            <Suspense fallback={<div>Loading...</div>}>
              <Filters />
            </Suspense>
          </div>

          {/* right side of content (pizzas) */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
