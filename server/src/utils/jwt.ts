import { Role } from "@prisma/client";
import jwt from "jsonwebtoken";

const SECRET_KEY =
  process.env.JWT_SECRET ||
  "jasndlandnq32eh8932qh8dawdiiq3odj90awjdioq389dhqdnwefn";

export const generateToken = (userId: string, role: Role): string => {
  return jwt.sign({ userId, role }, SECRET_KEY, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error("Invalid token");
  }
};
