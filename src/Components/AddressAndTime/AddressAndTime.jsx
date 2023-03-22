import React from 'react'
import './AddressAndTime.css'


function AddressAndTime() {
  return (
    <div className="address">
        <div className="addressOfWork">
                <p>
                    <span>办公地址:</span>
                    <span> Avda. Republica Argentina, 19C, 1C 41011 Sevilla.</span>
                </p>  
        </div>
        <div className="workTime">
            <p>
                <span>工作时间:</span>
                <span> 17:00 – 20:00 <br/>周一至周五</span>
            </p>
        </div>
        <div className="findUs">
            <p>
                <span>联系我们:</span><br />
                <span>WhatsApp:+34 95 433 48 15</span><br/>
                <span>WhatsApp:+34 630 253 670</span><br/>
                
                <span>
                    <span className='web'>
                        <a href="http://info@garona.es">Email: info@garona.es</a>
                        
                    </span>
                </span>
            </p>
        </div>
    </div>
    
  )
}

export default AddressAndTime;