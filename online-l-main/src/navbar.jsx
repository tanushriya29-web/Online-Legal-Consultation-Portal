function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LegalConnect</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#practice">Practice Areas</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="/lawyers" className="nav-button">
        Find a Lawyer
      </a>
    </nav>
  );
}

export default Navbar;