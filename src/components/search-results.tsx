import { type ISearchResult } from '@/types/types';

type Props = {
  query: string;
};

const searchTerm = async (query: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${query}&api_key=${process.env.NEXT_PUBLIC_SERP_API_KEY}`,
    {
      cache: 'no-cache',
    },
  );
  const data: ISearchResult = await res.json();
  return data;
};

const SearchResults = async ({ query }: Props) => {
  const searchResults = query ? await searchTerm(query) : null;
  return (
    <>
      {searchResults?.organic_results.map((result) => (
        <li key={result.position} className="list-decimal mb-4">
          <h4 className="text-xl font-bold">{result.title}</h4>
          <p>{result.snippet}</p>
        </li>
      ))}
    </>
  );
};

export default SearchResults;
