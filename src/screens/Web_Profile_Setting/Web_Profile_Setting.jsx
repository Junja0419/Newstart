import React from "react";
import { useWindowWidth } from "../../breakpoints";
import classNames from "classnames";
import Return from "../../components/Web_Profile_Setting/Return";
import MenuForPC from "../../components/MenuForPC/MenuForPC"
import CompleteButton from "../../components/Web_Profile_Setting/CompleteButton";
import User from "../../components/Web_Profile_Setting/User";
import "./style.css";

export const Web_Profile_Setting = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="web-profile-set">
      <div                                 // 반응형 웹 기준 설정
        className="div-3"
        // {classNames(, {
        //   "div-for-mobile": screenWidth < 1512,
        //   "div-for-web": screenWidth >= 1512,
        // })}
        // style={{
        //   height:
        //     screenWidth < 1512
        //       ? "844px"
        //       : screenWidth >= 1512
        //         ? "982px"
        //         : undefined,
        //   overflow: screenWidth >= 1512 ? "hidden" : undefined,
        //   width:
        //     screenWidth < 1512
        //       ? "390px"
        //       : screenWidth >= 1512
        //         ? "1512px"
        //         : undefined,
        // }}
      >
         { screenWidth >= 1512 && (       // PC용 화면 
          <>
            <div className="frame-2">
              <div className="frame-3">
                <Return />
                <div className="frame-4">
                  <div className="text-wrapper-8">프로필 편집</div>
                </div>
              </div>
              <div className="overlap">
                <div className="email-frame">
                  <div className="profile">
                    <div className="overlap-group-2">
                      <div className="user-wrapper">
                        <User style="solid" />
                      </div>

                      <div className="camera">
                        <img
                          className="icon-3"
                          alt="Icon"
                          src="https://c.animaapp.com/G4E98Tez/img/icon-10@2x.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="email-text">
                    <div className="frame-wrapper">
                      <div className="view-wrapper">
                        <div className="view">
                          <div className="web-profile-text-wrapper-6">이메일</div>

                          <div className="web-profile-div-wrapper">
                            <div className="web-profile-text-wrapper-7">
                              newstart1234@gmail.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nickname">
                <div className="text-wrapper-9">닉네임</div>

                <input 
                  className="text-input" 
                  placeholder="아무개"
                />

                <img
                  className="line"
                  alt="Line"
                  src="https://c.animaapp.com/G4E98Tez/img/line-3-4@2x.png"
                />
              </div>
              </div>

              <CompleteButton
                className="component-210"
                disabled
                divClassName="button"
                text="완료"
              />
            </div>
            <MenuForPC 
              className="menu-instance"
              IsActivated="yesprofileis"
              ProfileTabActivated="https://c.animaapp.com/zuoomGM9/img/icon-4@2x.png" />
          </>
        )}
          
        

        {screenWidth < 1512 && (     // 모바일용 화면
          <div className = "frame-for-all-mobile-wps">
            <div className="frame-7">
              <div className="frame-50-wrapper">
                <Return divClassName="frame-50" />
              </div>

              <div className="title-wrapper">
                <div className="title-2">프로필 편집</div>
              </div>
            </div>
            <div className="frame-5">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <div className="user-instance-wrapper">
                    <User style="solid" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="icon-4"
                      alt="Icon"
                      src="https://c.animaapp.com/G4E98Tez/img/icon-9@2x.png"
                    />
                  </div>
                </div>
              </div>

              <div className="frame-6">
                <div className="view-2">
                  <div className="text-wrapper-11">닉네임</div>
                  <input 
                    className="text-wrapper-12" 
                    placeholder="아무개"
                  />

                  <img
                    className="line-2"
                    alt="Line"
                    src="https://c.animaapp.com/G4E98Tez/img/line-3-3@2x.png"
                  />
                </div>

                <div className="overlap-2">
                  <div className="rectangle-2" />

                  <div className="view-3">
                    <div className="text-wrapper-11">이메일</div>

                    <div className="text-wrapper-13">
                      newstart1234@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CompleteButton
              className="component-210-instance"
              disabled
              text="완료"
            />
          </div>
        )}
                                
      </div>
    </div>
  );
};

export default Web_Profile_Setting;