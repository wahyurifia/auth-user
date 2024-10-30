import {
  HomeIcon,
  UserCircleIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UsersIcon,
  FolderIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/solid";
import {
  Home,
  Profile,
  Product,
  Products,
  Users,
  Notifications,
} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    userRole: "user",
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <FolderIcon {...icon} />,
        name: "Product",
        path: "/product",
        element: <Product />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "admin only",
    layout: "dashboard",
    pages: [
      {
        icon: <UsersIcon {...icon} />,
        name: "users management",
        path: "/users",
        element: <Users />,
      },
      {
        icon: <FolderOpenIcon {...icon} />,
        name: "products management",
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
