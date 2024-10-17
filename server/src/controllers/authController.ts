import { Request, Response } from "express";
import * as authService from "../services/authService";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const logout = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Logged out!" });
};

const register = async (req: Request, res: Response) => {
  const { name, email, password, confPassword } = req.body;
  try {
    if (password !== confPassword) {
      throw Error("Password doesn't match");
    }
    await authService.register(name, email, password);
    res.status(201).json({ message: "register success!" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export default { login, logout, register };
