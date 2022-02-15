import React from 'react';
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";
import PictureToggleOnMouseOver from '../src/PictureToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return(
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-187.jpg" secondaryImg="/static/speakers/Speaker-187.jpg" alt="a" />
            <PictureToggleOnMouseOver bwImg="/static/speakers/bw/Speaker-823.jpg" colorImg="/static/speakers/Speaker-823.jpg"/>
         
        </div>
    )
}
export default ImageChangeOnMouseOver; 