
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './PAGES/HOME/Home';
import About from './PAGES/ABOUT/About'; 
import Brands from './PAGES/BRANDS/Brands'; 
import Contact from './PAGES/CONTACTS/Contact';
import Blog from  './PAGES/BLOG/Blog';





const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Brands />
      <Contact />
      <Blog />
      </BrowserRouter>
      

  
        </div>
  );
}
    
export default App;
