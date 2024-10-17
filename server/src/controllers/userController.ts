import { Request, Response } from "express";
import userService from "../services/userService";
import { hashSync } from "bcrypt";

const getUsers = async (req: Request, res: Response) => {
  const isDeleted: boolean = false;
  try {
    const users = await userService.findUsers(isDeleted);
    res.status(200).json({
      messsage: "Success get all user",
      users,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
const getUserById = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  try {
    const user = await userService.findUserById(userId);
    res.status(201).json({
      message: "Success get user!",
      user,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
const createUser = async (req: Request, res: Response) => {
  const { name, email, password, confPassword, role } = req.body;
  try {
    await cekPassword(password, confPassword);
    const user = await userService.addUser(name, email, password, role);
    res.status(200).json({
      message: "Success create user!",
      user,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
const updateUser = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const { name, email, oldPassword, password, confPassword, role } = req.body;
  try {
    await userService.findUserById(userId);
    await userService.updatePassword(userId, oldPassword);
    await cekPassword(password, confPassword);

    const hashPassword = hashSync(password, 10);
    const user = await userService.editUser(
      userId,
      name,
      email,
      hashPassword,
      role
    );
    res.status(200).json({ message: "Success update user!", user });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  try {
    await userService.findUserById(userId);
    await userService.removeUser(userId);
    res.status(200).json({ message: "Success deleted user!" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// validasi request

const cekPassword = async (password: string, confPassword: string) => {
  if (password !== confPassword) {
    throw Error("Password doesn't match");
  }
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
