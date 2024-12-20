import { PrismaClient, Role, Status } from "@prisma/client";
const prisma = new PrismaClient();
import { compareSync, hashSync } from "bcrypt";

const findUsers = async () => {
  const response = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      createAt: true,
    },
  });
  return response;
};

const findUserById = async (id: string) => {
  const response = await prisma.user.findFirst({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      role: true,
      createAt: true,
    },
  });
  if (!response) throw Error("user not found!");
  return response;
};

const addUser = async (
  name: string,
  email: string,
  password: string,
  role: Role
) => {
  await cekEmailUnique(email);
  const hashPassword = hashSync(password, 10);
  await prisma.user.create({
    data: { name, email, password: hashPassword, role },
  });
};

const editUser = async (id: string, role: Role, status: Status) => {
  const response = await prisma.user.update({
    where: { id },
    data: { role, status },
    select: { id: true, name: true, email: true, role: true },
  });
  return response;
};

const removeUser = async (id: string) => {
  await prisma.user.delete({
    where: { id },
  });
};

//validasi services

const cekEmailUnique = async (email: string, userId?: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (user && user?.id !== userId) throw Error("Email already exist!");
};

export default {
  findUsers,
  findUserById,
  addUser,
  editUser,
  removeUser,
  cekEmailUnique,
};
