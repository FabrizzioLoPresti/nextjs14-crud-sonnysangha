import { IProduct } from '@/types/types';

type Props = {};

const fetchProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/products`, {
      cache: 'no-cache',
      next: {
        tags: ['products'],
      },
    });
    const data: IProduct[] = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const ProductList = async (props: Props) => {
  const products = await fetchProducts();

  return (
    <>
      {products?.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 rounded-lg p-4 space-y-4"
        >
          <h4 className="text-lg font-bold">{product.name}</h4>
          <p className="text-sm">{product.description}</p>
          <p className="text-sm font-bold">Price: ${product.price}</p>
        </div>
      ))}
    </>
  );
};

export default ProductList;
