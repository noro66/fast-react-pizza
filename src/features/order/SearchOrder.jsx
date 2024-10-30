import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function handelSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Search  order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="durantion-300 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all  placeholder:text-stone-400  focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
