import React from "react";
import { useWindowWidth } from "../../breakpoints";
import Frame from "../../components/Web_Main/Menu";
import Headline from "../../components/Web_Main/Headline";
import Category from "../../components/Web_Main/Category";
import ToSummaryButton from "../../components/Web_Main/ToSummaryButton";
import BookmarkIconForMobileTab from "../../components/Web_Headline/BookmarkIconForMobileTab";
import "./style.css";

export const Web_Main = () => {
  const screenWidth = useWindowWidth();
  return (
    <div className="web-main">
      <div className="div-3"        //반응형 웹 기준 설정
      style={{
        height:
          screenWidth < 1512
            ? "844px"
            : screenWidth >= 1512
              ? "982px"
              : undefined,
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
          <div className="mobile-frame-4">
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
              src="https://c.animaapp.com/zuoomGM9/img/line-7.png"
            />
          </div>

          <div className="headline-2">
            <div className="title-3">최신 헤드라인</div>

            <div className="text-wrapper-12">08:00</div>
          </div>

          <div className="menu-bar-wrapper">
            <Category
              className="menu-bar-instance"
              frameClassName="design-component-instance-node"
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

            {/* 모바일용 네비게이터 */}
            <div className="navigation-bottom"> 
              <div className="tab-bar-buttons">
                <div className="tab">
                  <img
                    className="icon-4"
                    alt="Icon"
                    src="https://c.animaapp.com/JmVmo2aX/img/icon-9@2x.png"
                  />

                  <div className="label">Home</div>
                </div>

                <div className="tab">
                  <BookmarkIconForMobileTab
                    bookmark="https://c.animaapp.com/JmVmo2aX/img/bookmark-5@2x.png"
                    className="bookmark-2"
                  />
                  <div className="label-2">Bookmark</div>
                </div>

                <div className="tab">
                  <img
                    className="icon-4"
                    alt="Icon"
                    src="https://c.animaapp.com/JmVmo2aX/img/icon-13@2x.png"
                  />

                  <div className="label-3">Search</div>
                </div>

                <div className="tab">
                  <img
                    className="icon-5"
                    alt="Icon"
                    src="https://c.animaapp.com/JmVmo2aX/img/icon-14@2x.png"
                  />

                  <div className="label-4">Profile</div>
                </div>
              </div>
            </div>
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
              src="https://c.animaapp.com/zuoomGM9/img/line-7.png"
            />
          </div>

          <div className="headline-2">
            <div className="title-3">최신 헤드라인</div>

            <div className="text-wrapper-12">08:00</div>
          </div>

          <div className="menu-bar-wrapper">
            <Category
              className="menu-bar-instance"
              frameClassName="design-component-instance-node"
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