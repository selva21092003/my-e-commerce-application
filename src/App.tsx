import "./App.css";
import { Home } from "./components/home/home";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <div className="overflow-hidden">
      <div className="min-w-screen md:px-20 pe-1">
      <Navbar />
      <Home />
    </div>
    </div>
  );
}

export default App;
