import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "../button/button";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import { doLogin, type LoginType } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [login, setLogin] = useState<LoginType>({
    email: "",
    password: "",
  });
  const [testLogin] = useState<LoginType>({
    email: "john@mail.com",
    password: "changeme",
  });
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin({ ...login, [e.target.id]: e.target.value });
  }
  function onLogin(isTest: boolean) {
    (async () => {
      try {
        const tokenObject = await doLogin(isTest ? testLogin : login);
        localStorage.setItem("token", tokenObject.access_token);
        navigate("/");
      } catch (error) {
        toast((error as Error).message,{type:"error"});
      }
    })();
  }
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
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mt-7 gap-2">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="password"
              className="py-2 outline-none border border-gray-400 rounded px-2 pr-10 w-full"
              onChange={handleChange}
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
        <div className="w-full mt-7 flex flex-col gap-5">
          <Button onClick={() => onLogin(false)} varient="primary">
            Login
          </Button>
          <Button onClick={() => onLogin(true)} varient="outline">
            Login with Test Credentials
          </Button>
        </div>
        <div className="text-center mt-7 md:text-2xl font-semibold">
          <a
            className="flex justify-center items-center hover:text-gray-400"
            href="/signup"
          >
            Create New Account{" "}
            <MdKeyboardArrowRight className="md:w-10 md:h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
