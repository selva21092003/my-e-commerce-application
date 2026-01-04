import { FiEyeOff } from "react-icons/fi";
import { Button } from "../button/button";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  return (
    <div className="flex justify-center items-center mt-7 rounded mb-5">
      <div className="bg-white w-full md:w-fit flex flex-col px-7 py-5 md:min-w-xl">
        <h2 className="text-3xl font-semibold text-center">Login</h2>
        <div className="mt-7 flex flex-col gap-2">
          <label htmlFor="firstName" className="text-lg">
            First Name
          </label>
          <input
            type="input"
            id="firstName"
            className="py-2 outline-none border border-gray-400 rounded px-2"
          />
        </div>
        <div className="mt-7 flex flex-col gap-2">
          <label htmlFor="lastName" className="text-lg">
            Last Name
          </label>
          <input
            type="input"
            id="lastName"
            className="py-2 outline-none border border-gray-400 rounded px-2"
          />
        </div>
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

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="py-2 outline-none border border-gray-400 rounded px-2 pr-10 w-full"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-7 gap-2">
          <label htmlFor="confirmPassword" className="text-lg">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className="py-2 outline-none border border-gray-400 rounded px-2 pr-10 w-full"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showConfirmPassword ? (
                <FaEye size={20} />
              ) : (
                <FiEyeOff size={20} />
              )}
            </button>
          </div>
        </div>
        <div className="mt-7 flex gap-3 items-center">
          <input className="w-4 h-4" type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="text-lg">
            I accept all Terms & Conditions
          </label>
        </div>
        <div className="w-full mt-7 flex flex-col gap-5">
          <Button varient="primary">Create Account</Button>
        </div>
        <div className="text-center mt-7 md:text-2xl font-semibold">
          <a href="/login" className="flex justify-center items-center hover:text-gray-400">Already have an Account <MdKeyboardArrowRight className="md:w-10 md:h-10" /></a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
