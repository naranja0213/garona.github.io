import './CPenal.css'
// import'../Navbar/Navbar.css'

function CPenal(props){
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
                <span>我们将就这些问题向您提供建议：</span><br/>
                <ul className='p-list'>
                在所有类型的刑事审判中进行辩护。<br/>
                危害公共健康罪。<br/>
                在警察局和司法总部协助被拘留者。<br/>
                法人的法律辩护（新法）<br/>
                侮辱诽谤、胁迫、非法逮捕和威胁。<br/>
                针对财产、名誉或隐私的犯罪。<br/>
                与性别暴力有关的犯罪。<br/>
                在交通事故中受伤的索赔。<br/>
                公司犯罪。<br/>
                </ul>
                <p className='p-list2'>
                <span>监狱制度:</span><br/>
                向监狱监察法庭提出请愿和上诉 。

                我们帮助已经入狱的人。我们律师的工作并没有在审判结束时结束，而是更进一步，帮助我们的客户尽快出狱。

                请求 囚犯的赦免、许可和福利。 它是关于激发对第三级分类变化的预期，获得缓刑、家庭服从、赦免和其他监狱福利。Garoña y Asociados 的工作包括合作，以便尽快重新安置，并防止我们的客户成为监狱档案中的一个数字。
                <br/>
                <span className='p-list3'>交通意外:</span><br/>
                <span className='p-list4'>
                    我们为交通事故的受害者提供全面的建议，以要求他们的赔偿和他们的权利，并成为法律诉讼的一部分。我们将告知您可遵循的最佳方式，以索取可能与您相对应的赔偿金。
                    </span>
                
                </p>


                </p>
            </div>
        </div>
       </> 
    )
}
export default CPenal;