import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { deleteProduct, getProductById } from "@/data";

export function DeleteModal({ onAddProductSuccess, token, productId }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const response = await getProductById(token, productId);
    setName(response.name);
  };

  const saveData = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await deleteProduct(token, productId);
    } catch (error) {
    } finally {
      setLoading(false);
      onAddProductSuccess();
    }
  };

  return (
    <>
      <Typography
        as="a"
        href="#"
        className="mr-3 text-xs font-semibold text-blue-gray-600"
        onClick={handleOpen}
      >
        Remove
      </Typography>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Remove Product</DialogHeader>
        <DialogBody>
          Are you sure you want to remove this product{" "}
          <b className="font-bold">{name}</b>? This change is permanent!"
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={saveData}>
            <span> {loading ? "on process delete data..." : "Confirm"}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
