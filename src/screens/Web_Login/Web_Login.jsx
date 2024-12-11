import React from "react";
import { useWindowWidth } from "../../breakpoints";
import LoginButton from "../../components/Web_Login/LoginButton";
import "./style.css";

export const Web_Login = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="login">
      <div className="div">
        {screenWidth < 1512 && ( // 모바일용 화면
          <>
          <div className="frame">
            <div className="frame-for-top-5vh">
              <div className="title-wrapper">
                <div className="title">이메일 로그인</div>
              </div>

              <div className="frame-wrapper">
                <div className="div-2">
                  <div className="view">
                    <div className="text-wrapper-2">이메일</div>

                    <input className="text-input" 
                      placeholder="이메일을 입력해주세요."
                    />

                    <img
                      className="line"
                      alt="Line"
                      src="https://c.animaapp.com/2w9FzD4H/img/line-3-5@2x.png"
                    />
                  </div>

                  <div className="view">
                    <div className="text-wrapper-2">비밀번호</div>

                    <input className="element" 
                      placeholder="비밀번호를 입력해주세요."  
                    />

                    <img
                      className="line"
                      alt="Line"
                      src="https://c.animaapp.com/2w9FzD4H/img/line-3-5@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
              <LoginButton className="component-87" text="로그인" />
            </div>

            
          </>
        )}

        {screenWidth >= 1512 && ( // PC용 화면
          <div className="frame-2">
            <div className="title-2">
              <div className="title-3">NEWSTART</div>

              <div className="text-wrapper-3">로그인</div>
            </div>

            <div className="div-2">
              <div className="view">
                <div className="text-wrapper-2">이메일</div>

                <input className="text-input" 
                  placeholder="이메일을 입력해주세요."
                />

                <img
                  className="line"
                  alt="Line"
                  src="https://c.animaapp.com/2w9FzD4H/img/line-3-7@2x.png"
                />
              </div>

              <div className="view">
                <div className="text-wrapper-2">비밀번호</div>

                <input className="element" 
                  placeholder="비밀번호를 입력해주세요."
                />

                <img
                  className="line"
                  alt="Line"
                  src="https://c.animaapp.com/2w9FzD4H/img/line-3-7@2x.png"
                />
              </div>
            </div>

            <LoginButton
              className="component-87-instance"
              text="로그인"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Web_Login;