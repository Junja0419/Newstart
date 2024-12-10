/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import ArrowLeft from "./ArrowLeft";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import "./style.css";

export const Return = ({ divClassName }) => {
  const navigate = useNavigate(); // navigate 함수 정의
  return (
    <div className="wps-frame"
    onClick={() => navigate("/profile")} // 클릭 시 "/profile" 경로로 이동
    >
      <div className={`text-wrapper ${divClassName}`}>프로필로 돌아가기</div>

      <ArrowLeft
        img="https://c.animaapp.com/G4E98Tez/img/arrow-left-2@2x.png"
        size="twenty-four"
      />
    </div>
  );
};

export default Return;