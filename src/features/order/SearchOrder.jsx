import { useState } from "react";
import { useNavigate } from "react-router";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order No."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus: placeholder: rounded-full px-4 py-2 text-sm ring-yellow-500 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
