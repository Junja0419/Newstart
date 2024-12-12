import React from "react";
import { useWindowWidth } from "../../breakpoints";
import classNames from "classnames";
import ChangeButton from "../../components/Web_Profile_Password/ChangeButton";
import Return from "../../components/Web_Profile_Setting/Return";
import MenuForPC from "../../components/MenuForPC/MenuForPC"
import CompleteButton from "../../components/Web_Profile_Setting/CompleteButton";
import "./style.css";

export const Web_Profile_Password = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="profile-password">
      <div className="div-3">
        {screenWidth < 1512 && ( //모바일 화면
          <>
          <div className="frame-for-all-mobile-wpp">
          <div className="frame-7">
              <div className="frame-50-wrapper">
                <Return divClassName="frame-50" />
              </div>

              <div className="title-wrapper">
                <div className="title-2">비밀번호 재설정</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="frame-3">
                  <div className="view-wrapper">
                    <div className="view">
                      <div className="text-wrapper-7">현재 비밀번호</div>

                      <input 
                        className="text-input" 
                        type="password"
                        placeholder="현재 비밀번호 입력"
                      />

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

                      <input 
                        className="text-input" 
                        type="password"
                        placeholder="8자 이상 입력"
                      />

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

                      <input 
                        className="text-input" 
                        type="password"
                        placeholder="8자 이상 입력"
                      />

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

            <CompleteButton
              className="component-174"
              disabled
              text="완료"
            />
            </div>
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

                  <input 
                    className="text-input-for-pc" 
                    type="password"
                    placeholder="현재 비밀번호 입력"
                  />

                  <img
                    className="line-2"
                    alt="Line"
                    src="https://c.animaapp.com/saL1Q9gz/img/line-3-5@2x.png"
                  />
                </div>

                <div className="div-4">
                  <div className="text-wrapper-12">새 비밀번호</div>

                  <input 
                    className="text-input-for-pc" 
                    type="password"
                    placeholder="8자 이상 입력"
                  />

                  <img
                    className="line-2"
                    alt="Line"
                    src="https://c.animaapp.com/saL1Q9gz/img/line-3-5@2x.png"
                  />
                </div>

                <div className="div-4">
                  <div className="text-wrapper-12">새 비밀번호 재입력</div>

                  <input 
                    className="text-input-for-pc" 
                    type="password"
                    placeholder="8자 이상 입력"
                  />

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

            <MenuForPC 
              className="menu-instance"
              IsActivated="yesprofileis"
              ProfileTabActivated="https://c.animaapp.com/zuoomGM9/img/icon-4@2x.png" />
          </>
        )}
      </div>
    </div>
  );
};

export default Web_Profile_Password;