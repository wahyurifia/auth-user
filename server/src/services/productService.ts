import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const findProducts = async (userId?: string) => {
  const response = await prisma.product.findMany({
    where: { userId },
  });
  return response;
};

const addProduct = async (name: string, price: number, userId: string) => {
  const response = await prisma.product.create({
    data: { name, price, userId },
  });
  return response;
};
const editProduct = async () => {};
const removeProduct = async () => {};

export default { findProducts, addProduct, editProduct, removeProduct };
