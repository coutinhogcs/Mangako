// Importamos o tipo que acabamos de criar
import type { Manga } from '../types/manga.ts';

// É uma boa prática colocar a URL base da API em uma variável
const API_URL = 'http://localhost:8080/manga';

export const getMangas = async (): Promise<Manga[]> => {
  try {
    const response = await fetch(API_URL);

    // Verifica se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Falha ao buscar os dados dos mangás.');
    }

    // Converte a resposta para JSON e já a "tipa" como um array de Manga
    const data: Manga[] = await response.json();
    return data;

  } catch (error) {
    // Loga o erro no console para debugging
    console.error("Erro no serviço da API:", error);
    // Lança o erro novamente para que quem chamou a função saiba que algo deu errado
    throw error;
  }
};