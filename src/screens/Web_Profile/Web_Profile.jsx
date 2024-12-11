import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import ProfileEdit from "../../components/Web_Profile/ProfileEdit";
import Logout from "../../components/Web_Profile/Logout";
import Menu from "../../components/Web_Profile/Menu";
import ToggleButton from "../../components/Web_Profile/ToggleButton";
import Toggle from "../../components/Web_Profile/Toggle";
import User from "../../components/Web_Profile/User";
import MenuForMobile from "../../components/MenuForMobile/MenuForMobile";
import "./style.css";

export const Web_Profile = () => {
  const screenWidth = useWindowWidth();
  const navigate = useNavigate(); // navigate 함수 정의
  return (
    <div className="web-profile">
      <div                        // 반응형 웹 기준 설정
        className="div-3"
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
        {screenWidth < 1512 && ( //모바일용 화면
          <>
            <img
              className="line"
              alt="Line"
              src="https://c.animaapp.com/KaiTeIt5/img/line-7@2x.png"
            />

            <div className="frame-2">
              <div className="frame-3">
                <div className="user-wrapper">
                  <User style="solid" />
                </div>

                <div className="frame-4">
                  <div className="text-wrapper-6">아무개</div>

                  <div className="group">
                    <div className="text-wrapper-7">newstart1234@gmail.com</div>
                  </div>
                </div>
              </div>

              <div className="button-wrapper">
                <ProfileEdit
                  className="button-instance"
                  divClassName="instance-node"
                />
              </div>
            </div>

            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-7">
                  <div className="text-wrapper-8">알림 설정</div>

                  <div className="text-wrapper-9">
                    매일 08:00 알림을 전송합니다.
                  </div>
                </div>

                <Toggle
                  className="toggle-instance"
                  knobClassName="toggle-2"
                  state="on"
                />
              </div>

              <div className="frame-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-8"
                  onClick={() => navigate("/profilepass")} // 클릭 시 "/profilepass" 경로로 이동
                  >비밀번호 재설정</div>
                </div>
              </div>

              <Logout className="frame-16" divClassName="frame-instance" />
            </div>

            <div className="title-wrapper">
              <div className="title-2">프로필</div>
            </div>

            {/* 모바일용 네비게이터 */}
            <MenuForMobile
              srcforprofileicon="https://c.animaapp.com/KaiTeIt5/img/icon-14@2x.png"
              activeTab="profile"
            />
            {/* <div className="navigation-bottom"> 
              <div className="tab-bar-buttons">
                <div className="tab">
                  <img
                    className="icon-3"
                    alt="Icon"
                    src="https://c.animaapp.com/KaiTeIt5/img/icon-9@2x.png"
                  />

                  <div className="label">Home</div>
                </div>

                <div className="tab">
                  <Bookmark
                    bookmark="https://c.animaapp.com/KaiTeIt5/img/bookmark-3@2x.png"
                    className="bookmark-2"
                  />
                  <div className="label-2">Bookmark</div>
                </div>

                <div className="tab">
                  <img
                    className="icon-4"
                    alt="Icon"
                    src="https://c.animaapp.com/KaiTeIt5/img/icon-13@2x.png"
                  />

                  <div className="label-3">Search</div>
                </div>

                <Link className="tab" to="/profile">
                  <img
                    className="icon-4"
                    alt="Icon"
                    src="https://c.animaapp.com/KaiTeIt5/img/icon-14@2x.png"
                  />

                  <div className="label-4">Profile</div>
                </Link>
              </div>
            </div> */}
          </>
        )}

        {screenWidth >= 1512 && ( //PC용 화면
          <>
            <div className="frame-8">
              <div className="title-3">
                <div className="text-wrapper-10">프로필</div>
              </div>

              <div className="div-4">
                <div className="frame-9">
                  <div className="user-instance-wrapper">
                    <User style="solid" />
                  </div>

                  <div className="textbox">
                    <div className="nickname">아무개</div>

                    <input
                      className="email"
                      placeholder="newstart1234@gmail.com"
                      type="email"
                    />

                    <ProfileEdit className="button-2" />
                  </div>
                </div>

                <div className="button-frame">
                  <div className="button-menu">
                    <div className="alram-button">
                      <div className="alram-set">
                        <div className="text-wrapper-11">알림 설정</div>
                      </div>

                      <div className="detail-text">
                        <div className="text-wrapper-12">
                          매일 08:00 알림을 전송합니다.
                        </div>
                      </div>
                    </div>

                    <div className="button-3"
                    
                    >
                      <div className="text-wrapper-11"
                      onClick={() => navigate("/profilepass")} // 클릭 시 "/profilepass" 경로로 이동
                      >비밀번호 재설정</div>

                      <Logout className="frame-16" />
                    </div>
                  </div>
                </div>

                <img
                  className="line-2"
                  alt="Line"
                  src="https://c.animaapp.com/KaiTeIt5/img/line-7-1@2x.png"
                />

                <ToggleButton className="toggle-3" stateProp="off" />
              </div>
            </div>

            <Menu
              className="menu-instance"
              homeTabDivClassName="menu-2"
              homeTabIcon="https://c.animaapp.com/KaiTeIt5/img/icon-12@2x.png"
              profileTabDivClassName="menu-3"
              profileTabIcon="https://c.animaapp.com/KaiTeIt5/img/icon-14@2x.png"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Web_Profile;