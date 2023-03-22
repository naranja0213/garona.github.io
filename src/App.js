import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Business from "./Components/Business/Business.jsx";
import AddressAndTime from "./Components/AddressAndTime/AddressAndTime.jsx";
import Services from "./Components/Services/Services.jsx";
import Experience from "./Components/Experience/Experience";
import SendEmail from './Components/SendEmail/SendEmail';

function App() {
  return (
    <div className="App">
      
      <Navbar/>{/* 把components里面的导航栏导出到app里面 */}
      <Intro/>
      
      <Services/>
      <Experience/>
      <SendEmail/>
      {/* <Business/> */}
      
                {/* google map 要开api然后绑定api到code，地址需要设置街道名称*/}
      <div className="addressandtime">
      <AddressAndTime/>

      </div>
      
      <div className="foooter">
      <Footer className='footer'/>
      </div>
      
    </div>
  );
}

export default App;
