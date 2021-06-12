import { ReactComponent as SearchSvg } from '../../assets/images/search.svg';

import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'

const Search = () => {
  return (
    <div className="search">
      <SearchSvg/>
      <Form.Control type="text" placeholder="Search for a country"/>
    </div>
  )
}

export default Search
