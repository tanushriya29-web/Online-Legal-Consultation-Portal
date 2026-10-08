function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-small">TRUSTED LEGAL CONSULTATION</p>

        <h1>
          Find the Right
          <span> Legal Professional</span>
        </h1>

        <p className="hero-description">
          Connect with experienced legal professionals and get the guidance
          you need for your legal concerns.
        </p>

        <div className="hero-buttons">
          <a href="/lawyers" className="primary-button">
            Find a Lawyer
          </a>

          <a href="/consultation" className="secondary-button">
            Get Consultation
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="balance-icon">⚖️</div>

        <h3>Expert Legal Guidance</h3>

        <p>Connect with qualified professionals you can trust.</p>
      </div>
    </section>
  );
}

export default Hero;