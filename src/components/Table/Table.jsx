import React from 'react'
import Tooltip from '../Tooltip/Tooltip'
import './Table.css'

const Table = ({ headers, data, colored, colorPrimary }) => {
  return (
    <table className="table-container">
      <thead>
        <tr className="table-row">
          {headers.map((header, index) => (
            <th key={index}>
              <Tooltip text={header} />
              {/* {header} */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="table-row">
            <td className={`social-media-icon ${colored}`} style={{ color: colorPrimary }}>
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
  )
}

export default Table
