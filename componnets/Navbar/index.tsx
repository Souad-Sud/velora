import IconBar from "../IconBar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around bg-[#121212] text-[#babcbc] h-16">
      <ul className="flex items-center justify-around gap-8 font-serif tracking-[0.01em] text-lg">
        <li>
          <a href="">News</a>
        </li>
        <li>
          <a href="">Body</a>
        </li>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Beauty</a>
        </li>
        <li>
          <a href="">Gifts</a>
        </li>
        <li>
          <a href="">For him</a>
        </li>
        <li>
          <a href="">Collections</a>
        </li>
        <li>
          <a href="">Sun care</a>
        </li>
        <li>
          <a href="">Online Outlet</a>
        </li>
        <li>
          <a href="">Advent competition</a>
        </li>
      </ul>
      <IconBar />
    </nav>
  );
};

export default Navbar;
