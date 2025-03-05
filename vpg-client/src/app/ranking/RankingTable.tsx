import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchGames } from "../services/rawgApi";

interface Game {
  id: number;
  name: string;
  rating: number;
  background_image: string;
}

const RankingTable = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [sortBy, setSortBy] = useState<"name" | "rating">("rating");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchGames();
      if (data && data.results) {
        setGames(data.results);
      }
    };
    loadGames();
  }, []);

  const handleSort = (key: "name" | "rating") => {
    setSortBy(key);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedGames = [...games].sort((a, b) => {
    if (sortBy === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
    }
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Ranking de Jogos</h1>
      <table className="min-w-full bg-gray-800 text-white border border-gray-700">
        <thead>
          <tr>
            <th className="p-3 border border-gray-700">#</th>
            <th
              className="p-3 border border-gray-700 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Nome {sortBy === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th className="p-3 border border-gray-700">Banner</th>
            <th
              className="p-3 border border-gray-700 cursor-pointer"
              onClick={() => handleSort("rating")}
            >
              Nota {sortBy === "rating" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedGames.map((game, index) => (
            <tr key={game.id} className="border border-gray-700">
              <td className="p-3 text-center">{index + 1}</td>
              <td className="p-3">{game.name}</td>
              <td className="p-3 flex justify-center">
                <Image
                  src={game.background_image}
                  alt={game.name}
                  width={50}
                  height={30}
                  className="rounded"
                />
              </td>
              <td className="p-3 text-center">{game.rating.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;
