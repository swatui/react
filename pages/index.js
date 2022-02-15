import React, { useState } from 'react';
import PictureToggleOnMouseOver from '../src/PictureToggleOnMouseOver';

import ImageChangeOnMouseOver from './ImageChangeOnMouseOver';

const InputElement = () => {
    const [inputText, setInputText] = useState(" ");
    const [historyList, setHistoryList] = useState([]);
    return (
        <div>
            <input onChange={(e) => {
                setInputText(e.target.value);
                setHistoryList([...historyList, e.target.value]);
                console.log(historyList);
            }}
                placeholder="enter some text" /><br />
            {inputText}
            <hr />
            <br />

            <ul>

                <br />
                {historyList.map(rec => {
                    return <div>{rec}</div>
                })}
            </ul>
            <div>
                <ImageChangeOnMouseOver />
                <PictureToggleOnMouseOver />

            </div>
        </div>
    );

}
export default InputElement;