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
  } catch (error) {
    console.error('❌ Error in up:', error);
  }
};

const down = async () => {
  try {
    await console.log('down');
  } catch (error) {
    console.error('❌ Error in down:', error);
  }
};

const main = async () => {
  try {
    await down();
    await up();
  } catch (e) {
    console.error('❌ Error in main:', e);
  }
};
