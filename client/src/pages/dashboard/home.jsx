import { AddProduct } from "@/widgets/modal/addProduct";
import { FolderPlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";

export function Home() {


  return (
    <div className="mt-12">
      <Button
        variant="gradient"
      >
        <FolderPlusIcon className="w-5 h-5 text-inherit" />
      </Button>
      <AddProduct />
    </div>
  );
}

export default Home;
