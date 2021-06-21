import { useState } from 'react';

const Filter = () => {
  const [region, setRegion] = useState("");

  const handleChange = (e) => {
    setRegion(e.target.value);
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
