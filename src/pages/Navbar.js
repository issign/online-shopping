import TopAdbar from "../components/nav/TopAdbar";
import NavList from "../components/nav/NavList";
import NavIcons from "../components/nav/NavIcons";

function Navbar() {
  return (
    <div>
      <TopAdbar></TopAdbar>
      <div className="px-20 py-7 flex justify-between items-center">
        <h1 className="cursor-pointer text-[35px]">POURTU</h1>
        <NavList></NavList>
        <NavIcons></NavIcons>
      </div>
    </div>
  );
}

export default Navbar;
