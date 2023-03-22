
function Internacional(props){
    return(
        <>
            <div className={props.cName}>
            <img className='cp-img' alt='international' src={props.cImg}/>
            <div className='cpenal-text'>
                <h1 className='p-penal'>{props.title}</h1>
                <p className='p-text'>
                {props.text}
                </p>
                <p className='p-list'>
                <span>作为示例，我们可以引用以下操作：</span><br/>
                <ul className='p-list'>
                沙特法律。<br/>
                国际贸易合同，进出口。<br/>
                与商会的联系。<br/>
                在国外建立沙特商业公司。<br/>
                与沙特阿拉伯、摩洛哥、法国、葡萄牙、德国和英国的律师事务所达成协议。<br/>
                
                </ul>
                <p className='p-list2'>
                <span>如果您是外国投资者和企业家或购房者，我们也可以为您办理黄金签证:</span><br/>
                西班牙的一种签证和居留许可，适用于有进取心的外国投资者和西班牙房产的购买者，允许在申根地区自由流动。
我们的专家团队将在整个过程中为您提供建议和陪伴，帮助您以透明、高效和专业的方式处理申请并获得居留许可。
                <br/>
                <span className='p-list3'>移民法:</span><br/>
                <span className='p-list4'>
                我们在帮助移民方面拥有 20 多年的经验<br/>
                - 居留许可<br/>
                - 开除上诉<br/>
                - 行政诉讼<br/>

                    </span>
                
                </p>


                </p>
            </div>
        </div>
            
        </>
    )
}
export default Internacional;