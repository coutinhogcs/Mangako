export function NavBar() {
    return (
        <>
            <header className="header__style">
                <div className="div__Logo"><img src="logo_Mangako.png" alt="logo" className="logo__image" /></div>

                <div className="menu__container">
                    <a href="/" className="navigation__button">Home</a>
                    <a href="/" className="navigation__button">Discord</a>
                    <a href="/" className="navigation__button">Github</a>
                    <a href="/" className="navigation__button">Mangá</a>
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