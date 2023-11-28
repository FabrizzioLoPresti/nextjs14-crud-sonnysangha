'use client';

import { useFormStatus } from 'react-dom';

type Props = {};

const SubmitButton = (props: Props) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-slate-600 py-2 hover:bg-slate-800 transition ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? 'Creating Product' : 'Create Product'}
    </button>
  );
};

export default SubmitButton;
