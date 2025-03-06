import { useEffect, useState } from "react";
import { fetchGames } from "../services/rawgApi";
import RankingRow from "./RankingRow";

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
    <div className="p-8 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-800 text-white border border-gray-700">
          <thead className="bg-purple-700 text-white uppercase">
            <tr>
              <th className="p-4 text-center">#</th>
              <th
                className="p-4 cursor-pointer hover:bg-purple-600 transition"
                onClick={() => handleSort("name")}
              >
                Nome {sortBy === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
              <th className="p-4 text-center">Banner</th>
              <th
                className="p-4 cursor-pointer hover:bg-purple-600 transition"
                onClick={() => handleSort("rating")}
              >
                Nota {sortBy === "rating" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedGames.map((game, index) => (
              <RankingRow
                key={game.id}
                index={index}
                name={game.name}
                rating={game.rating}
                backgroundImage={game.background_image}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingTable;
