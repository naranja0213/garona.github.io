import './Divorce.css'



function Divorce(props){
    return(
        <>
            <div className={props.cName}>
            <img className='cp-img' alt='lawyerpenal' src={props.cImg}/>
            <div className='cpenal-text'>
                <h1 className='p-penal'>{props.title}</h1>
                <p className='p-text'>
                {props.text}
                </p>
                <p className='p-list'>
                <span>我们将就以下相关事宜向您提供建议：</span><br/>
                <ul className='p-list'>
                分居和离婚，双方同意并有争议。<br/>
                赡养费和补偿性养老金。<br/>
                共同监护。<br/>
                预防措施。<br/>
                措施的修改。<br/>
                残疾程序。<br/>
                因不支付赡养费和补偿性养老金而被处决。<br/>
                关于访问制度的建议。<br/>
                未成年人监护权。<br/>
                婚姻无效，规范和民事。<br/>
                合资企业的清算<br/>
                普通法工会。<br/>
                </ul>
                <p className='p-list2'>
                <span>离婚:</span><br/>
                在西班牙，仅需配偶之一同意即可离婚。无需提出任何理由，可以通过双方同意或有争议的方式提出。

                在双方同意的情况下，监管协议允许建立一个框架，通过该框架，配偶和未成年子女的关系将在分居、废止或离婚后得到监管。它建立了诸如养老金、住房、探视制度等事项的基础……由配偶协商.
                在 Garoña y Asociados，您可以在监管协议的起草和谈判中获得必要的支持。离婚索赔终止了财产制度。
                <br/>
                <span className='p-list3'>婚姻分居和民事废止。:</span><br/>
                <span className='p-list4'>
                我们是家庭暴力（针对女性和男性）方面的专家

                    </span>
                
                </p>


                </p>
            </div>
        </div>
            
        </>
    )
}
export default Divorce;