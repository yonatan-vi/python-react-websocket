/**
 *
 * LocaleTable
 *
 */

import React from 'react';

function Table({ data, lables }) {

  // Render the UI for your table
  return (
    <table >
      <tbody>
        {data.map((row, i) => {
          return (
            <tr key={i.toString()}>
              {row.map((val, j) => {
                return <td key={j.toString()} className="tooltip"
                  style={{
                    background: getLabel(lables, val).color,
                    width: 50,
                    height: 50,
                    marginRight: 2
                  }}
                >
                  <span className="tooltiptext">Value: {val} Lable: {getLabel(lables, val).lable}</span>
                </td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const getLabel = (lables,val) => {
  const lable = lables.find(i => i.value === val);
  if(lable) return lable

  return lables.find(i => i.value === 3);
};

export default Table;
