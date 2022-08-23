import StickyNavButton from '../../components/StickyNavButton/StickyNavButton';
import Layout from '../../layout/Layout';
import './Home.css';

const Home = () => {
	return (
		<div className='home-container'>
			<StickyNavButton />
			<Layout />
		</div>
	);
};

export default Home;
