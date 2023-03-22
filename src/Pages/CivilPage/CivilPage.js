import React from 'react'
// import "../../Components//Divorce/Divorce.css";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
// import Divorce from '../../Components/Divorce/Divorce.js'
import Civil from '../../Components/Civil/Civil'
import './CivilPage.css'
import AddressAndTime from '../../Components/AddressAndTime/AddressAndTime'
import SendEmail from '../../Components/SendEmail/SendEmail'

function CivilPage() {
  return (
    <>
        <Navbar/>
            <Civil
            cName='penal'
            cImg={require('../../img/civilLaw.jpeg')}
            title='民法/劳动法'
            text='
            
            民法是一套法律规范和法律原则，以私人方式规范人们之间的关系。 

Garoña y Asociados 律师事务所作为塞维利亚民法领域的专家律师事务所，将帮助您更好地了解情况、不同的可能性以及有利地解决此类问题的方法。

在 Garoña y Asociados，您会找到值得信赖的专业人士，他们将通过个性化处理和优质法律服务解决您的法律问题。 '
            
            />
            <div className='email'>
              <SendEmail/>
            </div>
            <AddressAndTime classNmae='CivilPages'/>
            <div className='footer-civil'>
            <Footer/>
            </div>
            
        
    </>
    
  )
} 

export default CivilPage ;