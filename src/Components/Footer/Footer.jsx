import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-container">
            <p>Copyright © 2023 Garona. All rights reserved.</p>
            <ul style={{listStyleType:'none'}}>
                <li><a href="/Home">主页</a></li>
                <li><a href="/Despacho">关于我们</a></li>
                <li><a href="/Contacto">联系我们</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
