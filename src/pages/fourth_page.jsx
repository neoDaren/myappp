import React, {useState} from 'react';
import { AppCaptcha } from '../components/AppCaptcha';
import { AppImgs } from '../components/AppImgs';
import { AppLabel } from '../components/AppLabel';
import { AppP } from '../components/AppP';
import { AppButton } from '../components/AppButton';
import { useNavigate } from 'react-router-dom';
import bus from '../imgs/bus.jpg';
import trolleybus from '../../src/imgs/trolleybus.jpg';

export const Fourth_page = () => {
    const [correct, setCorrect] = useState(null)
    const navigate = useNavigate();
    const ButtonClick = () => {
      navigate('/last_page');
    };
      return (
          <AppCaptcha>
              <AppImgs>            
              <AppLabel labelClass='div_img' inputValue={'correct'} imgSrc={bus} onclick={() => setCorrect(false)}/>
              {/* <label htmlFor="" className='div_img' onClick={() => c(true)}>
                  <input type="radio" name='s' value='incorrect'/>
                  <img src={wolf} alt="" />
              </label> */}
              <AppLabel labelClass='div_img' inputValue={'incorrect'} imgSrc={trolleybus} onclick={() => setCorrect(true)}/>
              </AppImgs>
              <AppP PText={'Выберите Автобус'}/>
              <AppButton hasError={correct} buttonClick={ButtonClick}/>
          
          </AppCaptcha>
      );
};

