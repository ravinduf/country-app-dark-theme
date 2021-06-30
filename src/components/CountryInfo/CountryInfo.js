import React from 'react'
import { useDispatch }  from 'react-redux';

import { removeSelectedCountry } from '../../actions/selectedCountry'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const CountryInfo = ({ country }) => {
  const dispatch = useDispatch()
  console.log(country)
  return (
    <div className="country-info">
      <Button className="info-btn" onClick={() => dispatch(removeSelectedCountry())}>Back</Button>
      <Row className="info">
        <Col className="info__image">
          <img src={country.flag } alt="" />
        </Col>
        <Col >
          <Row className="info__details">
            <h3 className="info__details-name">{ country.name }</h3>
            <Col className="info__details1">
              <p><span className="info__heading" >Native Name:</span> { country.nativeName }</p>
              <p><span className="info__heading" >Population:</span> { country.population.toLocaleString() }</p>
              <p><span className="info__heading" >Region:</span> { country.region }</p>
              <p><span className="info__heading" >Sub Region:</span> { country.subregion }</p>
              <p><span className="info__heading" >Capital:</span> { country.capital }</p>
            </Col>
            <Col className="info__details2">
              <p><span className="info__heading">Top Level Domain:</span> { country.topLevelDomain.join() }</p>
              <p><span className="info__heading">Currencies:</span> { country.currencies.map(cur => cur.name).join() }</p>
              <p><span className="info__heading">Languages:</span> { country.languages.map(lan => lan.name).join() }</p>
            </Col>
          </Row>
          <Row className="info__border-countries">

          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default CountryInfo
