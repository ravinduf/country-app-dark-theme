import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const SingleCardCountry = ({country}) => {
  return (
    <Card>
      <Card.Img variant="top" src={country.flag} />
      <Card.Body>
        <Card.Title>{ country.name }</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default SingleCardCountry
