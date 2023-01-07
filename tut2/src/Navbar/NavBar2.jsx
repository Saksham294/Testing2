import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar2.css";
import logo from '../icell.2f352f17.gif'

function Navbar2() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
      <img className='logo' src={logo}></img>
			<nav ref={navRef}>
				<a href="/#">SPEAKERS</a>
				<a href="/#">COMPETITIONS</a>
				<a href="/#">WORKSHOPS</a>
				<a href="/#">SCHEDULE</a>
                <a>SPONSORS</a>
                
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar2;