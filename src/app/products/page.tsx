import { Suspense } from 'react';
import Link from 'next/link';
import ProductList from '@/components/product-list';

type Props = {};

export default function ProductsPage({}: Props) {
  return (
    <section className="mx-auto max-w-7xl">
      <h3 className="text-center font-bold text-3xl mb-4">
        Products Warehouse
      </h3>
      <Link
        href="/products/create"
        className="bg-slate-600 px-4 py-2 rounded-md my-4 inline-block"
      >
        Create Product
      </Link>
      <div className="grid grid-cols-3 gap-4">
        <Suspense fallback={<div>Loading Products...</div>}>
          <ProductList />
        </Suspense>
      </div>
    </section>
  );
}
