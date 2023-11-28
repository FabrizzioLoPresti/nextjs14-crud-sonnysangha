import { notFound } from 'next/navigation';
import { ITodo } from '@/types/types';

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    test: string;
  };
};

const fetchTodo = async (id: string) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        cache: 'no-cache',
        // next: {
        //   revalidate: 0,
        // },
      },
    );
    const todo: ITodo = await res.json();
    return todo;
  } catch (error) {
    console.error(error);
  }
};

export default async function TodoPage({
  params: { id },
  searchParams: { test },
}: Props) {
  const todo = await fetchTodo(id);

  if (!todo?.id) return notFound();

  console.log(test);
  return (
    <section className="mx-auto max-w-7xl">
      <div className="p-10 bg-slate-600 border-2 m-2 shadow-lg">
        <p>
          #{todo?.id}: {todo?.title}
        </p>
        <p>Completed: {todo?.completed ? 'Yes' : 'No'}</p>
        <p className="border-t border-slate-400 mt-5 text-right pt-2">
          By User: {todo?.userId}
        </p>
      </div>
    </section>
  );
}

// export const generateStaticParams = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const todos: ITodo[] = await res.json();

//   return todos.map((todo) => ({
//     id: todo.id.toString(),
//   }));
// };
