import React, { useRef ,useEffect } from 'react'
import './Navbar.css'
import logogarona from '../../img/logogarona.png';
// import "./Script";
// import "./MenuItems";
import '../../Pages/Divorce/DivorcePage';
import { Link } from 'react-router-dom'; 

// 点击联系我们后下滑到发送邮件部分
// const connectUsButton = document.querySelector('connect-us-button');
// const emailSection = document.querySelector('email-section');

//     connectUsButton.addEventListener('click', () => {
//         emailSection.scrollIntoView({
//             behavior: 'smooth'
//         });
//     });



function Navbar() {
    
    useEffect(()=>{
        // const connectUsButton = useRef(null);
        // const emailSection = useRef(null); 
        // 当点击联系我们后下滑到邮件部分
        const connectUsButton = document.querySelector('#connect-us-button');
        const emailSection = document.querySelector('#email-section');

        connectUsButton?.addEventListener('click', () => {
            emailSection?.scrollIntoView({
                behavior: 'smooth'
        });
    });
    },[]);

  return (
    <nav className='n-wrapper'>
        <div className="n-left">  {/*//创建左边导航栏  */}
            <div className='n-name'> <img src={logogarona} alt="garonalogo"/> 
            {/* <span>toggle</span>  */}
            </div>
            
        </div>
        <div className="n-right"> {/* //创建右边导航栏 */}
            <div className="n-list">
                {/* className="nav-menu" */}
                <ul className="nav-menu" style={{listStyleType:'none',borderTop: 'none'}}> 
                {/* ul是无序列表 */}
                    <li className='n-home'>
                    <Link  className="nav_link" to="/Home" style={{ color: 'rgb(67, 63, 63)' }}>主页</Link>
                        </li>   {/* 无序列表里面有每个列表 */}
                    <li className='n-penal' >
                        <Link  className="nav_link" to="/Penal" style={{ color: 'rgb(67, 63, 63)' }}>刑法</Link>
                    </li>
                    <li className='n-divorce'>
                        <Link  className="nav_link" to="/Divorce" style={{ color: 'rgb(67, 63, 63)'}}>婚姻法</Link>
                        {/* <a className='nav_link' href="../Divorce/Divorce.js">divorce</a> */}
                        </li>
                    <li className='n-civil'>
                    <Link  className="nav_link" to="/Civil" style={{ color: 'rgb(67, 63, 63)'}}>民法</Link>
                        </li>
                    <li className='n-internacional'>
                    <Link  className="nav_link" to="/Internacional" style={{ color: 'rgb(67, 63, 63)'}}>移民法</Link>
                    </li>
                    <li className='n-mercantil'>
                    <Link  className="nav_link" to="/Mercantil" style={{ color: 'rgb(67, 63, 63)'}}>公司商业法</Link>
                        </li>
                    <li className='n-despacho'>
                    <Link  className="nav_link" to="/Despacho" style={{ color: 'rgb(67, 63, 63)'}}>关于我们</Link>
                        </li> {/* 等下记得在这个列表下再添加一个下拉菜单 */}
                    <li className='n-contacto'>
                        
                        <Link Link  className="nav_link" to="/Contacto" style={{ color: 'rgb(67, 63, 63)'}}>联系我们</Link>
                        
                        </li>
                </ul>
            </div>
            
            <button  id="connect-us-button"  className='Button n-button'  >
                
                免费咨询
              
            </button>
            
           

        </div>
    </nav>
  )
}

export default Navbar;