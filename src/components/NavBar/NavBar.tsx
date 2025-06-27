import "../../styles/NavBar.css";

const LINKS = ["STORE", "GALLERY", "CONTEST", "COMMUNITY", "EVERYWEAR", "APPS"];

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">CONNECT</div>
      <ul className="navbar__links">
        {LINKS.map((text) => (
          <li key={text}>
            <a href={`#${text.toLowerCase()}`}>{text}</a>
          </li>
        ))}
      </ul>
      <div className="navbar__actions">
        <button className="btn-outline">SIGN IN</button>
        <button className="btn-primary">SIGN UP</button>
      </div>
    </nav>
  );
}
