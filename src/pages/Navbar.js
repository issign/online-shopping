import NavList from "../components/NavList";
import NavIcons from "../components/NavIcons";

function Navbar() {
  return (
    <div className="px-20 py-7 flex justify-between items-center">
      <h1 className="cursor-pointer text-[35px]">POURTU</h1>
      <NavList></NavList>
      <NavIcons></NavIcons>
    </div>
  );
}

export default Navbar;
