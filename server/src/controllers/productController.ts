import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getProducts = (req: Request, res: Response) => {};
const getProductById = (req: Request, res: Response) => {};
const createProduct = (req: Request, res: Response) => {};
const updateProduct = (req: Request, res: Response) => {};
const deleteProduct = (req: Request, res: Response) => {};

export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
