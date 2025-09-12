import { Link } from "react-router-dom";
import '../styles/navbar.css';
export function NavBar() {
    return (
        <>
            <header className="header__style">
                <div className="div__Logo"><img src="logo_Mangako.png" alt="logo" className="logo__image" /></div>

                <div className="menu__container">
                    <nav className="links__nav">
                        <Link to={"/"} className="navigation__button">Home</Link>
                        <Link to={'/manga'}  className="navigation__button">Mangás</Link>
                        <Link to={'/about'} className="navigation__button">Sobre</Link>
                        <Link to={'/contato'} className="navigation__button">Contato</Link>
                        <Link to={'/discord'} className="navigation__button">Discord</Link>
                    </nav>
                    <div className="search__container">
                    <input type="text" placeholder="Pesquisar..." className="input__search" />
                    <span className="search__icon">
                        {/* Ícone SVG de lupa */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <circle cx="11" cy="11" r="8" stroke="#fff" strokeWidth="2" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#fff" strokeWidth="2" />
                        </svg>
                    </span>
                </div>
                </div>
            </header>
        </>
    )
}