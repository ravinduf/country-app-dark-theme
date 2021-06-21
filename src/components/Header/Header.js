// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeToDarkTheme, changeToDefaultTheme} from '../../actions/darkTheme'

import {ReactComponent as DarkSvg} from '../../assets/images/dark-mode.svg'
import {ReactComponent as DefaultSvg} from '../../assets/images/light-mode.svg'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Header = () => {
  const { dark } = useSelector((state) => state.darkTheme)
  const dispatch = useDispatch()

  const changeDarkMode = () => {
    dispatch(changeToDarkTheme())
  }

  const changeDefaultMode = () => {
    dispatch(changeToDefaultTheme())
  }

  // useEffect(() => {
  // }, [dark])
  
  return (
    <Row className="header">
      <Container>
        <h4>Where in the world?</h4>
        <span>
          {dark ? (
            <span onClick={changeDefaultMode}>
              <DefaultSvg />
              Default mode
            </span>
          ) : (
            <span onClick={changeDarkMode}>
              <DarkSvg />
              Dark mode
            </span>
          )} 
        </span>
        
        
      </Container>
    </Row>
  )
}

export default Header
