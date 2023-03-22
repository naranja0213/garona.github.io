import './Contacto.css'



function Contacto(props){
    return(
        <>
            <div className={props.cName}>
            <img className='cp-img' alt='contacto' src={props.cImg}/>
            <div className='cpenal-text'>
                <h1 className='p-penal'>{props.title}</h1>
                <p className='p-text'>
                {props.text}
                </p>
                <p className='p-list'>
                <span>我们的办公室总部位于美丽的塞维利亚，期待与您的合作：</span><br/>
                <ul className='p-list'>
                致电电话：<br/>
                +34 630 253 670。<br/>
                联系邮箱：<br/>
                Email: info@garona.es<br/>
                
                <p className='maps'>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.2420698261997!2d-6.001896619545538!3d37.37838135708281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c3e424e75a1%3A0x3ce9eaef5f823c9f!2sGaro%C3%B1a%20%26%20Asociados!5e0!3m2!1sen!2ses!4v1679259444998!5m2!1sen!2ses" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.484051814863!2d-6.003164224989058!3d37.37838343489623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c3e424e75a1%3A0x3ce9eaef5f823c9f!2sGaro%C3%B1a%20%26%20Asociados!5e0!3m2!1sen!2sus!4v1679262226239!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                <iframe className='map' src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB1GMRRn_cluEb0hwjvlL2Sb6QZLu4z7DY&q=Av.delaRepublicaArgentina,19,C,Spain+sevilla"></iframe>
                
                </p>
                {/* google map 要开api然后绑定api到code，地址需要设置街道名称*/}
                



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
export default Contacto;