import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Nft_main from "./Components/Nft_main";
import Index_main from "./Components/Index_main";
import Benefits_main from "./Components/Benefits_main";
import Collection_main from "./Components/Collection_main";


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
        <Route exact path="/" element={<Index_main/>}/>
          <Route exact path='/Nft_main' element={<Nft_main/>}/>
          <Route exact path='/Benefits_main' element={<Benefits_main/>}/>
          <Route exact path='/Collection_main' element={<Collection_main/>}/>
          
        </Routes>
        <Footer />
      </Router>
      
      
    
    </div>
  );
}
export default App;