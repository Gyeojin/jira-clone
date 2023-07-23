import React, { useState } from "react";
import UserIcon from "../atom/UserIcon";
import SearchBox from "../atom/SearchBox";

const NavHeader = () => {
  // const [flipState, setFlipState] = useState<boolean>(false);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 logo_box">
        <img src="./images/logo/logo_header.png" alt="logo"></img>
      </div>
      <div className="flex-none gap-2 searchUser_box">
        <SearchBox />
        <UserIcon />
      </div>
    </div>
  );
};

export default NavHeader;
