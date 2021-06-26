import React from 'react'

import SingleCardCountry from './SingleCardCountry/SingleCountryCard'

const CountryGrid = ({ countries }) => {
  return (
    <div className=" country-grid">
      {countries.map(country => (
        <SingleCardCountry country={country} />
      ))}
    </div>
  )
}

export default CountryGrid
