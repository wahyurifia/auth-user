import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  Select,
  Option,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { editProduct, getProductById } from "@/data";

export function EditProduct({ onAddProductSuccess, token, productId, userId }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const response = await getProductById(token, productId);
    setName(response.name);
    setPrice(response.price);
    setStatus(response.status);
  };

  const saveData = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await editProduct(
        token,
        name,
        price,
        status,
        productId,
        userId,
      );
    } catch (error) {
    } finally {
      setLoading(false);
      setName("");
      setPrice("");
      onAddProductSuccess();
    }
    setOpen(!open);
  };

  return (
    <>
      <Typography
        as="a"
        href="#"
        className="mr-3 text-xs font-semibold text-blue-gray-600"
        onClick={handleOpen}
      >
        Edit
      </Typography>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Edit Menu
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
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Status
                </Typography>
                <Select
                  id="status"
                  className="focus:!border-primary group-hover:!border-primary !w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-t-blue-gray-900"
                  placeholder="1"
                  labelProps={{
                    className: "hidden",
                  }}
                  value={status}
                  onChange={(value) => setStatus(value)}
                >
                  <Option value={"Active"}>Active</Option>
                  <Option value={"Inactive"}>Inactive</Option>
                </Select>
              </div>
            </div>
            <div className="">
              <Button type="submit" onClick={saveData}>
                {loading ? "on process edit data..." : "Edit Product"}
              </Button>
            </div>
          </DialogBody>
        </form>
      </Dialog>
    </>
  );
}
