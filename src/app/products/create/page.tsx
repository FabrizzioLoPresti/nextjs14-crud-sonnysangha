import ProductForm from '@/components/product-form';

type Props = {};

export default function CreateProductPage({}: Props) {
  return (
    <section className="mx-auto max-w-7xl min-h-screen h-full flex flex-col items-center gap-y-4">
      <h3 className="font-bold text-3xl">Create New Product</h3>
      <ProductForm />
    </section>
  );
}
