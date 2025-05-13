import { _ingredients, categories, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

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
  } catch (error) {
    console.error('❌ Error in up function:', error);
  }
};

const down = async () => {
  try {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
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
