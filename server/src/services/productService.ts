import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const findProducts = async (userId?: string) => {
  const response = await prisma.product.findMany({
    where: { userId },
    select: {
      id: true,
      name: true,
      price: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  return response;
};

const addProduct = async (name: string, price: number, userId: string) => {
  const response = await prisma.product.create({
    data: { name, price, userId },
    select: {
      id: true,
      name: true,
      price: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  return response;
};
const editProduct = async () => {};
const removeProduct = async () => {};

export default { findProducts, addProduct, editProduct, removeProduct };
