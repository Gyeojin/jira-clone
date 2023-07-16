import React, { useState } from "react";
import UserIcon from "../atom/UserIcon";

const NavHeader = () => {
  // const [flipState, setFlipState] = useState<boolean>(false);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src="./images/logo/logo_header.png" alt="logo"></img>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <UserIcon />
      </div>
    </div>
  );
};

export default NavHeader;
