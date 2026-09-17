import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/AgroSmart.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    // Se o usuario voltar para o desktop com o menu aberto, fecha o estado
    const desktop = window.matchMedia("(min-width: 1251px)");
    const onDesktop = (e) => {
      if (e.matches) closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [menuOpen]);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to={"/"} className="logo" onClick={closeMenu}>
            <img src={Logo} alt="AgroSmart" />
          </Link>

          <div
            id="navbar-collapse"
            className={menuOpen ? "navbar-collapse open" : "navbar-collapse"}
          >
            <ul id="navbar-menu">
              <li>
                <Link
                  className="navbar-items"
                  to={"/Rastreamento"}
                  onClick={closeMenu}
                >
                  Rastreamento
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-items"
                  to={"/Quem-somos"}
                  onClick={closeMenu}
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-items"
                  to={"/Fale-conosco"}
                  onClick={closeMenu}
                >
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-items"
                  to={"/Marketplace"}
                  onClick={closeMenu}
                >
                  Marketplace
                </Link>
              </li>
            </ul>

            <div className="header-actions">
              <button id="register-button">Criar conta</button>
              <button id="login-button">Entrar</button>
            </div>
          </div>

          <button
            type="button"
            id="navbar-toggle"
            className={menuOpen ? "open" : ""}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="navbar-collapse"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        <div
          className={menuOpen ? "navbar-backdrop open" : "navbar-backdrop"}
          onClick={closeMenu}
        ></div>
      </nav>
    </header>
  );
}

export default Navbar;
