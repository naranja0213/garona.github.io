import React from 'react'
// import "../../Components//Divorce/Divorce.css";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
// import Divorce from '../../Components/Divorce/Divorce.js'
// import Civil from '../../Components/Civil/Civil'
// import Internacional from '../../Components/Internacional/Internacional'
// import Mercantil from '../../Components/Mercantil/Mercantil'
import AddressAndTime from '../../Components/AddressAndTime/AddressAndTime'
import './Contacto.css'
import Contacto from '../../Components/Contacto/Contacto'
import SendEmail from '../../Components/SendEmail/SendEmail'


function ContactoPage() {
  return (
    <>
        <Navbar/>
            <Contacto
            cName='penal'
            cImg={require('../../img/connectus2.jpeg')}
            title='联系我们'
            text='
            
            如何找到我们: 
             '
            
            />

            <div className='email2'>
              <SendEmail/>
            </div>

            <AddressAndTime className='address'/>
            <div className='footer-contacto'>
            <Footer/>
            </div>
            
        
    </>
    
  )
} 

export default ContactoPage;