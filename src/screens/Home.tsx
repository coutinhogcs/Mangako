import '../styles/home.css'
export default function HomePage() {
    return (
        <>
            <div className='main__container'>
                <section className="welcome__container">
                    <h1 className='title__home'>Sejam bem vindos ao mais novo site de mangás!</h1>
                </section>

                <section className='lancamento__container'>
                    <h1 className='lancamento__title'>
                      Lançamentos:
                    </h1>
                    <div className='card__container'>
                    <div className="card">aaaaa <p>aaaaaaaaa</p> <a href="/manga/solo-leveling" className='card__button'>Ler agora</a></div>
                    <div className="card">bbbbb <p>bbbbbbbbb</p> <a href="/manga/hxh" className='card__button'>Ler agora</a></div>
                    <div className="card">ccccc <p>ccccccccc</p> <a href="/manga/naruto" className='card__button'>Ler agora</a></div>
                    <div className="card">aaaaa <p>aaaaaaaaa</p> <a href="/manga/solo-leveling" className='card__button'>Ler agora</a></div>
                    <div className="card">bbbbb <p>bbbbbbbbb</p> <a href="/manga/hxh" className='card__button'>Ler agora</a></div>
                    <div className="card">ccccc <p>ccccccccc</p> <a href="/manga/naruto" className='card__button'>Ler agora</a></div>
                </div>
                </section>


            </div>
        </>
    );
}