import React from "react";
import { useWindowWidth } from "../../breakpoints";
import LoginButton from "../../components/Web_Login/LoginButton";
import User from "../../components/Web_SignUp_Profile/User";
import "./style.css";

export const Web_SignUp_Profile = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="sign-up-profile"> 
      <div
        className="div" // 전체 화면 설정
        style={{
          height: // 너비에 따라 높이 결정
            screenWidth < 1512 
              ? "844px"
              : screenWidth >= 1512
                ? "982px"
                : undefined,
          overflow: screenWidth < 1512 ? "hidden" : undefined, // 너비에 따라 숨김 처리
          position: screenWidth < 1512 ? "relative" : undefined, // 너비에 따라 상대/절대 위치 결정
          width:
            screenWidth < 1512 // 너비에 따라 너비 결정
              ? "390px"
              : screenWidth >= 1512
                ? "1512px"
                : undefined,
        }}
      >
        {screenWidth < 1512 && ( // 화면 너비가 기준 미만일 경우
        <>
          <div className="frame">
            <div className="frame-2">
              <div className="title-wrapper">
                <div className="title">프로필 설정</div>
              </div>

              <div className="frame-3">
                <div className="profile">
                  <div className="overlap-group">
                    <div className="user-wrapper">
                      <User style="solid" />
                    </div>

                    <div className="camera">
                      <img
                        className="icon"
                        alt="Icon"
                        src="https://c.animaapp.com/AoZMr3Yn/img/icon-1@2x.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="frame-wrapper">
                  <div className="view-wrapper">
                    <div className="view">
                      <div className="text-wrapper-2">닉네임</div>

                      <input className="text-input" 
                        placeholder="닉네임을 입력해주세요"
                      />

                      <img
                        className="line"
                        alt="Line"
                        src="https://c.animaapp.com/AoZMr3Yn/img/line-3-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <LoginButton className="component-87" text="완료"/>
          </div>
          
        </>
        )}

        

          {screenWidth >= 1512 && ( // 화면 너비가 기준 이상일 경우
            <div className="frame-4">
              <div className="title-2">
                <div className="title-3">NEWSTART</div>

                <div className="text-wrapper-3">프로필 설정</div>
              </div>

              <div className="profile-set">
                <div className="profile">
                  <div className="overlap-group">
                    <div className="user-wrapper">
                      <User style="solid" />
                    </div>

                    <div className="camera">
                      <img
                        className="icon"
                        alt="Icon"
                        src="https://c.animaapp.com/AoZMr3Yn/img/icon-1@2x.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="frame-wrapper">
                  <div className="view-wrapper">
                    <div className="view-2">
                      <div className="text-wrapper-2">닉네임</div>

                      <input className="input" 
                        placeholder="닉네임을 입력해주세요"
                      />

                      <img
                        className="line"
                        alt="Line"
                        src="https://c.animaapp.com/AoZMr3Yn/img/line-3-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="next-button">
                <LoginButton
                  text="완료"
                />
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Web_SignUp_Profile;
