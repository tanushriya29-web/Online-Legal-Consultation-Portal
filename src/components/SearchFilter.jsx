function SearchFilter({
  search,
  setSearch,
  specialization,
  setSpecialization,
  location,
  setLocation,
  feeRange,
  setFeeRange
}) {
  return (
    <div className="search-filters">

      <input
        type="text"
        placeholder="Search by lawyer name or specialization..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      >
        <option value="All">All Specializations</option>
        <option value="Corporate Law">Corporate Law</option>
        <option value="Criminal Law">Criminal Law</option>
        <option value="Family Law">Family Law</option>
        <option value="Property Law">Property Law</option>
        <option value="Cyber Law">Cyber Law</option>
        <option value="Employment Law">Employment Law</option>
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="All">All Locations</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
      </select>

      <select
        value={feeRange}
        onChange={(e) => setFeeRange(e.target.value)}
      >
        <option value="All">All Fees</option>
        <option value="below1000">Below ₹1000</option>
        <option value="1000to2000">₹1000 - ₹2000</option>
        <option value="above2000">Above ₹2000</option>
      </select>

    </div>
  );
}

export default SearchFilter;