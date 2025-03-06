import Image from "next/image";

interface RankingRowProps {
  index: number;
  name: string;
  rating: number;
  backgroundImage: string;
}

const RankingRow = ({ index, name, rating, backgroundImage }: RankingRowProps) => {
  return (
    <tr className="border border-gray-700 hover:bg-purple-900 transition duration-300">
      <td className="p-4 text-center font-semibold text-gray-300">{index + 1}</td>
      <td className="p-4 font-medium text-gray-200">{name}</td>
      <td className="p-4 flex justify-center">
        <Image
          src={backgroundImage}
          alt={name}
          width={60}
          height={40}
          className="rounded-lg shadow-md"
        />
      </td>
      <td className="p-4 text-center font-bold text-purple-400">{rating.toFixed(1)}</td>
    </tr>
  );
};

export default RankingRow;
