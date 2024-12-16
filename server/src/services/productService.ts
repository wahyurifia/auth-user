import { PrismaClient, Status } from "@prisma/client";
const prisma = new PrismaClient();

const findProducts = async (userId?: string) => {
  const response = await prisma.product.findMany({
    where: { userId },
    select: {
      id: true,
      name: true,
      price: true,
      status: true,
      createAt: true,
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
    where: { id: productId, userId },
    select: {
      id: true,
      name: true,
      price: true,
      status: true,
      createAt: true,
      user: {
        select: { name: true, email: true },
      },
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
  status: Status,
  userId?: string
) => {
  const data = await findProductById(productId);

  const response = await prisma.product.update({
    where: { id: productId },
    data: { name, price, status },
    select: {
      name: true,
      price: true,
      user: { select: { name: true, email: true } },
    },
  });
  return response;
};
const removeProduct = async (productId: string) => {
  await findProductById(productId);

  await prisma.product.delete({
    where: { id: productId },
  });
};

export default {
  findProducts,
  findProductById,
  addProduct,
  editProduct,
  removeProduct,
};
