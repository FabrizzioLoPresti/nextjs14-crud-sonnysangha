import { createProductAction } from '@/actions/create-product-action';
import SubmitButton from './submit-button';

type Props = {};

const ProductForm = (props: Props) => {
  return (
    <form action={createProductAction} className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Notebook HP Pavilion"
          className="p-2 bg-slate-600"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          rows={4}
          placeholder="Notebook with 4GB RAM, 1TB SSD..."
          className="p-2 bg-slate-600"
        ></textarea>
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="1000"
          className="p-2 bg-slate-600"
        />
      </div>

      <SubmitButton />
    </form>
  );
};

export default ProductForm;
