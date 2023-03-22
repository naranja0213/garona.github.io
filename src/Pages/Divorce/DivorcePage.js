import React from 'react'
// import "../../Components//Divorce/Divorce.css";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Divorce from '../../Components/Divorce/Divorce.js'
import AddressAndTime from '../../Components/AddressAndTime/AddressAndTime'
import './DivorcePage.css'
import SendEmail from '../../Components/SendEmail/SendEmail'

function DivorcePage() {
  return (
    <>
        <Navbar/>
            <Divorce
            cName='penal'
            cImg={require('../../img/divorce.jpeg')}
            title='离婚法'
            text='
            
            在 Garoña y Asociados，您会找到值得信赖的专业人士，他们将通过个性化处理和优质法律服务解决您的法律问题。 

            我们是困难离婚的专家。 '
            
            />
            <div className='email'>
              <SendEmail/>
            </div>

            <AddressAndTime calssName='address'/>
            <div className='footer-divorce'>
            <Footer/>
            </div>
            
        
    </>
    
  )
} 

export default DivorcePage ;