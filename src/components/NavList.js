import NavLink from "./NavLink";

function NavList() {
  const listNames = ["New", "Best", "Men", "Women", "Sale"];

  const renderedLinks = listNames.map((list) => {
    return <NavLink list={list}></NavLink>;
  });

  return <div className="flex">{renderedLinks}</div>;
}

export default NavList;
