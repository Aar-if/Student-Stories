import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import SunbirdVideoPlayer from "./Player";
import Header from "./Header";
function StoryDetatils() {
  const location = useLocation();
  const state = location?.state;
  const [showIframe, setShowIframe] = useState(false);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="product-card" style={{ marginTop: "100px" }}>
        <h1>Detailes of story</h1>
        <h3>{state?.product?.attributes?.title}</h3>
        <p>Language: {state?.product?.attributes?.language}</p>
        <p>Discription: {state?.product?.attributes?.description}</p>
        <p>ContentType: {state?.product?.attributes?.contentType}</p>
        <button
          style={{ position: "absolute", justifyContent: "center" }}
          onClick={() => setShowIframe(!showIframe)}
        >
          {showIframe ? "X" : "View"}
        </button>

        {showIframe && (
          <div className="video-player">
            <SunbirdVideoPlayer
              url={state?.product?.attributes?.link}
              width="90vw"
              height="50vh"
            />
          </div>
          // <iframe
          //   width="400vw"
          //   height="450vh"
          //   src="https://www.youtube.com/embed/se9WMfsiIF0"
          //   title="YouTube video player"
          //   frameborder="0"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //   allowFullScreen
          // ></iframe>
        )}
      </div>
    </div>
  );
}

export default StoryDetatils;