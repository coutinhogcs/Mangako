import '../styles/home.css'
import { getMangas } from '../services/api';
import type { Manga } from '../types/manga';
import { useEffect, useState } from 'react';

// 2. Tipando os estados com a nossa interface
const HomePage: React.FC = () => {
    const [mangas, setMangas] = useState<Manga[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Função auto-executável para podermos usar async/await dentro do useEffect
        const carregarDados = async () => {
            try {
                setLoading(true);
                setError(null);
                // 3. Chamando a função do nosso serviço
                const dados = await getMangas();
                setMangas(dados);
            } catch (err) {
                setError('Não foi possível carregar os mangás. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        carregarDados();
    }, []); // Array vazio para executar apenas uma vez

    // Lógica de renderização (igual à anterior)
    if (loading) {
        return <div className="status-message">Carregando...</div>;
    }

    if (error) {
        return <div className="status-message error">{error}</div>;
    }

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
                        {mangas.map((manga) => (
                            <div key={manga.id} className="card">
                                <img src={manga.urlImage} alt={manga.title} className="card__image" />
                                <h2 className="card__title">{manga.title}</h2>
                                <a href={`/manga/${manga.id}`} className='card__button'>Ler agora</a>
                            </div>
                        ))}
                    </div>
                </section>


            </div>
        </>
    );
}
export default HomePage;