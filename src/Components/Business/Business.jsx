import React from 'react'
import "./Business.css";

import divorcios_1 from "../../img/divorcios_1.png";
import penal1_1 from "../../img/penal1_1.png"
import civil1 from "../../img/civil1.jpeg"
import internacional from "../../img/internacional.png"

function Business() {
  return (
    <div className="business">
        <div className="b-nameList">
            <ul style={{listStyleType:'none'}}>
                
                <li>
                  <span>业务范围:</span>
                </li>
                <li>
                  {/* <img  src={penal1_1} alt="penal" /> */}
                  <span>刑事:</span>  
                  <span>Garoña y Asociados 是一家律师事务所，在安达卢西亚、马德里、巴塞罗那、毕尔巴鄂和西班牙其他地区处理严肃事务的成功率为 95%。我们将以技术和专业的方式维护您的权益。</span>
                  </li>
                  
                <li>
                  {/* <img  src={civil1} alt="civil" /> */}
                  <span>民事:</span> 
                  <span>Garoña y Asociados 律师事务所作为塞维利亚民法领域的专家律师事务所，将帮助您更好地了解情况、不同的可能性以及有利地解决此类问题的方式。</span>
                  </li>
                <li>
                  {/* <img  src={internacional} alt="civil" /> */}
                  <span>移民:</span> 
                  <span>在过去的几年里，Garoña y Asociados 律师事务所在国外参与了各种法律诉讼。因此，我们与摩洛哥和沙特阿拉伯的不同律师事务所保持密切和持续的合作。</span>
                  </li>
                <li>
                  {/* <img  src={divorcios_1} alt="civil" /> */}
                  <span>离婚:</span> 
                  <span>在 Garoña y Asociados，您会找到值得信赖的专业人士，他们将通过个性化的处理和优质的法律服务来回答您的法律问题。我们是困难离婚的专家。 </span>
                  </li>
            </ul>
        </div>
    </div>
  )
}

export default Business