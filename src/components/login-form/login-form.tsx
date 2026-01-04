import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "../button/button";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center mt-7 rounded">
      <div className="bg-white w-full md:w-fit flex flex-col px-7 py-5 md:min-w-xl">
        <h2 className="text-3xl font-semibold text-center">Login</h2>
        <div className="mt-7 flex flex-col gap-2">
          <label htmlFor="email" className="text-lg">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="py-2 outline-none border border-gray-400 rounded px-2"
          />
        </div>
        <div className="flex flex-col mt-7 gap-2">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="py-2 outline-none border border-gray-400 rounded px-2"
          />
        </div>
        <div className="w-full mt-7 flex flex-col gap-5">
          <Button varient="primary">Login</Button>
          <Button varient="outline">Login with Test Credentials</Button>
        </div>
        <div className="text-center mt-7 md:text-2xl font-semibold">
            <a className="flex justify-center items-center hover:text-gray-400" href="/signup">Create New Account <MdKeyboardArrowRight className="md:w-10 md:h-10" /></a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
