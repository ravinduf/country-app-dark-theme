import React from 'react'

import Card from 'react-bootstrap/Card'

const SingleCardCountry = ({country}) => {
  return (
    <Card>
      <Card.Img variant="top" src={country.flag} />
      <Card.Body>
        <Card.Title>{ country.name }</Card.Title>
        <Card.Text>
         <span className="heading">Population</span>: { country.population.toLocaleString() }<br/>
         <span className="heading">Region</span>: { country.region }<br/>
         <span className="heading">Capital</span>: { country.capital }<br/>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleCardCountry
