import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const navigate = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `https://auth-user-mu.vercel.app/api/auth/register`,
        {
          name,
          email,
          password,
          confPassword,
        },
      );
      navigate("/auth/sign-in");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="m-8 flex">
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
          onSubmit={register}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
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
          <Button className="mt-6" fullWidth type="submit">
            {loading ? "Loading..." : "Register Now"}
          </Button>

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
