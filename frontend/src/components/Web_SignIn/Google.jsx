import React from "react";
import GoogleIcon from "./GoogleIcon";
import "./style.css";

export const Google = ({
  className,
  classNameforpadding,
  classNameformobiletext,
}) => {
  const handleClick = async () => {
    try {
      const response = await fetch(
        `${process.env.API__URL}/oauth2/authorization/google`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (err) {
      console.error("Error fetching naver api login: ", err);
    }
  };

  return (
    <div className={`web-signin-google ${className}`} onClick={handleClick}>
      <div className={`for-google-icon-paddingormargin ${classNameforpadding}`}>
        <GoogleIcon
          className="google-icon-instance"
          size="thirty-two-x-32"
          sizeX="https://c.animaapp.com/IP5lyiL7/img/google-icon-1@2x.png"
        />
      </div>
      <div className={`text-wrapper ${classNameformobiletext}`}>
        Google로 로그인
      </div>
    </div>
  );
};

export default Google;
