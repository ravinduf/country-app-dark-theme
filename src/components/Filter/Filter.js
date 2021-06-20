const Filter = () => {
  return (
    <div className="filter">
      <select>
        <option readOnly hidden defaultValue>Filter by region</option>
        <option value="">Africa</option>
        <option value="">America</option>
        <option value="">Asia</option>
        <option value="">Europe</option>
        <option value="">Oceania</option>
      </select>
    </div>
  )
}

export default Filter
