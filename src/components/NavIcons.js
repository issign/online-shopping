import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";

function NavIcons() {
  return (
    <div className="flex">
      <span className="px-3 text-xl cursor-pointer">KOR</span>
      <span className="px-2 text-xl">
        <FiSearch />
      </span>
      <span className="px-2 text-xl">
        <FiUser />
      </span>
      <span className="pl-2 text-xl">
        <SlBasket />
      </span>
    </div>
  );
}

export default NavIcons;
