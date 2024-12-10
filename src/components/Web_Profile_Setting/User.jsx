/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import UserIcon from "./UserIcon";
import "./style.css";

export const User = ({ style }) => {
  return (
    <>
      {["duotone", "line"].includes(style) && (
        <img
          className="wps-user"
          alt="Style duotone"
          src={
            style === "line"
              ? "https://c.animaapp.com/G4E98Tez/img/style-line@2x.png"
              : "https://c.animaapp.com/G4E98Tez/img/style-duotone.png"
          }
        />
      )}

      {style === "solid" && <UserIcon className="user" />}
    </>
  );
};

User.propTypes = {
  style: PropTypes.oneOf(["line", "duotone", "solid"]),
};

export default User;