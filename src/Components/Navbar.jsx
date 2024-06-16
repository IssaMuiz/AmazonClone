import LeftNav from "./LeftNav";
import MiddleNav from "./MiddleNav";
import RightNav from "./RightNav";

const Navbar = () => {
  return (
    <div>
      <div className="fixed top-0 flex  bg-black w-full h-16 text-white items-center whitespace-nowrap">
        <LeftNav />
        <MiddleNav />
        <RightNav />
      </div>
    </div>
  );
};

export default Navbar;
