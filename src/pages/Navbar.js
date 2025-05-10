import TopAdbar from "../components/nav/TopAdbar";
import NavList from "../components/nav/NavList";
import NavIcons from "../components/nav/NavIcons";

function Navbar() {
  return (
    <div className="fixed top-0 w-full">
      <TopAdbar></TopAdbar>
      <div className="h-[7rem] px-20 flex justify-between items-center bg-white">
        <h1 className="cursor-pointer text-[35px]">POURTU</h1>
        <NavList></NavList>
        <NavIcons></NavIcons>
      </div>
    </div>
  );
}

export default Navbar;
