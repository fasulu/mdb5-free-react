import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function ComboBox_A(props) {

  // console.log(props)

  const comboKey = props.comboKey
  const [comboValue, setComboValue] = useState([])

  const customStyle = {
    minWidth: '225px',
    minHeight: '50px',
    fontSize: '20px',
    textAlign: 'left'
  }

  useEffect(() => {

    // fetchData();

  }, [])

  return (
    <div  >
      <select style={customStyle} >
        <option defaultValue >{comboKey}...</option>
        {comboValue.map((elem, index) => {
          return (<option key={index}>{elem.comboKey}</option>)
        })}
      </select>
    </div>
  );
}