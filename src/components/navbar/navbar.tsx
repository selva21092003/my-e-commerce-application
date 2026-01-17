import { FaRegHeart } from "react-icons/fa";
import { Button } from "../button/button";
import { IconButton } from "../icon-button/icon-button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router";
import { useProduct } from "../../context/product-context/product-context";
import { IoSearch } from "react-icons/io5";
import { getUser } from "../../api/auth";
import { useAuth } from "../../context/auth-context/auth-context";

export const Navbar = () => {
  const { productState, productDispatch } = useProduct();
  const { authState, authDispacth } = useAuth();
  const isMenuOpen = productState.isMenuOpen;
  const location = useLocation();
  const navigate = useNavigate();
  const isProductPage = location.pathname.includes("products");
  const timeRef = useRef<number | null>(null);
  function handleSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(
      () =>
        productDispatch({ type: "SET_SEARCH_VALUE", payload: e.target.value }),
      300
    );
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        (async () => {
          const user = await getUser(token);
          authDispacth({ type: "SET_USER", payload: user });
        })();
      } catch (error) {
        localStorage.removeItem("token");
        authDispacth({ type: "SET_USER", payload: null });
      }
    }
  }, [localStorage.getItem("token")]);
  function handleLogout() {
    localStorage.removeItem("token");
    authDispacth({ type: "SET_USER", payload: null });
    navigate("/");
    window.location.reload();
  }
  return (
    <header>
      <div
        className={`fixed bg-zinc-100 w-full flex z-10 md:px-10 px-2 ${
          isMenuOpen && "flex-col"
        } justify-between items-center`}
      >
        <div className="flex flex-1 items-center w-full justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              className="rounded-full"
              width={75}
              height={75}
              src="https://t4.ftcdn.net/jpg/02/41/39/05/360_F_241390593_L3fnDipXel7j38DQKWXLRzpGPuGQ1mYD.jpg"
              alt=""
            />
            <h1 className="text-4xl text-green-600 font-bold">Happy Shop</h1>
          </div>
          <div className="md:hidden">
            <IconButton
              onClick={() =>
                productDispatch({ type: "SET_MENU_OPEN", payload: !isMenuOpen })
              }
            >
              {isMenuOpen ? (
                <RxCross2 className="w-6 h-6" />
              ) : (
                <FiAlignJustify className="w-6 h-6" />
              )}
            </IconButton>
          </div>
        </div>
        {isProductPage && (
          <div className={`relative ${!isMenuOpen && "hidden"} md:block`}>
            <input
              className={`border-b outline-none border-black ps-7 p-1 min-w-72`}
              type="text"
              placeholder="Search By Product Name"
              onChange={(e) => handleSearchValue(e)}
            />
            <IoSearch className="w-5 h-5 absolute top-2" />
          </div>
        )}
        <nav
          className={`${
            !isMenuOpen && "hidden"
          } flex flex-1 justify-end my-3 md:my-0 md:flex items-center gap-8`}
        >
          <div>
            {authState.isLoggedIn ? (
              <div className="flex gap-3 items-center text-gray-500">
                <div className="flex gap-2">Hai <span>{authState.user?.name}</span></div>
                <Button varient="primary" onClick={() => handleLogout()}>
                  Logout
                </Button>
              </div>
            ) : (
              <Button varient="primary" onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
          </div>
          <IconButton onClick={() => navigate("/wish-list")}>
            <FaRegHeart className="w-6 h-6 " />
            <span
              className="absolute -top-1 -right-1 
                   bg-green-500 text-white 
                   w-4 h-4 
                   text-xs 
                   rounded-full 
                   flex items-center justify-center"
            >
              {productState.wishList.length}
            </span>
          </IconButton>
          <IconButton onClick={() => navigate("/cart")}>
            <MdOutlineShoppingCart className="w-7 h-7 " />
            <span
              className="absolute -top-1 -right-1 
                   bg-green-500 text-white 
                   w-4 h-4 
                   text-xs 
                   rounded-full 
                   flex items-center justify-center"
            >
              {productState.card.length}
            </span>
          </IconButton>
        </nav>
      </div>
    </header>
  );
};
