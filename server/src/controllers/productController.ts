import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import productService from "../services/productService";
const prisma = new PrismaClient();

const getProducts = async (req: Request, res: Response) => {
  try {
    if ((req as any).role === "Admin") {
      // res.status(200).json((req as any).role);
      const product = await productService.findProducts();
      res.status(200).json({
        message: "Success get all product (Admin)",
        product,
      });
    } else {
      const product = await productService.findProducts((req as any).userId);
      res.status(200).json({
        message: "Success get all product by id user (user)",
        product,
      });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = (req: Request, res: Response) => {};

const createProduct = async (req: Request, res: Response) => {
  const userId: string = (req as any).userId;
  const { name, price } = req.body;
  try {
    const product = await productService.addProduct(name, price, userId);
    res.status(200).json({
      message: "Success create product",
      product,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
const updateProduct = async (req: Request, res: Response) => {};
const deleteProduct = async (req: Request, res: Response) => {};

export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
