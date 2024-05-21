import React, {useState} from 'react';
import { AppCaptcha } from '../components/AppCaptcha';
import { AppImgs } from '../components/AppImgs';
import { AppLabel } from '../components/AppLabel';
import { AppP } from '../components/AppP';
import { AppButton } from '../components/AppButton';
import { useNavigate } from 'react-router-dom';
import cock from '../imgs/cock.jpg';
import rooster from '../../src/imgs/rooster.jpg';
export const Third_page = () => {
    const [correct, setCorrect] = useState(null)
  const navigate = useNavigate();
  const ButtonClick = () => {
    navigate('/fourth_page');
  };
    return (
        <AppCaptcha>
            <AppImgs>            
            <AppLabel labelClass='div_img' inputValue={'correct'} imgSrc={cock} onclick={() => setCorrect(false)}/>
            {/* <label htmlFor="" className='div_img' onClick={() => c(true)}>
                <input type="radio" name='s' value='incorrect'/>
                <img src={wolf} alt="" />
            </label> */}
            <AppLabel labelClass='div_img' inputValue={'incorrect'} imgSrc={rooster} onclick={() => setCorrect(true)}/>
            </AppImgs>
            <AppP PText={'Выберите Курицу'}/>
            <AppButton hasError={correct} buttonClick={ButtonClick}/>
        
        </AppCaptcha>
    );
};



