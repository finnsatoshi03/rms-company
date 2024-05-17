export default function Navbar() {
  return (
    <nav
      className="relative z-50 flex items-center justify-between"
      id="landing"
    >
      <div>
        <a href="#landing">
          <img className="w-20" src="/assets/RMS-Logo.png" alt="Brand Logo" />
        </a>
      </div>
      <ul className="hidden items-center gap-8 md:flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#partners">Our Partners</a>
        </li>
        <li>
          <a href="#map">Locations</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
