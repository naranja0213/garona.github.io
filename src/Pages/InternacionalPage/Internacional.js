import React from 'react'
// import "../../Components//Divorce/Divorce.css";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
// import Divorce from '../../Components/Divorce/Divorce.js'
// import Civil from '../../Components/Civil/Civil'
import Internacional from '../../Components/Internacional/Internacional'
import AddressAndTime from '../../Components/AddressAndTime/AddressAndTime'
import './International.css'
import SendEmail from '../../Components/SendEmail/SendEmail'


function InternacionalPage() {
  return (
    <>
        <Navbar/>
            <Internacional
            cName='penal'
            cImg={require('../../img/internationalLaw.jpeg')}
            title='国际法'
            text='
            
            在过去的几年里，Garoña y Asociados 律师事务所在国外参与了各种法律诉讼。因此，我们与摩洛哥和沙特阿拉伯的不同律师事务所保持密切和持续的合作。
             '
            
            />
            <div className='email'>
              <SendEmail/>
            </div>

            <AddressAndTime className='address'/>
            <div className='footer-international'>
            <Footer/>
            </div>
            
        
    </>
    
  )
} 

export default InternacionalPage ;