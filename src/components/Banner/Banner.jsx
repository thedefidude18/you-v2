import React from "react";
import styled from "./Banner.module.css";
function Banner({ text, image, heightImage, widthImage }) {
  /***if this image have special width or height */
  const style = widthImage &&
    heightImage && {
      width: widthImage + "px",
      height: heightImage + "px",
      marginTop: "-4px",
    };
  return (
    <div className={styled.banner__cont}>
        <h1 style={{ whiteSpace: "nowrap" }} dangerouslySetInnerHTML={{ __html: text }} />
      <img src={image} alt="bannerImage" style={style} />
    </div>
  );
}

export default Banner;
