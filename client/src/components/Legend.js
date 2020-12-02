import React from 'react';

function Legend({ lables }) {

  // Render the UI for your table
  return (
    <table >
      <tbody>
        {lables.map((row, i) => {
          return (
            <tr key={i.toString()}>
              <td style={{ background: row.color, width: 20, height: 20, marginRight: 2}}></td>
              <td>{row.lable}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Legend;
