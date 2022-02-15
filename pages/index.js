import React, { useState } from 'react';


import ImageChangeOnMouseOver from './ImageChangeOnMouseOver';
import ImageChangeOnScroll from './ImageChangeOnScroll';

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
                {/* <ImageChangeOnMouseOver /> */}
               <ImageChangeOnScroll/>

            </div>
        </div>
    );

}
export default InputElement;