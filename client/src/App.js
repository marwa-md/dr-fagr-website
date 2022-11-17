import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Service';
import Footer from './Components/Footer';
import Meet from './Components/Meet'
import Contact from './Components/Contact'



function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route> 
       <Route path="/about" element={<Meet/>}></Route>
        <Route path="/services" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>

      </Routes>
<Footer />

      </Router>


    
    </div>
  );
}

export default App;
