/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ReadOriginalButton = ({
  label = "Play",
  size,
  style,
  state,
  onMaterial,
  labelType,
  className,
  hasSymbol = true,
  labelClassName,
}) => {
  return (
    <div
      className={`web-summary-button ${labelType} ${state} ${style} ${size} on-material-${onMaterial} ${className}`}
    >
      {labelType === "symbol-text" && (
        <>
          <>{hasSymbol && <div className="text-wrapper">􀊄</div>}</>

          <div className={`label ${labelClassName}`}>{label}</div>
        </>
      )}

      {["symbol", "text"].includes(labelType) && (
        <div className="symbol-2">
          {labelType === "symbol" && <>􀊄</>}

          {labelType === "text" && <>{label}</>}
        </div>
      )}
    </div>
  );
};

ReadOriginalButton.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  style: PropTypes.oneOf(["plain", "gray", "tinted", "filled"]),
  state: PropTypes.oneOf(["disabled", "enabled"]),
  onMaterial: PropTypes.bool,
  labelType: PropTypes.oneOf(["text", "symbol-text", "symbol"]),
  hasSymbol: PropTypes.bool,
};

export default ReadOriginalButton;