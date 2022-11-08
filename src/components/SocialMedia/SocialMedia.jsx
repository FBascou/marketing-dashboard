import './SocialMedia.css'
import Table from '../Table/Table'

const SocialMedia = ({ title, data, colorPrimary }) => {
  const headers = ['Channel', 'Follows', 'Visits', 'CTR %', 'ER %'] // Visits = Page Views, Follows = Followers
  return (
    <div className="social-media-container">
      <h2>{title}</h2>
      <div className="table-wrapper">
        <Table headers={headers} data={data} colorPrimary={colorPrimary} />
      </div>
    </div>
  )
}

export default SocialMedia
