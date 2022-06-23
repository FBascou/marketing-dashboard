import React from 'react';
import './SocialMedia.css';
import {
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from 'react-icons/ai';
import Table from '../Table/Table';

const SocialMedia = ({ title, data, colorPrimary }) => {
  return (
    <div className="social-media-container">
      <h2>{title}</h2>
      <div className="table-wrapper">
        <Table data={data} colorPrimary={colorPrimary} />
      </div>
    </div>
  );
};

export default SocialMedia;
