import React from 'react'

import {ReactComponent as DarkSvg} from '../../assets/images/dark-mode.svg'
import {ReactComponent as DefaultSvg} from '../../assets/images/light-mode.svg'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Header = () => {
  return (
    <Row className="header">
      <Container>
        <h3>Where in the world?</h3>
        <span>
          <DarkSvg/> 
          Dark Mode  
        </span>
        
        
      </Container>
    </Row>
  )
}

export default Header
