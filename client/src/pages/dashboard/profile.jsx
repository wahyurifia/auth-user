import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { ProfileInfoCard } from "@/widgets/cards";
import { useEffect, useState } from "react";
import { getUserById } from "@/data";

export function Profile() {
  const [data, setData] = useState({
    name: null,
    email: null,
    role: null,
    date: null,
  });
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await getUserById(token, userId);
      setData(result);
      console.log(result);
    } catch (error) {
      console.log(error);
      error.response.data.message == "Invalid token"
        ? (window.location.href = "/auth/sign-in")
        : "";
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="relative mt-8 h-32 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 border border-blue-gray-100 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                {loading ? (
                  <div className="animate-bounce py-1 text-center text-xs font-medium leading-none text-black  ">
                    loading...
                  </div>
                ) : (
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    {data.name}
                  </Typography>
                )}
                {loading ? (
                  <div className="animate-bounce py-1 text-center text-xs font-medium leading-none text-black  ">
                    loading...
                  </div>
                ) : (
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-600"
                  >
                    {data.role}
                  </Typography>
                )}
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 flex gap-12 px-4 pb-5 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileInfoCard
              title="Profile Information"
              description="Hi, I am a new user, and I am ready to explore the website created by Wahyu Rifia Rizki. Check my GitHub and Instagram on the right in the settings menu."
              details={{
                "Full Name": `${loading ? "..." : data.name}`,
                email: `${loading ? "..." : data.email}`,
                sinceAt: `${loading ? "..." : data.date}`,
              }}
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
              }
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
