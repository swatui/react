import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    return (
        <div>
        <img onMouseOver={() => { imageRef.current.src = secondaryImg; }}
            onMouseOut={() => { imageRef.current.src = primaryImg; }}
            ref={imageRef} src={primaryImg} alt="d" />
            </div>
    )
}

export default ImageToggleOnMouseOver;