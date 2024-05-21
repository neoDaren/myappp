import React, {useState} from 'react';

export const AppLabel = ({labelClass, inputValue, imgSrc, onclick, hasError, errorText}) => {
    return (
        // <label htmlFor="" className='div_img' onClick={() => setCorrect(false)}>
        //         <input type="radio" name='s' value='correct' />
        //         <img src={sheep} alt="" />
        // </label>
        <label htmlFor="" className={labelClass} onClick={onclick}>
            <input type="radio" name='s' value={inputValue} />
            <img src={imgSrc} alt="" />
            {hasError && <span>{errorText}</span>}
        </label>
    );
};

