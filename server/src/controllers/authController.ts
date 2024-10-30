import { Request, Response } from "express";
import * as authService from "../services/authService";
import userService from "../services/userService";
import { verifyToken } from "../utils/jwt";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = await authService.login(email, password);
    const { userId, role } = verifyToken(token);
    (req as any).userId = userId;
    (req as any).role = role;
    res.json({
      token,
      userId,
      role,
    });
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
    await userService.cekEmailUnique(email);
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
