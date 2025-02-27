import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true);

    const handleClick= () => setClick(!click);
    const closeMobilemenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobilemenu}>
                        ezyfin 
                        
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={ click ? 'fas fa-times' : 'fas fa-bars'}/>

                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                    <li className = 'nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                            Home
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobilemenu}>
                            About ezyfin
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/signup' className='nav-links-mobile' onClick={closeMobilemenu}>
                            Sign Up
                        </Link>
                    </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button> }
                </div>
            </nav>
        </>
    );
}

export default Navbar
