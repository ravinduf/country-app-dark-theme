import { useCallback } from 'react'
import { ReactComponent as SearchSvg } from '../../assets/images/search.svg';
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce';

import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'

import { setSearchTerm } from '../../actions/searchTerm'

const Search = () => {
  const dispatch = useDispatch();
  
  const debouncedHandleChange = useCallback(
    debounce((value) => dispatch(setSearchTerm("name",value)), 1000)
  );

  const handleChange = (e) => {
    // dispatch(setSearchTerm("name", e.target.value))
    debouncedHandleChange(e.target.value);
  }

  return (
    <div className="search">
      <SearchSvg/>
      <Form.Control 
        type="text" 
        placeholder="Search for a country"
        onChange={handleChange}
      />
    </div>
  )
}

export default Search
