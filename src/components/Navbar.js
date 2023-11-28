import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const navigate = useNavigate();

  const handleMain = ()=>{
    navigate('/')
  }
  return (
    <div className='navbar'>
      <div className="navContainer">
        <span className="logo" onClick={handleMain}>Booking App</span>
        {/* <div className="navItems">
            <button className='navBtn' >Login</button>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
