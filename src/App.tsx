import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/home/home";
import { Navbar } from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Products from "./pages/products/products";
import WishList from "./pages/wish-list/wish-list";
import Card from "./pages/card/card";

function App() {
  return (
    <div className="overflow-y-hidden bg-zinc-100 min-h-screen">
      <Navbar />
      <div className="min-w-screen pe-1 mt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
