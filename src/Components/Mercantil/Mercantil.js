import './Mercantil.css'



function Mercantil(props){
    return(
        <>
            <div className={props.cName}>
            <img className='cp-img' alt='commercial' src={props.cImg}/>
            <div className='cpenal-text'>
                <h1 className='p-penal'>{props.title}</h1>
                <p className='p-text'>
                {props.text}
                </p>
                <p className='p-list'>
                <span>在我们公司，我们在与其业务活动相关的所有法律领域为个人和法律实体提供建议：</span><br/>
                <ul className='p-list'>
                公司纠纷。<br/>
                商业破产代理。<br/>
                具有挑战性的社会协议。<br/>
                针对管理员的责任诉讼。<br/>
                不正当竞争行为和广告。<br/>
                代理、分销、特许经营和特许经营合同。<br/>
                商业管理。<br/>
                
                </ul>
                {/* <p className='p-list2'>
                <span>离婚:</span><br/>
                在西班牙，仅需配偶之一同意即可离婚。无需提出任何理由，可以通过双方同意或有争议的方式提出。

                在双方同意的情况下，监管协议允许建立一个框架，通过该框架，配偶和未成年子女的关系将在分居、废止或离婚后得到监管。它建立了诸如养老金、住房、探视制度等事项的基础……由配偶协商.
                在 Garoña y Asociados，您可以在监管协议的起草和谈判中获得必要的支持。离婚索赔终止了财产制度。
                <br/>
                <span className='p-list3'>婚姻分居和民事废止。:</span><br/>
                <span className='p-list4'>
                我们是家庭暴力（针对女性和男性）方面的专家

                    </span>
                
                </p> */}


                </p>
            </div>
        </div>
            
        </>
    )
}
export default Mercantil;