
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='brands' element={<Brands/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='blog' element={<Blog/>}/>
      </Routes>
      
      </BrowserRouter>
      

  
        </div>
  );
}
    
export default App;
