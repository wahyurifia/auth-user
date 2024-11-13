import React, { useState } from "react";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FolderPlusIcon } from "@heroicons/react/24/solid";
import { addProduct } from "@/data";

export function AddProduct({ onAddProductSuccess }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const handleOpen = () => {
    setOpen(!open);
  };

  const saveData = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await addProduct(token, name, price, userId);
    } catch (error) {
    } finally {
      setName("");
      setPrice("");
      setLoading(false);
      onAddProductSuccess();
    }
    setOpen(!open);
  };

  return (
    <>
      <Button color="white" onClick={handleOpen}>
        <FolderPlusIcon className="h-5 w-5 text-inherit" />
      </Button>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Manage Product
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Enter the required fields to fill out the form.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form>
          <DialogBody className="space-y-4 pb-6">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Name
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="Name Product"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Price
                </Typography>
                <Input
                  type="number"
                  color="gray"
                  size="lg"
                  placeholder="0000000"
                  name="size"
                  value={price}
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div className="mr-8 mt-7">
                <Button type="submit" onClick={saveData}>
                  {loading ? "on process add data..." : "Add Product"}
                </Button>
              </div>
            </div>
          </DialogBody>
        </form>
      </Dialog>
    </>
  );
}
