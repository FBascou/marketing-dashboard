import { useState } from 'react';
import './StickyNavButton.css';
import Navbar from '../Navbar/Navbar';

const StickyNavButton = () => {
	const [showNavBar, setShowNavBar] = useState(false);

	const handleClick = () => {
		setShowNavBar((show) => !show);
	};

	return (
		<div className='sticky-nav-btn-container' onClick={handleClick}>
			<div className='sticky-nav-btn'>Overview</div>
			<div className='display-nav-bar'>{showNavBar ? <Navbar /> : null}</div>
		</div>
	);
};

export default StickyNavButton;
