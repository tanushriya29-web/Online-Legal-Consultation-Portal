import { useState } from "react";
import lawyers from "../data/lawyers";
import LawyerCard from "./LawyerCard";
import SearchFilter from "./SearchFilter";

function LawyerList() {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");
  const [location, setLocation] = useState("All");
  const [feeRange, setFeeRange] = useState("All");

  const filteredLawyers = lawyers.filter((lawyer) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      lawyer.name.toLowerCase().includes(searchText) ||
      lawyer.specialization.toLowerCase().includes(searchText);

    const matchesSpecialization =
      specialization === "All" ||
      lawyer.specialization === specialization;

    const matchesLocation =
      location === "All" ||
      lawyer.location === location;

    const matchesFee =
      feeRange === "All" ||
      (feeRange === "below1000" && lawyer.fee < 1000) ||
      (feeRange === "1000to2000" &&
        lawyer.fee >= 1000 &&
        lawyer.fee <= 2000) ||
      (feeRange === "above2000" && lawyer.fee > 2000);

    return (
      matchesSearch &&
      matchesSpecialization &&
      matchesLocation &&
      matchesFee
    );
  });

  return (
    <section className="lawyers-section" id="lawyers">
      <div className="section-heading">
        <h2>Find a Legal Professional</h2>
        <p>
          Browse legal professionals and find the right expert
          for your needs.
        </p>
      </div>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        specialization={specialization}
        setSpecialization={setSpecialization}
        location={location}
        setLocation={setLocation}
        feeRange={feeRange}
        setFeeRange={setFeeRange}
      />

      <div className="lawyers-grid">
        {filteredLawyers.map((lawyer) => (
          <LawyerCard
            key={lawyer.id}
            lawyer={lawyer}
          />
        ))}
      </div>

      {filteredLawyers.length === 0 && (
        <p className="no-results">
          No legal professionals found.
        </p>
      )}
    </section>
  );
}

export default LawyerList;