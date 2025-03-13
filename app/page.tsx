import React from 'react';
import { Container, Title } from '@/shared/ui';
import { TopBar } from '@/widgets';
import { Filters } from '@/widgets/filters';
import { IProduct, ProductsGroupList } from '@/entities/products-group-list';

const mockProductData: IProduct[] = [
  {
    id: '1',
    name: 'Пицца "Додо"',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/01939b6f01a676059b576eaab98abb2d.avif',
    items: [{ price: 499 }],
    ingredients: ['Тесто', 'Сыр моцарелла', 'Пепперони', 'Томатный соус'],
  },
  {
    id: '2',
    name: 'Пицца "Маргарита"',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11ee7d6105ef6690b86fbde6150b5b0c.avif',
    items: [{ price: 399 }],
    ingredients: ['Тесто', 'Сыр моцарелла', 'Томатный соус', 'Базилик'],
  },
  {
    id: '3',
    name: 'Пицца "Цезарь"',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11ee7d613b84a5dbb4c1c50fb9583b7e.avif',
    items: [{ price: 649 }],
    ingredients: [
      'Тесто',
      'Курица',
      'Сыр моцарелла',
      'Листья салата',
      'Цезарь соус',
    ],
  },
  {
    id: '4',
    name: 'Пицца "Гавайская"',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11ee7d617e9339cfb185921a343ad8fd.avif',
    items: [{ price: 549 }],
    ingredients: [
      'Тесто',
      'Сыр моцарелла',
      'Курица',
      'Ананас',
      'Томатный соус',
    ],
  },
  {
    id: '5',
    name: 'Пицца "Мексиканская"',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11ee7d61706d472f9a5d71eb94149304.avif',
    items: [{ price: 599 }],
    ingredients: [
      'Тесто',
      'Сыр моцарелла',
      'Говядина',
      'Перец чили',
      'Томатный соус',
    ],
  },
];

const Home: React.FC = () => {
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
            <Filters />
          </div>

          {/* right side of content (pizzas) */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={mockProductData}
                categoryId={1}
                listClassName="gap-16"
              />
              <ProductsGroupList
                title="Комбо"
                items={mockProductData}
                categoryId={2}
                listClassName="gap-16"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
