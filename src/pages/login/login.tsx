import LoginForm from "../../components/login-form/login-form";
import { useAuth } from "../../context/auth-context/auth-context";
import { useProduct } from "../../context/product-context/product-context";

const Login = () => {
  const { productState } = useProduct();
  const { authState } = useAuth();
  return (
    <>
      {authState.isLoggedIn ? (
        <div className={`${productState.isMenuOpen ? "mt-38" : "mt-20"}`}>
          <h1 className="text-3xl flex justify-center">You are already logged in</h1>
        </div>
      ) : (
        <div className={`${productState.isMenuOpen ? "mt-38" : "mt-20"}`}>
          <LoginForm />
        </div>
      )}
    </>
  );
};

export default Login;
