import React, {useEffect, useState} from 'react';
import { AppCaptcha } from '../components/AppCaptcha';
import sheep from '../imgs/sheep.jpg';
import wolf from '../imgs/wolf.jpg';
import { AppP } from '../components/AppP';
import { AppImgs } from '../components/AppImgs';
import { AppButton } from '../components/AppButton';
import { AppLabel } from '../components/AppLabel';
import { useNavigate } from 'react-router-dom';


export const First_page = () => {
  const [correct, setCorrect] = useState(true)
  const [textError, setTextError] = useState(false)

  const navigate = useNavigate();
  const ButtonClick = () => {
    navigate('/second_page');
  };

 
    return (
        <AppCaptcha>
            <AppImgs>            
            <AppLabel labelClass='div_img' 
             imgSrc={sheep} onclick={() => setCorrect(false)}/>
            
            <AppLabel labelClass='div_img' 
             hasError={textError} 
             errorText={'Неправильный ответ'} 
             imgSrc={wolf} 
             onclick={() => setCorrect(true)}
             />
            </AppImgs>
            <AppP PText={'Выберите овцу'}/>
            <AppButton hasError={correct} buttonClick={ButtonClick}/>
        
        </AppCaptcha>
    );
};
