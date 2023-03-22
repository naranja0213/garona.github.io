import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'



// cardsName={
//   cards,cards2,cards3,cards4
// }


const Card = ({CardImage,CardBody,CardText,url}) => {
  function handleClick(){
    window.location.href=url;
  }
//创建个函数url，把点链接导入分页里面

  return (
    <div className="card">
        <img src={CardImage} alt="" />
        <span>{CardBody}</span>
        <span>{CardText}</span>
        {/* <button className="c-button" >Read More</button> */}
        
          {/* <button className='c-button'><link rel="stylesheet" to="/Penal" />Read More</button> */}
         
          <button className='c-button' onClick={handleClick}>更多</button>
          
          
          

    </div>
  )
}

export default Card
