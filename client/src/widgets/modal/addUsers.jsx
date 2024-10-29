import React from "react";
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
import { UserPlusIcon } from "@heroicons/react/24/solid";

export function AddUser() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                color="white"
                onClick={handleOpen}
            >
                <UserPlusIcon className="w-5 h-5 text-inherit" />
            </Button>
            <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
                <DialogHeader className="relative m-0 block">
                    <Typography variant="h4" color="blue-gray">
                        Manage User
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
                <form action="">

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
                                placeholder="John Doe"
                                name="name"
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
                                Email
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="johndoe@gmail.com"
                                name="name"
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
                                    Role
                                </Typography>
                                <Select
                                    className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                >
                                    <Option>Admin</Option>
                                    <Option>User</Option>
                                </Select>
                            </div>
                            <div className="mt-7 mr-8">
                                <Button type="submit" onClick={handleOpen}>
                                    Add User
                                </Button>
                            </div>
                        </div>

                    </DialogBody>
                </form>
            </Dialog>
        </>
    );
}