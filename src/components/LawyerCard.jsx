function LawyerCard({ lawyer }) {
  return (
    <div className="lawyer-card">
      <img
        src={lawyer.image}
        alt={lawyer.name}
        className="lawyer-image"
      />

      <div className="lawyer-info">
        <h3>{lawyer.name}</h3>

        <p className="specialization">
          {lawyer.specialization}
        </p>

        <p>📍 {lawyer.location}</p>

        <p>{lawyer.experience} years experience</p>

        <p>⭐ {lawyer.rating}</p>

        <p className="lawyer-fee">
          ₹{lawyer.fee} consultation
        </p>

        <p className="lawyer-description">
          {lawyer.description}
        </p>

        <button className="view-profile-btn">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default LawyerCard;