import React from "react";
import { useWindowWidth } from "../../breakpoints";
import classNames from "classnames";
import ChangeButton from "../../components/Web_Profile_Password/ChangeButton";
import Return from "../../components/Web_Profile_Setting/Return";
import Menu from "../../components/Web_Profile/Menu";
import CompleteButton from "../../components/Web_Profile_Setting/CompleteButton";
import "./style.css";

export const Web_Profile_Password = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="profile-password">
      <div
        className={classNames("div-3", {  // 반응형 웹 기준 설정
          "div-for-mobile": screenWidth < 1512,
          "div-for-web": screenWidth >= 1512,
        })}         
        style={{
          height:
            screenWidth < 1512
              ? "844px"
              : screenWidth >= 1512
                ? "982px"
                : undefined,
          overflow: screenWidth >= 1512 ? "hidden" : undefined,
          width:
            screenWidth < 1512
              ? "390px"
              : screenWidth >= 1512
                ? "1512px"
                : undefined,
        }}
      >
        {screenWidth < 1512 && ( //모바일 화면
          <>
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="frame-3">
                  <div className="view-wrapper">
                    <div className="view">
                      <div className="text-wrapper-7">현재 비밀번호</div>

                      <div className="text-wrapper-8">현재 비밀번호 입력</div>

                      <img
                        className="line"
                        alt="Line"
                        src="https://c.animaapp.com/saL1Q9gz/img/line-3-2@2x.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="frame-4">
                  <div className="frame-5">
                    <div className="view-2">
                      <div className="text-wrapper-9">새 비밀번호</div>

                      <div className="text-wrapper-10">8자 이상 입력</div>

                      <img
                        className="line"
                        alt="Line"
                        src="https://c.animaapp.com/saL1Q9gz/img/line-3-2@2x.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="frame-4">
                  <div className="frame-6">
                    <div className="view-2">
                      <div className="text-wrapper-11">새 비밀번호 재입력</div>

                      <div className="text-wrapper-10">8자 이상 입력</div>

                      <img
                        className="line"
                        alt="Line"
                        src="https://c.animaapp.com/saL1Q9gz/img/line-3-2@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-7">
              <div className="frame-50-wrapper">
                <Return divClassName="frame-50" />
              </div>

              <div className="title-wrapper">
                <div className="title-2">비밀번호 재설정</div>
              </div>
            </div>

            <CompleteButton
              className="component-174"
              disabled
              text="완료"
            />
          </>
        )}

        {screenWidth >= 1512 && ( // PC 화면
          <>
            <div className="frame-8">
              <div className="title-box">
                <Return />
                <div className="title-frame">
                  <div className="title-3">비밀번호 재설정</div>
                </div>
              </div>

              <div className="frame-9">
                <div className="div-4">
                  <div className="text-wrapper-12">현재 비밀번호</div>

                  <input className="text-input" />

                  <img
                    className="line-2"
                    alt="Line"
                    src="https://c.animaapp.com/saL1Q9gz/img/line-3-5@2x.png"
                  />
                </div>

                <div className="div-4">
                  <div className="text-wrapper-13">새 비밀번호</div>

                  <input className="element" />

                  <img
                    className="line-2"
                    alt="Line"
                    src="https://c.animaapp.com/saL1Q9gz/img/line-3-5@2x.png"
                  />
                </div>

                <div className="div-4">
                  <div className="text-wrapper-14">새 비밀번호 재입력</div>

                  <input className="element" />

                  <img
                    className="line-2"
                    alt="Line"
                    src="https://c.animaapp.com/saL1Q9gz/img/line-3-5@2x.png"
                  />
                </div>
              </div>

              <ChangeButton
                className="button"
                divClassName="component-175"
                text="비밀번호 변경"
              />
            </div>

            <Menu
              className="menu-instance"
              homeTabDivClassName="instance-node"
              homeTabIcon="https://c.animaapp.com/saL1Q9gz/img/icon-9@2x.png"
              profileTabDivClassName="menu-2"
              profileTabIcon="https://c.animaapp.com/saL1Q9gz/img/icon-11@2x.png"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Web_Profile_Password;