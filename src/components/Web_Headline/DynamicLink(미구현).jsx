import React from "react";

const LinkButton = () => {
  return (
    <button
      onClick={() => window.location.href = "https://www.google.com"}
    >
      Go to Google
    </button>
  );
};

export default LinkButton;
