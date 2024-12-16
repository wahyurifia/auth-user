import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../utils/zod";

export function SignUp() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://auth-user-one.vercel.app/api/auth/register",
        data,
      );
      setAlert(true);
      console.log(response);

      setTimeout(() => {
        setAlert(false);
        navigate("/auth/sign-in");
      }, 2500);
    } catch (error) {
      setErr(error.response.data.message);
      console.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative m-8 flex">
      {err === "Email already exist!" && (
        <div
          className="absolute left-1/2 top-0 mb-4 flex w-1/2 -translate-x-1/2 transform items-center rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800  "
          role="alert"
        >
          <svg
            class="me-3 inline h-4 w-4 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Danger!</span> The email you entered
            is already in use. Try another one.
          </div>
        </div>
      )}
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
            <span className="font-medium">Congratulations!</span> your
            registration was successfull!...
          </div>
        </div>
      )}
      <div className="hidden h-full w-3/6 lg:block">
        <img
          src="/img/pattern-signup.png"
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center lg:w-3/5">
        <div className="text-center">
          <Typography variant="h2" className="mb-4 font-bold">
            Join Us Today
          </Typography>
        </div>
        <form
          className="mx-auto mb-2 mt-8 w-80 max-w-screen-lg lg:w-1/2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-2 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-5 font-medium"
            >
              name
            </Typography>
            <Input
              size="lg"
              type="text"
              placeholder="John Doe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("name")}
            />
            {errors.name && (
              <Typography
                color="red"
                className=" -my-4 mb-2 ml-2 flex items-center text-xs font-normal"
              >
                {errors.name.message}
              </Typography>
            )}
          </div>
          <div className="mb-2 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-5  font-medium"
            >
              email
            </Typography>
            <Input
              size="lg"
              type="email"
              placeholder="johndoe@gmail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("email")}
            />
            {errors.email && (
              <Typography
                color="red"
                className=" -my-4 mb-2 ml-2 flex items-center text-xs font-normal"
              >
                {errors.email.message}
              </Typography>
            )}
          </div>
          <div className="mb-2 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-5  font-medium"
            >
              password
            </Typography>
            <Input
              size="lg"
              type="password"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("password")}
            />
            {errors.password && (
              <Typography
                color="red"
                className=" -my-4 mb-2 ml-2 flex items-center text-xs font-normal"
              >
                {errors.password.message}
              </Typography>
            )}
          </div>
          <div className="mb-2 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-5  font-medium"
            >
              Confirm password
            </Typography>
            <Input
              size="lg"
              type="password"
              placeholder="******"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <Typography
                color="red"
                className=" -my-4 mb-2 ml-2 flex items-center text-xs font-normal"
              >
                {errors.confirmPassword.message}
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
              className="pointer-events-none mt-6 bg-gray-500"
              fullWidth
              type="submit"
            >
              Loading ...
            </Button>
          ) : (
            <Button className="mt-6" fullWidth type="submit">
              Register Now
            </Button>
          )}

          <Typography
            variant="paragraph"
            className="mt-4 text-center font-medium text-blue-gray-500"
          >
            Already have an account?
            <Link to="/auth/sign-in" className="ml-1 text-gray-900">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
