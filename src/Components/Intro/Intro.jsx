import React,{ useEffect } from 'react'
import './Intro.css'
import whatsapp from '../../img/whatsapp.png'
import wechat from '../../img/wechat.png'
import garona from '../../img/garona.jpeg'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import logogarona from '../../img/logogarona.png';
import twitter from '../../img/twitter.png'
import Facebook from '../../img/Facebook.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSquareFacebook,faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

            // const connectUsButton = document.querySelector('connect-us-button2');
            // const emailSection = document.querySelector('email-section');

            // connectUsButton.addEventListener('click', () => {
            //     emailSection.scrollIntoView({
            //     behavior: 'smooth'
            //         });
            //     }); 



function Intro() {

  useEffect(()=>{
    // const connectUsButton = useRef(null);
    // const emailSection = useRef(null);
    const connectUsButton = document.querySelector('#connect-button');
    const emailSection = document.querySelector('#email-section');

    connectUsButton?.addEventListener('click', () => {
        emailSection?.scrollIntoView({
            behavior: 'smooth'
    });
  });
},[]);

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Garona律师事务所 </span>
                <span>专业人士为您服务</span>
                <span>我们是一家律师事务所，自 1997 年成立以来，发展了所有法律分支：劳动法、民事法、商业法、国际法和刑事法。由六位律师和两位经济学家组成，多年来我们一直保持联系，从一开始，直到在马德里、塞维利亚、太阳海岸（马拉加）和克里斯蒂娜岛（韦尔瓦）形成我们目前的四个办事处。我们继续吸收新的人才来发展我们的活动。
                </span>
                {/* <button className="Button i-button">Contect Me</button> */}
            </div>
            <button id='connect-button' className="Button i-button">联系我们</button>
            <div  className="i-icons">
                {/* <img src={whatsapp} alt="whatsapp logo" /> */}
                {/* <img src={Facebook} alt="wechat logo" /> */}
                <a className='i-con' href="https://www.facebook.com/profile.php?id=100063689783855" style={{textDecoration: 'none'}}> <FontAwesomeIcon icon={faSquareFacebook} /></a>
                <a className='i-con' href="https://twitter.com/GaronaAbogados?s=20" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faSquareTwitter} /></a>
                
            </div>
            
        </div>
        
        <div className="i-right">
          {/* <img src={garona} alt="" />   */}
        <div >
            <FloatingDiv image={logogarona} txt1="你的" txt2="移民律师"/>
        </div>
        <img src={garona} alt="" /> 
        </div>
    </div>
  )
}

export default Intro;