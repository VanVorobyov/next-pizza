import { _ingredients, categories, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const up = async () => {
  try {
    await prisma.user.createMany({
      data: [
        {
          fullName: 'User',
          password: hashSync('11111', 10),
          email: 'user@test.ru',
          verified: new Date(),
          role: 'USER',
        },
        {
          fullName: 'Admin',
          password: hashSync('11111', 10),
          email: 'admin@test.ru',
          verified: new Date(),
          role: 'ADMIN',
        },
      ],
    });

    await prisma.category.createMany({
      data: categories,
    });

    await prisma.ingredient.createMany({
      data: _ingredients,
    });

    await prisma.product.createMany({
      data: products,
    });

    const pizza1 = await prisma.product.create({
      data: {
        name: 'Пепперони фреш',
        imageURL:
          'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
        categoryId: 1,
        ingredients: {
          connect: _ingredients.slice(0, 5),
        },
      },
    });

    const pizza2 = await prisma.product.create({
      data: {
        name: 'Сырная',
        imageURL:
          'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
        categoryId: 1,
        ingredients: {
          connect: _ingredients.slice(5, 10),
        },
      },
    });

    const pizza3 = await prisma.product.create({
      data: {
        name: 'Чоризо фреш',
        imageURL:
          'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
        categoryId: 1,
        ingredients: {
          connect: _ingredients.slice(10, 40),
        },
      },
    });

    await prisma.productItem.createMany({
      data: [
        // Пицца "Пепперони фреш"
        {
          productId: pizza1.id,
          pizzaType: 1,
          price: randomNumber(600, 1200),
          size: 20,
        },
        {
          productId: pizza1.id,
          pizzaType: 2,
          price: randomNumber(600, 1200),
          size: 30,
        },
        {
          productId: pizza1.id,
          pizzaType: 1,
          price: randomNumber(600, 1200),
          size: 40,
        },
        // Пицца "Сырная"
        {
          productId: pizza2.id,
          pizzaType: 1,
          price: randomNumber(800, 1200),
          size: 20,
        },
        {
          productId: pizza2.id,
          pizzaType: 1,
          price: randomNumber(600, 1200),
          size: 30,
        },
        {
          productId: pizza2.id,
          pizzaType: 1,
          price: randomNumber(600, 1200),
          size: 40,
        },
        {
          productId: pizza2.id,
          pizzaType: 2,
          price: randomNumber(800, 1200),
          size: 20,
        },
        {
          productId: pizza2.id,
          pizzaType: 2,
          price: randomNumber(600, 1200),
          size: 30,
        },
        {
          productId: pizza2.id,
          pizzaType: 2,
          price: randomNumber(600, 1200),
          size: 40,
        },
        // Пицца "Чоризо фреш"
        {
          productId: pizza3.id,
          pizzaType: 1,
          price: randomNumber(600, 1200),
          size: 20,
        },
        {
          productId: pizza3.id,
          pizzaType: 2,
          price: randomNumber(600, 1200),
          size: 30,
        },
        {
          productId: pizza3.id,
          pizzaType: 2,
          price: randomNumber(600, 1200),
          size: 40,
        },

        // Остальные продукты
      ],
    });

    await prisma.cart.createMany({
      data: [
        {
          userId: 1,
          totalAmount: 0,
          token: '11111',
        },
        {
          userId: 2,
          totalAmount: 0,
          token: '222222',
        },
      ],
    });

    await prisma.cartItem.create({
      data: {
        productItemId: 1,
        cartId: 1,
        quantity: 2,
        ingredients: {
          connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
        },
      },
    });
  } catch (error) {
    console.error('❌ Error in up function:', error);
  }
};

const down = async () => {
  try {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  } catch (error) {
    console.error('❌ Error in down function:', error);
  }
};

const main = async () => {
  try {
    await down();
    await up();
  } catch (error) {
    console.error('❌ Error in main function:', error);
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('❌ Error in promise of main function:', error);
    await prisma.$disconnect();
    process.exit(1);
  });
