/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import GoogleIcon from "./GoogleIcon";
import "./style.css";

export const Google = ({
  className,
  classNameforpadding,
  classNameformobiletext,
 }) => {
  return (
    <div className={`web-signin-google ${className}`}>
      <div className ={`for-google-icon-paddingormargin ${classNameforpadding}`}>
      <GoogleIcon
        className="google-icon-instance"
        size="thirty-two-x-32"
        sizeX="https://c.animaapp.com/IP5lyiL7/img/google-icon-1@2x.png"
      />
      </div>
      <div className={`text-wrapper ${classNameformobiletext}`}>Google로 로그인</div>

      
    </div>
  );
};

export default Google;