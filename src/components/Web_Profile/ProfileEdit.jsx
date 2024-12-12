/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import "./style.css";

export const ProfileEdit = ({ className, divClassName }) => {
  const navigate = useNavigate(); // navigate 함수 정의
  return (
    <button className={`web-profile-button ${className}`}
    onClick={() => navigate("/profile/update")} // 클릭 시 "/profileset" 경로로 이동
    >
      <div className={`text-wrapper ${divClassName}`}>프로필 편집</div>
    </button>
  );
};

export default ProfileEdit;