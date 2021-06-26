import React from 'react'

import SingleCardCountry from './SingleCardCountry/SingleCountryCard'

const CountryGrid = ({countries}) => {
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {countries.map(country => (
                <SingleCardCountry country={country} />
            ))}
        </div>
    )
}

export default CountryGrid
