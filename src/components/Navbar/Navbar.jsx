import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='nav-bar-container'>
			<h1>Digital Marketing Dashboard</h1>
			<ul>
				<li>
					<a href=''>Overview</a>
				</li>
				<li>
					<a href=''>Website</a>
				</li>
				<li>
					<a href=''>Social Media</a>
				</li>
				<li>
					<a href=''>Goal Tracker</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
