import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from 'react';
const SunbirdVideoPlayer = (props) => {
  const [url, setUrl] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (props?.mimeType === "application/pdf") {
      setUrl(`${process.env.PUBLIC_URL}/players/pdf`);
    } else if (props?.mimeType === "video/mp4") {
      setUrl(`${process.env.PUBLIC_URL}/players/video`);
    } else if (
      ["application/vnd.sunbird.questionset"].includes(props?.mimeType)
    ) {
      setUrl(`${process.env.PUBLIC_URL}/players/quml`);
    } else if (
      [
        "application/vnd.ekstep.ecml-archive",
        "application/vnd.ekstep.html-archive",
      ].includes(props?.mimeType)
    ) {
      setUrl(
        `${process.env.PUBLIC_URL}/players/project-sunbird/content-player`
      );
    } else {
      if (props?.url.startsWith("http://")) {
        // Open http links in a new tab/window
        window.open(props.url, "_blank");
        navigate("/");
      } else {
        setUrl(props?.url.replace("watch?v=", "embed/"));
      }
    }
  }, [props?.mediaType]);

  if (url) {
    return (
      <iframe
        id="preview"
        width="100%"
        height="500vh"
        name={JSON.stringify(props)}
        src={`${url}?autoplay=1`}
      />
    );
  } else {
//     useEffect(() => {
// navigate("/");}, [
  
// ]); 

    return <h2>{`${props?.mimeType} this mime type not compatible`}</h2>;
  }
};

export default React.memo(SunbirdVideoPlayer);
