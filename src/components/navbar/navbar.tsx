import { FaRegHeart } from "react-icons/fa";
import { Button } from "../button/button";
import { IconButton } from "../icon-button/icon-button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <header>
      <div
        className={`flex ${
          isMenuOpen && "flex-col"
        } justify-between items-center`}
      >
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
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
            <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <RxCross2 className="w-6 h-6" />
              ) : (
                <FiAlignJustify className="w-6 h-6" />
              )}
            </IconButton>
          </div>
        </div>
        <nav
          className={`${!isMenuOpen && "hidden"} flex mt-3 md:mt-0 md:flex items-center gap-8`}
        >
          <Button varient="primary">Login</Button>
          <IconButton>
            <FaRegHeart className="w-6 h-6 " />
          </IconButton>
          <IconButton>
            <MdOutlineShoppingCart className="w-7 h-7 " />
          </IconButton>
        </nav>
      </div>
    </header>
  );
};
