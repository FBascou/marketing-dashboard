import React from 'react';
import './Table.css';

const Table = ({ data, colorPrimary }) => {
  return (
    <table className="table-container">
      <thead>
        <tr className="table-row">
          <th>Channel</th>
          <th>Followers</th>
          <th>Page Views</th>
          <th>CTR</th>
          <th>ER</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="table-row">
            <td className="social-media-icon" style={{ color: colorPrimary }}>
              {item.icon}
            </td>
            <td>{item.followers}</td>
            <td>{item.pageViews}</td>
            <td>{item.ctr}</td>
            <td>{item.er}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
