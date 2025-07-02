


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-teal-600 text-white">
      <Link to="/" className="text-2xl font-bold">Recipe Discovery</Link>
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search recipes..."
          className="px-2 py-1 rounded text-black"
        />
        <button type="submit" className="bg-white text-teal-600 px-3 py-1 rounded">
          Search
        </button>
      </form>
      <Link to="/favorites" className="ml-4">Favorites</Link>
    </nav>
  );
}