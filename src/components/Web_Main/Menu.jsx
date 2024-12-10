/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import BookmarkTab from "./Tab/BookmarkTab";
import HomeTab from "./Tab/HomeTab";
import ProfileTab from "./Tab/ProfileTab";
import SearchTab from "./Tab/SearchTab";
import "./style.css";

export const Menu = ({ className }) => {
  return (
    <div className={`web-main-frame ${className}`}>
      <div className="overlap-group">
        <div className="div-2">
          <HomeTab className="home-tab-instance" />
          <BookmarkTab stateProp="default" />
          <SearchTab stateProp="default" />
          <ProfileTab stateProp="default" />
        </div>

        <div className="title">NEWSTART</div>
      </div>
    </div>
  );
};

export default Menu;