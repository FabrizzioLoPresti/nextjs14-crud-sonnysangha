import SearchResults from '@/components/search-results';
import { Suspense } from 'react';

type Props = {
  searchParams: {
    q: string;
  };
};

export default async function SearchPage({ searchParams: { q } }: Props) {
  const key = JSON.stringify(q);

  return (
    <section className="mx-auto max-w-7xl">
      <h3 className="font-bold text-3xl">Search Page</h3>
      <ol className="mt-4">
        <Suspense
          fallback={<div className="text-white">Loading Results...</div>}
          key={key}
        >
          <SearchResults query={q} />
        </Suspense>
      </ol>
    </section>
  );
}
