import { useDispatch } from 'react-redux'

import { setSearchTerm } from '../../actions/searchTerm';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm("region", e.target.value.toLowerCase()));
  }

  return (
    <div className="filter">
      <select onChange={handleChange}>
        <option readOnly hidden defaultValue>Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter
