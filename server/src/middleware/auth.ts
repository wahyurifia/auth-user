import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyToken(token);
    (req as any).userId = decoded.userId;
    (req as any).role = decoded.role;
    next();
  } catch (error) {
    res.redirect("/");
    // res.status(401).json({ message: "Invalid token" });
  }
};

export const adminOnly = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if ((req as any).role !== "Admin") {
    res.status(404).json({ message: "Access forbidden: Admins only" });
    return;
  }
  next();
};
