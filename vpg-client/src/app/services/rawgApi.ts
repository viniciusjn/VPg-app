const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

export const fetchGames = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar os jogos");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro na requisição da API:", error);
    return null;
  }
};
