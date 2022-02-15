import React, { useRef } from "react";

const PictureToggleOnMouseOver = ({ bwImg, colorImg }) => {
    const imageRef = useRef(null);
    return (
        <div>
        <img onMouseOver={() => { imageRef.current.src = colorImg; }}
            onMouseOut={() => { imageRef.current.src = bwImg; }}
            src={bwImg} ref={imageRef} />
            </div>
    )
}
export default PictureToggleOnMouseOver;