import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {links} from './../data';
import {useState} from 'react';
import './../css/Navbar.css';
import {
    Link
  } from "react-router-dom";

const Navbar = () =>{
    const [isToogle, setIsToogle] = useState(false);
    const handleToogleIcon = (e) =>{
        setIsToogle(!isToogle);
    }
    return(
        <nav>
        <div className="navHeader">
            <div className="logo">
                Coding Addict
            </div>
            <button className="icon-toogle" onClick={handleToogleIcon}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
        <div className={isToogle ? "links-container links-container-toogle" : "links-container"}>
           
            <ul className="links">
                
                        {
                            links.map(link => 
                                (
                                <li key={link.id}>
                                    <Link to={link.url}>
                                        {link.text}
                                    </Link>
                                </li>
                                )
                            )
                        }
                </ul>
            
        </div>
        </nav>

    );
}

export default Navbar;