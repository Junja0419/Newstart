import React from "react";
import { useWindowWidth } from "../../breakpoints";
import ReadOriginalButton from "../../components/Web_Summary/ReadOriginalButton";
import Frame from "../../components/Web_Summary/Frame";
import Menu from "../../components/Web_Main/Menu";
import ReturnIcon from "../../components/Web_Summary/ReturnIcon";
import "./style.css";

export const Web_Summary = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="summary"
      style={{
        backgroundColor:
          screenWidth < 1512
            ? "#f5f5f5"
            : screenWidth >= 1512
              ? "#ffffff"
              : undefined,
      }}
    >
      <div
        className="div-3"
        style={{
          backgroundColor:
            screenWidth < 1512
              ? "#f5f5f5"
              : screenWidth >= 1512
                ? "#ffffff"
                : undefined,
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
        {screenWidth < 1512 && (
          <img
            className="summary-icon-3"
            alt="Icon"
            src="https://c.animaapp.com/UCp2MqVE/img/icon-10@2x.png"
          />
        )}

        <div
          className="frame-2"
          style={{
            height:
              screenWidth < 1512
                ? "409px"
                : screenWidth >= 1512
                  ? "941px"
                  : undefined,
            left:
              screenWidth < 1512
                ? "21px"
                : screenWidth >= 1512
                  ? "639px"
                  : undefined,
            top:
              screenWidth < 1512
                ? "164px"
                : screenWidth >= 1512
                  ? "41px"
                  : undefined,
            width:
              screenWidth < 1512
                ? "353px"
                : screenWidth >= 1512
                  ? "591px"
                  : undefined,
          }}
        >
          {screenWidth < 1512 && (
            <div className="overlap">
              <div className="overlap-group-2">
                <div className="rectangle" />

                <div className="frame-wrapper">
                  <div className="frame-3">
                    <p className="text-wrapper-6">
                      ‘상설특검 여당 추천 배제’ <br />
                      개정안이 국회를 통과했어요.
                    </p>

                    <p className="element-2">
                      개정안은 대통령이나 대통령의 가족이 수사 대상일 경우, 특검
                      후보 7명 중 여당과 야당이 각각 2명씩 추천하도록 한 규정을
                      -&gt; 야당이 4명 모두 추천하도록 바꾸는 내용을 담고
                      있어요. 법률과 달리 규칙은 대통령이 재의요구권(거부권)을
                      행사할 수 없어 바로 시행돼요. 국민의힘은 “수사권과
                      기소권을 야당이 틀어쥐려 하고 있어!” 반발했는데요.
                      더불어민주당은 조만간 ‘김건희 여사 상설특검’을 추진할
                      예정이에요.
                    </p>
                  </div>
                </div>

                <div className="text-wrapper-7">MBCNEWS</div>

                <img
                  className="free-icon-quote"
                  alt="Free icon quote"
                  src="https://c.animaapp.com/UCp2MqVE/img/free-icon-quote-9298522-1@2x.png"
                />
              </div>

              <ReadOriginalButton
                className="button-instance"
                hasSymbol={false}
                label="원문 읽기"
                labelClassName="instance-node"
                labelType="symbol-text"
                onMaterial={false}
                size="small"
                state="enabled"
                style="filled"
              />
            </div>
          )}

          {screenWidth >= 1512 && (
            <>
              <div className="frame-4">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <img
                      className="article-box"
                      alt="Article box"
                      src="https://c.animaapp.com/UCp2MqVE/img/article-box.png"
                    />

                    <div className="textbox">
                      <div className="frame-36-wrapper">
                        <Frame className="frame-36" />
                      </div>

                      <div className="summary-text-wrapper-8">MBCNEWS</div>
                    </div>

                    <img
                      className="quotes"
                      alt="Quotes"
                      src="https://c.animaapp.com/UCp2MqVE/img/quotes@2x.png"
                    />

                    <ReadOriginalButton
                      className="moreread-button"
                      hasSymbol={false}
                      label="원문 읽기"
                      labelClassName="moreread-button-2"
                      labelType="symbol-text"
                      onMaterial={false}
                      size="small"
                      state="enabled"
                      style="filled"
                    />
                  </div>
                </div>
              </div>

              <img
                className="icon-4"
                alt="Icon"
                src="https://c.animaapp.com/UCp2MqVE/img/icon-10@2x.png"
              />
            </>
          )}
        </div>

        {screenWidth < 1512 && (
          <ReturnIcon className="outline-interface-caret-left" />
        )}

        {screenWidth >= 1512 && <Menu className="frame-51" />}
      </div>
    </div>
  );
};

export default Web_Summary;