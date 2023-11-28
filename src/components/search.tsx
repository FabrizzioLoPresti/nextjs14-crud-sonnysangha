'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

type Props = {};

const Search = (props: Props) => {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setQuery('');
    if (query !== '') return router.push(`/search?q=${query}`);
    return router.push(`/search`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-black p-2"
        placeholder="Search..."
      />
      <button type="submit" className="bg-slate-600 px-4 py-2 rounded-md ml-4">
        Search
      </button>
    </form>
  );
};

export default Search;
