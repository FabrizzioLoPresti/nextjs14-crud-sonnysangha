import Link from 'next/link';
import { type ITodo } from '@/types/types';

type Props = {};

const fetchTodos = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      cache: 'no-cache',
    });
    const todos: ITodo[] = await res.json();
    return todos;
  } catch (error) {
    console.error(error);
  }
};

const TodosList = async (props: Props) => {
  const todos = await fetchTodos();

  return (
    <>
      {todos?.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodosList;
