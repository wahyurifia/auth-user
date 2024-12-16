import {
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const navigate = useNavigate();
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
<<<<<<< HEAD
        `https://auth-user-one.vercel.app/api/auth/login`,
=======
        `https://auth-user-mu.vercel.app/api/auth/login`,
>>>>>>> 82baec51ec163269e96d98a3bb8cf4991c900451
        {
          email,
          password,
        },
      );
      setAlert(true);
      console.log(response.data);

      const { token, role, userId } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", role);

      setTimeout(() => {
        setAlert(false);
        navigate("/dashboard/home");
      }, 2500);
    } catch (error) {
      setErr(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative m-8 flex justify-between gap-4">
      {alert && (
        <div
          className="absolute left-1/2 top-0 mb-4 flex w-1/2 -translate-x-1/2 transform items-center rounded-lg border border-green-300 bg-green-50 p-4 text-sm text-green-800  "
          role="alert"
        >
          <svg
            className="me-3 inline h-4 w-4 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Login successful!</span> Redirecting
            to your dashboard...
          </div>
        </div>
      )}

      <div className="mt-24 w-full lg:w-3/5">
        <div className="text-center">
          <Typography variant="h2" className="mb-4 font-bold">
            Sign In
          </Typography>
        </div>
        <form
          onSubmit={saveUser}
          className="mx-auto mb-2 mt-8 w-80 max-w-screen-lg lg:w-1/2"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="john@gmail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e) => setEmail(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {err === "email" && (
              <Typography
                color="red"
                className=" -my-4 ml-2 flex items-center text-xs font-normal"
              >
                Please enter a valid email address.
              </Typography>
            )}

            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {err === "password" && (
              <Typography
                color="red"
                className=" -my-4 mb-1 ml-2 flex items-center text-xs font-normal"
              >
                Please enter a valid password.
              </Typography>
            )}
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black underline transition-colors hover:text-gray-900"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          {loading ? (
            <Button
              type="submit"
              className="pointer-events-none mt-6 bg-gray-500"
              fullWidth
            >
              Loading ...
            </Button>
          ) : (
            <Button type="submit" className="mt-6" fullWidth>
              Sign In
            </Button>
          )}

          <Typography
            variant="paragraph"
            className="mt-4 text-center font-medium text-blue-gray-500"
          >
            Not registered?
            <Link to="/auth/sign-up" className="ml-1 text-gray-900">
              Create account
            </Link>
          </Typography>
        </form>
      </div>
      <div className="hidden h-full w-3/6 lg:block">
        <img
          src="/img/pattern-signin.png"
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
};

export default SignIn;
