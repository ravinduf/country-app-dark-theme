import React, { lazy, Suspense } from 'react'
import Loading from '../Loading/Loading'
// import SingleCardCountry from './SingleCardCountry/SingleCountryCard'

const SingleCardCountry = lazy(() => import('./SingleCountryCard/SingleCountryCard'))

const CountryGrid = ({ countries }) => {
  return (
    <div className=" country-grid">
      {countries.map((country, index) => (
        <Suspense fallback={(<Loading />)} key={index}>
          <SingleCardCountry country={country} />
        </Suspense>
      ))}
    </div>
  )
}

export default CountryGrid
