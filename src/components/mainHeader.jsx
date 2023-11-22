import { Link } from "react-router-dom"
import Image from '../components/Images/Group 1.png'
const mainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
      <div className="main__header-left">
          <div className="main__header-circle">
            <div className="main__header-image">
              <img src={Image} alt="gr" />
            </div>
          </div>
        </div>
      <div className='main__header-right'>
        <h1>Unique, Memorable & Timeless Brand Designs That Work</h1>
        <p>My name is Munar, and over the years, I have dedicated my time into learning to create and transform brands through creating outstanding identities that resonates with your target audience. I can do the same with your brand as well.</p>
        <Link to="/About" className="btn">Let's get started</Link>
      </div>


        
      </div>
    </header>
  )
}

export default mainHeader