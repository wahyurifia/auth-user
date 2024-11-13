import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Switch,
  Typography,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setFixedNavbar,
} from "@/context";
import { Link } from "react-router-dom";

export function Configurator() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openConfigurator, fixedNavbar } = controller;
  const logoutUser = () => {
    localStorage.clear();
  };
  return (
    <aside
      className={`fixed right-0 top-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300 ${
        openConfigurator ? "translate-x-0" : "translate-x-96"
      }`}
    >
      <div className="flex items-start justify-between px-6 pb-6 pt-8">
        <div></div>
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => setOpenConfigurator(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
        </IconButton>
      </div>
      <div className="px-6 py-4">
        <div className="mb-12">
          <div className="flex items-center justify-between py-5">
            <Typography variant="h6" color="blue-gray">
              Navbar Fixed
            </Typography>
            <Switch
              id="navbar-fixed"
              value={fixedNavbar}
              onChange={() => setFixedNavbar(dispatch, !fixedNavbar)}
            />
          </div>
          <hr />
        </div>
        <div className="text-center">
          <Typography variant="h6" color="blue-gray">
            Thank you for coming ❤️
          </Typography>
          <div className="mb-7 mt-4 flex justify-center gap-2">
            <a href="https://www.github.com/wahyurifia" target="_black">
              <Button variant="gradient" className="flex items-center gap-2">
                <i className="fa-brands fa-github text-white" />
                Github
              </Button>
            </a>
            <a href="https://www.instagram.com/wahyurifia" target="_black">
              <Button variant="gradient" className="flex items-center gap-2">
                <i className="fa-brands fa-instagram text-white" />
                Instagram
              </Button>
            </a>
          </div>
          <hr />

          <div className="mt-8 px-10 text-center">
            <Link to="/auth/sign-in">
              <Button
                onClick={logoutUser}
                fullWidth
                variant="outlined"
                className="flex items-center justify-center gap-2"
              >
                Logout{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

Configurator.displayName = "/src/widgets/layout/configurator.jsx";

export default Configurator;
