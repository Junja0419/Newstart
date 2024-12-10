/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import "./style.css";

export const HomeTab = ({ className }) => {
  const navigate = useNavigate(); // navigate 함수 정의
  return (
    <div className={`web-main-home-tab ${className}`}
    onClick={() => navigate("/main")} // 클릭 시 "/main" 경로로 이동
    >
      <img
        className="icon"
        alt="Icon"
        src="https://c.animaapp.com/zuoomGM9/img/icon-9@2x.png"
      />

      <div className="text-wrapper-8">Home</div>
    </div>
  );
};

export default HomeTab;