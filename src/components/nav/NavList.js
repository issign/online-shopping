import NavLink from "./NavLink";

function NavList() {
  const listNames = ["New", "Best", "Men", "Women", "Sale"];

  const renderedLinks = listNames.map((list, i) => {
    return <NavLink list={list} key={i}></NavLink>;
  });

  return <div className="flex">{renderedLinks}</div>;
}

export default NavList;
