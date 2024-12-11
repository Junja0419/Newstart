import React from "react";
import { useWindowWidth } from "../../breakpoints";
import Frame from "../../components/Web_Main/Menu";
import Headline from "../../components/Web_Main/Headline";
import Category from "../../components/Web_Main/Category";
import ToSummaryButton from "../../components/Web_Main/ToSummaryButton";
import MenuForMobile from "../../components/MenuForMobile/MenuForMobile";
import "./style.css";

export const Web_Main = () => {
  const screenWidth = useWindowWidth();
  return (
    <div className="web-main">
      <div className="div-3">

{screenWidth < 1512 && ( //모바일용 화면
          <>
          <div className="mobile-frame-4">
          <div className="main-view-for-mobile">
            <div className="frame-5">
              <div className="title-2">오늘의 1분 요약!</div>

              <ToSummaryButton
                arrowRight="https://c.animaapp.com/zuoomGM9/img/arrow-right-2@2x.png"
                className="component-374"
                stateProp="default"
              />
            </div>

            <div className="main-folder-for-mobile" />

            <img
              className="line-2"
              alt="Line"
              src="https://c.animaapp.com/AoZMr3Yn/img/line-3-1@2x.png"
            />
          </div>
          <div className="main-headline-wrapper-for-mobile">
          <div className="main-headline-for-mobile">
            <div className="title-3">최신 헤드라인</div>

            <div className="text-wrapper-12">08:00</div>
          </div>

          <div className="main-category-wrapper-for-mobile">
            <Category
              className="menu-bar-instance"
              frameClassNameOverride="menu-bar-2"
              img="https://c.animaapp.com/zuoomGM9/img/line-13-41@2x.png"
              imgClassName="menu-bar-3"
              imgClassNameOverride="menu-bar-3"
              line="https://c.animaapp.com/zuoomGM9/img/line-13-36@2x.png"
              line1="https://c.animaapp.com/zuoomGM9/img/line-13-41@2x.png"
              line2="https://c.animaapp.com/zuoomGM9/img/line-13-41@2x.png"
              line3="https://c.animaapp.com/zuoomGM9/img/line-13-41@2x.png"
              line4="https://c.animaapp.com/zuoomGM9/img/line-13-41@2x.png"
              lineClassName="menu-bar-3"
              lineClassName1="menu-bar-3"
              lineClassName2="menu-bar-3"
              lineClassNameOverride="menu-bar-3"
              stateProp="politics"
            />
          </div>

          <Headline
            className="headline-instance"
            divClassName="headline-3"
            labelClassName="headline-5"
            stateProp="default"
            text="01"
            textGroupClassName="headline-4"
          />
          <Headline
            className="headline-instance"
            divClassName="headline-3"
            stateProp="default"
            text="02"
            text1="텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
          />
          <Headline
            className="headline-instance"
            frameClassName="headline-6"
            stateProp="default"
            text="03"
            text1="엔비디아 젠슨 황 “삼성 HBM 승인 위해 가능한 빠르게 작업 중”"
          />
          <Headline
            className="headline-instance"
            frameClassName="headline-6"
            stateProp="default"
            text="04"
            text1={
              <>
                텍스트텍스트텍스트텍스트텍스트텍스트
                <br />
                가나다라마바사
              </>
            }
          />
          <Headline
            className="headline-instance"
            frameClassName="headline-7"
            stateProp="default"
            text="05"
            text1="텍스트텍스트텍스트텍스트텍스트텍스트"
          />
        </div>
        </div>

            {/* 모바일용 네비게이터 */}
            <MenuForMobile 
              srcformainicon = "https://c.animaapp.com/JmVmo2aX/img/icon-9@2x.png"
            />
          </>
        )}

        {screenWidth >= 1512 && ( //PC용 화면
          <>
        <div className="frame-4">
          <div className="view">
            <div className="frame-5">
              <div className="title-2">오늘의 1분 요약!</div>

              <ToSummaryButton
                arrowRight="https://c.animaapp.com/zuoomGM9/img/arrow-right-2@2x.png"
                className="component-374"
                stateProp="default"
              />
            </div>

            <div className="folder" />

            <img
              className="line-2"
              alt="Line"
              src="https://c.animaapp.com/AoZMr3Yn/img/line-3-1@2x.png"
            />
          </div>

          <div className="headline-2">
            <div className="title-3">최신 헤드라인</div>

            <div className="text-wrapper-12">08:00</div>
          </div>

          <div className="menu-bar-wrapper">
            <Category
              className="menu-bar-instance"
              frameClassNameOverride="menu-bar-2"
              img="https://c.animaapp.com/zuoomGM9/img/line-13-41@2x.png"
              imgClassName="menu-bar-3"
              imgClassNameOverride="menu-bar-3"
              line="https://c.animaapp.com/zuoomGM9/img/line-13-36@2x.png"
              line1="https://c.animaapp.com/zuoomGM9/img/line-13-41@2x.png"
              line2="https://c.animaapp.com/zuoomGM9/img/line-13-41@2x.png"
              line3="https://c.animaapp.com/zuoomGM9/img/line-13-41@2x.png"
              line4="https://c.animaapp.com/zuoomGM9/img/line-13-41@2x.png"
              lineClassName="menu-bar-3"
              lineClassName1="menu-bar-3"
              lineClassName2="menu-bar-3"
              lineClassNameOverride="menu-bar-3"
              stateProp="politics"
            />
          </div>

          <Headline
            className="headline-instance"
            divClassName="headline-3"
            labelClassName="headline-5"
            stateProp="default"
            text="01"
            textGroupClassName="headline-4"
          />
          <Headline
            className="headline-instance"
            divClassName="headline-3"
            stateProp="default"
            text="02"
            text1="텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
          />
          <Headline
            className="headline-instance"
            frameClassName="headline-6"
            stateProp="default"
            text="03"
            text1="엔비디아 젠슨 황 “삼성 HBM 승인 위해 가능한 빠르게 작업 중”"
          />
          <Headline
            className="headline-instance"
            frameClassName="headline-6"
            stateProp="default"
            text="04"
            text1={
              <>
                텍스트텍스트텍스트텍스트텍스트텍스트
                <br />
                가나다라마바사
              </>
            }
          />
          <Headline
            className="headline-instance"
            frameClassName="headline-7"
            stateProp="default"
            text="05"
            text1="텍스트텍스트텍스트텍스트텍스트텍스트"
          />
        </div>

        <Frame className="frame-51" />
        </>
        )}
      </div>
    </div>
  );
};

export default Web_Main;