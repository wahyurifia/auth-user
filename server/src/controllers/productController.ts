import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import productService from "../services/productService";
const prisma = new PrismaClient();

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.findProducts();
    res.status(200).json({
      message: "Success get all product (Admin)",
      products,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req: Request, res: Response) => {
  const userId: string = (req as any).userId;
  try {
    const products = await productService.findProducts(userId);
    res.status(200).json({
      message: "Success get all product by userId",
      products,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req: Request, res: Response) => {
  const userId: string = (req as any).userId;
  const productId: string = req.params.id;
  try {
    if ((req as any).role === "Admin") {
      const product = await productService.findProductById(productId);
      res.status(200).json({
        message: "Success get one product  by productId =" + product?.user.name,
        product,
      });
    } else {
      const product = await productService.findProductById(productId, userId);
      res.status(200).json({
        message: "Success get one product  by productId =" + product?.user.name,
        product,
      });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req: Request, res: Response) => {
  const userId: string = (req as any).userId;
  const { name, price } = req.body;
  try {
    const product = await productService.addProduct(name, price, userId);
    res.status(201).json({
      message: "Success create product by " + product?.user.name,
      product,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  // const userId: string = (req as any).userId;
  const productId: string = req.params.id;
  const { name, price, status } = req.body;
  try {
    const product = await productService.editProduct(
      productId,
      name,
      price,
      status,
      // userId
    );
    res.status(200).json({
      message: "Success update one product by " + product?.user.name,
      product,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  // const userId: string = (req as any).userId;
  const productId: string = req.params.id;
  try {
    const product = await productService.removeProduct(productId);
    res.status(200).json({
      message: "Success delete product",
      product,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getProducts,
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
