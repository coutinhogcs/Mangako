export interface Manga {
  id: number | string; // O ID pode ser número ou texto
  title: string;
  description: string;
  urlImage?: string; // O '?' torna a propriedade 'autor' opcional
  author?: string;
  gender?: string;
}