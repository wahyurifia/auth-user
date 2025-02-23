import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
} from "@material-tailwind/react";
import { getProducts } from "@/data";
import { useEffect, useState } from "react";
import { DeleteModal, EditProduct } from "@/widgets/modal";

export function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shouldReload, setShouldReload] = useState(false);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const triggerReload = () => {
    setShouldReload((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getProducts(token);
        setData(result);
      } catch (error) {
        console.log(error);
        error.response.data.message == "Invalid token"
          ? (window.location.href = "/auth/sign-in")
          : "";
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [shouldReload]);

  return (
    <div className="mb-8 mt-12 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 ">
          <Typography variant="h6" color="white">
            Products Table List
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pb-2 pt-0">
          {loading ? (
            <div className="flex h-20 w-full items-center  justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["name", "price", "user", "status", "since", ""].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 px-5 py-3 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-bold uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map(
                  ({ productId, name, price, user, status, date }, key) => {
                    const className = `py-3 px-5 ${key === data.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                      }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar
                              src={"/img/product.png"}
                              alt={name}
                              size="sm"
                              variant="rounded"
                            />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {name}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {price}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {user}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Chip
                            variant="gradient"
                            color={status == "Active" ? "green" : "red"}
                            value={status}
                            className="w-fit px-2 py-0.5 text-[11px] font-medium"
                          />
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {date}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="flex">
                            <EditProduct
                              token={token}
                              productId={productId}
                              userId={userId}
                              onClick={() => setShowModal(true)}
                              onAddProductSuccess={triggerReload}
                            />
                            <DeleteModal
                              token={token}
                              productId={productId}
                              onClick={() => setShowModal(true)}
                              onAddProductSuccess={triggerReload}
                            />
                          </div>{" "}
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default Products;
