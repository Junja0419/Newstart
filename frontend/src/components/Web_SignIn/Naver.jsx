import React from "react";
import "./style.css";

export const Naver = ({ className, classNameformobiletext }) => {
  const handleClick = async () => {
    try {
      const response = await fetch(
        `${process.env.API__URL}/oauth2/authorization/naver`,
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
    <div className={`web-signin-naver ${className}`} onClick={handleClick}>
      <div className="logo">
        <div className="overlap-group">
          <div className="rectangle" />

          <div className="rectangle-2" />

          <img
            className="img"
            alt="Rectangle"
            src="https://c.animaapp.com/IP5lyiL7/img/rectangle-4-1@2x.png"
          />
        </div>
      </div>
      <div className={`div ${classNameformobiletext}`}>네이버로 로그인</div>
    </div>
  );
};

export default Naver;
