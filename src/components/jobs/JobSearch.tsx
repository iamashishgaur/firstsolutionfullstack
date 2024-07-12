// components/SearchBar.tsx
import { ChangeEvent, FC, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const JobSearch: FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
    />
  );
};

export default JobSearch;
