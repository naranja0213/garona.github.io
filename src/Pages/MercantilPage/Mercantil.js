import React from 'react'
// import "../../Components//Divorce/Divorce.css";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
// import Divorce from '../../Components/Divorce/Divorce.js'
// import Civil from '../../Components/Civil/Civil'
// import Internacional from '../../Components/Internacional/Internacional'
import Mercantil from '../../Components/Mercantil/Mercantil'
import AddressAndTime from '../../Components/AddressAndTime/AddressAndTime'
import './Mercantil.css'
import SendEmail from '../../Components/SendEmail/SendEmail'


function MercantilPage() {
  return (
    <>
        <Navbar/>
            <Mercantil
            cName='penal'
            cImg={require('../../img/commercial.jpeg')}
            title='商业法'
            text='
            
            商业法是私法的一个分支，它规定了与商人在其职业中的行为、具有法律资格的商业行为以及由此产生的法律关系有关的一套规则。
             '
            
            />

            <div className='email'>
              <SendEmail/>
            </div>
            <AddressAndTime className='address'/>
            <div className='footer-m'>
            <Footer/>
            </div>
            
            
        
    </>
    
  )
} 

export default MercantilPage;