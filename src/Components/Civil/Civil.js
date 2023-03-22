import './Civil.css'



function Civil(props){
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
                继承<br/>

                在 Garoña y Asociados，您可以就这些问题咨询他们广泛的专业团队，帮助您继承遗产，从而 减少纳税：<br/>
                <br/>
                关于继任事宜的一般建议。<br/>
                起草遗嘱。<br/>
                意志的挑战。<br/>
                继承分区。<br/>
                接受遗产。<br/>
                遗产税和捐赠。<br/>
                
                </ul>
                <p className='p-list2'>
                <span>民事合同:</span><br/>
                我们就这些问题向您提供建议:<br/><br/>
                金额索赔<br/>
                针对银行的诉讼<br/>
                驱逐程序<br/>
                合同起草<br/>
                横向物业（物业管理）<br/>
                <br/>
                <span className='p-list3'>劳动法<br/>

                如果您对自己的就业情况有疑问或在工作中遭受某种类型的骚扰，请通过以下方式与公司协商

                就您而言，聘请就业律师会让您的性格更坚定，让您处于更有利的位置，这可以在短期内引导您找到有利于您利益的解决方案。

                Garoña y Asociados Firm 提供劳资关系和社会保障方面的专业法律咨询，通过我们不同的专业领域提供预防性建议：</span><br/>
                <br/>
                调解法<br/>
                个人和集体解雇<br/>
                就业法规文件<br/>
                集体修改工作条件<br/>
                集体转移<br/>
                就业法规文件（ERES和ERTES）<br/>
                <span className='p-list4'>
                外国人法<br/>

                自 1998 年以来，Garoña y Asociados Firm 一直是塞维利亚移民法的标杆。我们的律师非常专业，在移民方面拥有丰富的经验。我们可以帮助您：

                </span>
                <br/>
                <span>
                    <ul>
                    警察辩护。<br/>
                    处理居留和工作许可。<br/>
                    以开除文件代替罚款。<br/>
                    撤销驱逐令决议。<br/>
                    申请庇护和避难。<br/>
                    申请换货和行政诉讼。<br/>

                </ul>
                
                </span>

                
                </p>


                </p>
            </div>
        </div>
            
        </>
    )
}
export default Civil;