/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Logout = ({ className, divClassName }) => {
  return (
    <div className={`web-profile-frame ${className}`}>
      <div className={`div ${divClassName}`}>로그아웃</div>
    </div>
  );
};

export default Logout;