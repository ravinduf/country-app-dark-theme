import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import * as api from './api';
import { removeSearchTerm } from './actions/searchTerm';

import CountryGrid from './components/CountryGrid/CountryGrid';

function App() {

  const [countries, setCountries] = useState([]);
  const { dark } = useSelector((state) => state.darkTheme);
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    let api_url = process.env.REACT_APP_API_URL;

    const getData = async () => {
      if (searchTerm.isSearchTerm) {
        api_url = `${api_url}/${searchTerm.url}/${searchTerm.searchTerm}`;
      } else {
        api_url = `${api_url}/all`
      }

      try {
        const { data } = await api.getCountries(api_url);
        setCountries(data);
      } catch (error) {
        console.log(error.message);
      }
      dispatch(removeSearchTerm);
    }

    getData()

  }, [searchTerm, dispatch])


  const renderCountries = (
    <div>
      <Row className="mt-5 filter-search-row">
        <Col md={6}>
          <Search />
        </Col>
        <Col md={3}>
          <Filter />
        </Col>
      </Row>

      <CountryGrid countries={countries} />
    </div>
  );

  const singleCountry = (country) => (
    <div>
      {country.name}
    </div>
  )

  return (
    <div className={classNames('theme', dark ? 'theme--dark' : 'theme--default')}>
      {/* className={'theme ' + (dark ? 'theme--dark' : 'theme--default') */}
      <div className="app">
        <Header />
        {!selectedCountry.isSelected ? (renderCountries) : (singleCountry(selectedCountry.country))}
      </div>
    </div>
  );
}

export default App;
