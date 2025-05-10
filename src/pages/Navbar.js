import NavList from "../components/nav/NavList";
import NavIcons from "../components/nav/NavIcons";

function Navbar() {
  return (
      <div className="px-20 py-7 flex justify-between items-center sticky top-0 bg-white">
        <h1 className="cursor-pointer text-[35px]">POURTU</h1>
        <NavList></NavList>
        <NavIcons></NavIcons>
      </div>
  );
}

export default Navbar;
