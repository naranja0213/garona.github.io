import React from 'react'
import './Services.css'
import penal1_1 from '../../img/penal1_1.png'
import civil1 from '../../img/civil1.jpeg'
import internacional from '../../img/internacional.png'
import divorcios from '../../img/divorcios_1.png'
import Card from '../Card/Card'
import Resumen from "./Resumen.pdf"

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>服务宗旨</span>
            <span>专业<br/>
             高效<br/>
             可信赖</span>
            <span>
            我们为客户提供专业、高效、可信赖的法律服务
                <br />
                我们的律师团队由经验丰富、富有执业热情的专业人士组成
                <br />
                他们在各自的领域拥有深厚的法律知识和丰富的实践经验。
            </span>
            {/* 我们不用下载简历，可以注释掉 */}

            {/* <a href={Resumen} download>
            <button className='button s-button'>Download CV</button>
            </a> */}
            
            <div className='blur s-blur1' style={{background:"#AABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left:"5rem"}}>
            <Card
              CardImage={penal1_1}
              url='/Penal'
              CardBody={"刑事"}
              CardText={"Garoña y Asociados 是一家律师事务所，在安达卢西亚、马德里、巴塞罗那、毕尔巴鄂和西班牙其他地区处理严肃事务的成功率为 95%。我们将以技术和专业的方式维护您的权益。"}
            />
            </div>
            {/* second card */}
            
            <div className='cards2' style={{left:"21rem"}}>
            <Card
              url='/Internacional'
              CardImage={internacional}
              CardBody={"移民"}
              CardText={"在过去的几年里，Garoña y Asociados 律师事务所在国外参与了各种法律诉讼。因此，我们与摩洛哥和沙特阿拉伯的不同律师事务所保持密切和持续的合作。"}
            />
            
            </div>
            {/* third card */}
            <div className='cards3' style={{top:"23rem",left:"5rem"}}>
            <Card
              CardImage={divorcios}
              url='/Divorce'
              CardBody={"离婚"}
              CardText={"在 Garoña y Asociados，您会找到值得信赖的专业人士，他们将通过个性化的处理和优质的法律服务来回答您的法律问题。我们是困难离婚的专家。 "}
            />
            </div>
            {/* forth card */}
            <div className='cards4' style={{top:"23rem",left:"21rem"}}>
            <Card
              CardImage={civil1}
              url='/Civil'
              CardBody={"民事"}
              CardText={"Garoña y Asociados 律师事务所作为塞维利亚民法领域的专家律师事务所，将帮助您更好地了解情况、不同的可能性以及有利地解决此类问题的方法。"}
            />
            </div>
            <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services