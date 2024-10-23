import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const findProducts = async (userId?: string) => {
  const response = await prisma.product.findMany({
    where: { userId, isDeleted: false },
    select: {
      id: true,
      name: true,
      price: true,
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  return response;
};

const findProductById = async (productId: string, userId?: string) => {
  const response = await prisma.product.findFirst({
    where: { id: productId, userId, isDeleted: false },
    select: {
      name: true,
      price: true,
      user: { select: { name: true, email: true } },
    },
  });
  if (response === null) throw Error("Product not found");
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

const editProduct = async (
  productId: string,
  name: string,
  price: number,
  userId?: string
) => {
  await findProductById(productId, userId);

  const response = await prisma.product.update({
    where: { id: productId },
    data: { name, price },
    select: {
      name: true,
      price: true,
      user: { select: { name: true, email: true } },
    },
  });
  return response;
};
const removeProduct = async (productId: string, userId?: string) => {
  await findProductById(productId, userId);

  await prisma.product.update({
    where: { id: productId },
    data: { isDeleted: true },
  });
};

export default {
  findProducts,
  findProductById,
  addProduct,
  editProduct,
  removeProduct,
};
