import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <img src="/asset/img/logoLV.png" alt="" />
          <span></span>
        </div>
      </div>
      <div className="right">
        <div className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Servizi</a>
            </li>
            <li>
              <a href="#about">Chi Sono</a>
            </li>
            <li>
              <a href="#contact">Contattami</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
