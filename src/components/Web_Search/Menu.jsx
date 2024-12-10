/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import BookmarkTab from "./Tab/BookmarkTab";
import HomeTab from "./Tab/HomeTab";
import ProfileTab from "./Tab/ProfileTab";
import SearchTab from "./Tab/SearchTab";
import "./style.css";

export const Menu = ({
  className,
  homeTabDivClassName,
  homeTabIcon = "https://c.animaapp.com/nzh65NNa/img/icon-10@2x.png",
  searchTabIcon = "https://c.animaapp.com/nzh65NNa/img/icon-7@2x.png",
  searchTabDivClassName,
}) => {
  return (
    <div className={`search-menu ${className}`}>
      <div className="overlap-group-4">
        <div className="div-2">
          <HomeTab
            className="home-tab-instance"
            divClassName={homeTabDivClassName}
            icon={homeTabIcon}
            stateProp="default"
          />
          <BookmarkTab stateProp="default" />
          <SearchTab
            divClassName={searchTabDivClassName}
            icon={searchTabIcon}
            stateProp="default"
          />
          <ProfileTab stateProp="default" />
        </div>

        <div className="title">NEWSTART</div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  homeTabIcon: PropTypes.string,
  searchTabIcon: PropTypes.string,
};

export default Menu;