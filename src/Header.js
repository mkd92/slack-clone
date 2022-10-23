import { Avatar } from "@material-ui/core";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="mkd92" src="" />
        <AccessTimeIcon />
      </div>
      <div className="header__search"></div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
