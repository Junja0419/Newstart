import React from "react";
import { useWindowWidth } from "../../breakpoints";
import Menu from "../../components/Web_Main/Menu";
import BookmarkIconForMobileTab from "../../components/Web_Headline/BookmarkIconForMobileTab";
import FrameForMobile from "../../components/Web_Headline/FrameForMobile";
import Frame from "../../components/Web_Headline/Frame";
import "./style.css";

export const Web_Headline = () => {
  const screenWidth = useWindowWidth();

  return ( 
    <div className="headline">
      <div                         // 반응형 웹 기준 설정 
        className="div-3" 
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
          <FrameForMobile
              newspaper = "MBCNEWS"
              title = "국회 외통위, 한미 방위비분담금협정 비준동의안 통과"
              date = "2024.11.28"
              text = {` 국회 외교통일위원회가 한미 방위비분담 특별협정 비준동의안을 통과시켰습니다.

정부는 미국 정부와의 8차례 협의 끝에 지난달, 2026년부터 2030년까지 5년간 유효한 제12차 한미 방위분감금 특별협정을 타결했고, 이에 따라 2026년 주한미군 방위비분담금은 1조5천192억원으로, 2025년보다 8.3％ 늘게 됐습니다.

외통위는 정부에 방위비분담금 결정 방식을 총액형에서 소요형으로 전환하고, 주한미군 한국인 근로자를 직접고용해 국내 노동법이 적용받을 수 있게 제도개선을 논의해달라고 요구하는 내용을 부대의견으로 적었습니다.

한편, 외통위는 가자지구에 대한 인도적 지원 촉구 결의안, 가자지구에서의 즉각적이고 영구적인 휴전 촉구 결의안도 의결했습니다.`} />

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
            <Frame 
              newspaper = "MBCNEWS"
              title = "국회 외통위, 한미 방위비분담금협정 비준동의안 통과"
              date = "2024.11.28"
              text = {` 국회 외교통일위원회가 한미 방위비분담 특별협정 비준동의안을 통과시켰습니다.

정부는 미국 정부와의 8차례 협의 끝에 지난달, 2026년부터 2030년까지 5년간 유효한 제12차 한미 방위분감금 특별협정을 타결했고, 이에 따라 2026년 주한미군 방위비분담금은 1조5천192억원으로, 2025년보다 8.3％ 늘게 됐습니다.

외통위는 정부에 방위비분담금 결정 방식을 총액형에서 소요형으로 전환하고, 주한미군 한국인 근로자를 직접고용해 국내 노동법이 적용받을 수 있게 제도개선을 논의해달라고 요구하는 내용을 부대의견으로 적었습니다.

한편, 외통위는 가자지구에 대한 인도적 지원 촉구 결의안, 가자지구에서의 즉각적이고 영구적인 휴전 촉구 결의안도 의결했습니다.`} />
            <Menu className="frame-51" />
          </>
        )}
      </div>
    </div>
  );
};

export default Web_Headline;
