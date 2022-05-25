import { SearchIcon } from "@heroicons/react/solid";
import React from "react";

const HeaderSearchBox = () => {
  return (
    <form
      className="flex flex-1 items-center space-x-2 border
      rounded-sm border-gray-200 bg-gray-100 px-4 py-2"
    >
      <SearchIcon className="h-6 w-6 text-gray-400" />
      <input
        type="text"
        placeholder="Search Reddit"
        className="flex-1 bg-transparent outline-none"
      />
      <button type="submit" hidden />
    </form>
  );
};

export default HeaderSearchBox;
