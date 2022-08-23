import './SocialMedia.css';
import Table from '../Table/Table';

const SocialMedia = ({ title, data, colorPrimary }) => {
	const headers = ['Channel', 'Followers', 'Page Views', 'CTR %', 'ER %'];
	return (
		<div className='social-media-container'>
			<h2>{title}</h2>
			<div className='table-wrapper'>
				<Table headers={headers} data={data} colorPrimary={colorPrimary} />
			</div>
		</div>
	);
};

export default SocialMedia;
