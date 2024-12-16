/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import "./style.css";

export const Naver = ({
  className,
  classNameformobiletext,
 }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(`/login/oauth2/code/naver`); // 네이버 api 로그인 경로로 이동
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
