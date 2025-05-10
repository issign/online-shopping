import TopAdbar from "./components/TopAdBar";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import axios from "axios";

function App() {
  const create = async () => {
    const res = await axios.get("http://localhost:3001/products");

    console.log(res);
  };

  return (
    <div>
      <div className="w-screen h-screen">
        <TopAdbar></TopAdbar>
        <Navbar></Navbar>
        <Hero></Hero>
        <div onClick={create}>Click</div>
      </div>
    </div>
  );
}

export default App;
