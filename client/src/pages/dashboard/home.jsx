import { useUserContext } from "@/context";

export function Home() {
  const { userId, role } = useUserContext();
  console.log(userId, role);

  return <div className="mt-12">...</div>;
}

export default Home;
