import { useState } from "react";

const MiddleNav = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex grow ml-5">
      <input
        className=" grow h-1 text-black rounded-md mobile:w-40 tablet:w-40 rounded-br-none rounded-tr-none p-5 border-none text-lg"
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name=""
        id=""
      />
      <button className="ml-0 left-full bg-yellow-600 rounded-md rounded-bl-none rounded-tl-none p-2.5 border-none">
        <img className="w-5" src="src/assets/images/search-icon.png" alt="" />
      </button>
    </div>
  );
};

export default MiddleNav;
