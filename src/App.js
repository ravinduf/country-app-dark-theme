import { useEffect } from 'react'

import { useSelector } from 'react-redux';
import classNames from 'classnames';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let api_url = process.env.REACT_APP_API_URL;

function App() {

  const { dark } = useSelector((state) => state.darkTheme);
  const searchTerm = useSelector((state) => state.searchTerm);

  useEffect(() => {
    if (searchTerm.isSearchTerm){
      api_url = `${api_url}/${searchTerm.url}/${searchTerm.searchTerm}`
    }

   console.log(api_url);
  }, [searchTerm])


  return (
    <div className={classNames('theme', dark ? 'theme--dark' : 'theme--default')}>
      {/* className={'theme ' + (dark ? 'theme--dark' : 'theme--default') */}
      <div className="app">
        <Header />

        <Row className="mt-5 filter-search-row">
          <Col md={6}>
            <Search />  
          </Col>
          <Col md={3}>
            <Filter/>
          </Col>
        </Row>
      </div>
      
    </div>
  );
}

export default App;
