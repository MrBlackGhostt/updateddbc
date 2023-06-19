import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector() {
  const [value, setValue] = useState()
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return <Select options={options} value={value} onChange={changeHandler} defaultInputValue='India' name='cars'
  id='cars'
  style={{
    border: "1px solid #eaeaea",
    color: "#666",
    width: "100%",
    height: "px",
    lineHeight: "50px",
    padding: "0 20px",
    backgroundPosition: "20px",
    borderRadius: "4px",
  }}/>
}

export default CountrySelector