import React from 'react'
// import "../../Components//Divorce/Divorce.css";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
// import Divorce from '../../Components/Divorce/Divorce.js'
// import Civil from '../../Components/Civil/Civil'
// import Internacional from '../../Components/Internacional/Internacional'
// import Mercantil from '../../Components/Mercantil/Mercantil'
import Despacho from '../../Components/Despacho/Despacho'
import AddressAndTime from '../../Components/AddressAndTime/AddressAndTime'
import './Despacho.css'
import SendEmail from '../../Components/SendEmail/SendEmail'


function MercantilPage() {
  return (
    <>
        <Navbar/>
            <Despacho
            cName='penal'
            cImg={require('../../img/aboutus3.jpeg')}
            title='关于我们'
            text='
            
            如何找到我们
            '
            
            />
            <div className='email'>
              <SendEmail/>
            </div>
        <AddressAndTime className='address'/>
        <div className='footer-d'>
            <Footer/>
            </div>
            
        
    </>
    
  )
} 

export default MercantilPage;