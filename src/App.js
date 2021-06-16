import { useSelector } from 'react-redux';
import classNames from 'classnames';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function App() {

  const { dark } = useSelector((state) => state.darkTheme);

  return (
    <div className={classNames('theme', dark ? 'theme--dark' : 'theme--default')}>
      {/* className={'theme ' + (dark ? 'theme--dark' : 'theme--default') */}
      <div className="app">
        <Header />

        <Row className="mt-5">
          <Col md={6}>
            <Search />  
          </Col>
          <Col>
            <Filter/>
          </Col>
        </Row>
      </div>
      
    </div>
  );
}

export default App;
