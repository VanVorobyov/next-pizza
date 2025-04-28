import { prisma } from '@/prisma/prisma-client';
import bcrypt from 'bcrypt';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    prisma.user;

    // Проверяем наличие обязательных полей
    if (!body.email || !body.password || !body.fullName) {
      return NextResponse.json(
        { error: 'Email, пароль и полное имя обязательны' },
        { status: 400 }
      );
    }

    // Проверяем валидность email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Некорректный формат email' },
        { status: 400 }
      );
    }

    // Проверяем длину пароля
    if (body.password.length < 6) {
      return NextResponse.json(
        { error: 'Пароль должен содержать минимум 6 символов' },
        { status: 400 }
      );
    }

    // Проверяем существование пользователя с таким email
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Пользователь с таким email уже существует' },
        { status: 400 }
      );
    }

    // Создаем нового пользователя
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const user = await prisma.user.create({
      data: {
        email: body.email.toLowerCase(),
        password: hashedPassword,
        fullName: body.fullName.trim(),
        verified: '',
      },
    });

    return NextResponse.json(
      {
        message: 'Пользователь успешно создан',
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Ошибка при создании пользователя:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
