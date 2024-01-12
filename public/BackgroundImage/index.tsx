// BackgroundImage.js

import React from "react";

const BackgroundImage = () => {
  const backgroundImageStyle = {
    backgroundImage:
      'url("https://i.pinimg.com/564x/cc/e8/7e/cce87e2788907b09145c7bc1270b71bc.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  };

  return <div style={backgroundImageStyle}></div>;
};

export default BackgroundImage;
