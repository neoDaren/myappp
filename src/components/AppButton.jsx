import React from 'react';

export const AppButton = ({hasError, buttonClick}) => {
    return (
        <button disabled={hasError} onClick={buttonClick}>Ответ</button>
    );
};

