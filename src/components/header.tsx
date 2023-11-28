import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="mx-auto max-w-7xl py-4 flex flex-row justify-between items-center">
      <Link href="/">Home</Link>

      <nav className="flex flex-row items-center gap-x-2">
        <Link href="/todos">Todos</Link>
        <Link href="/search">Search</Link>
        <Link href="/products">Products</Link>
      </nav>
    </header>
  );
};

export default Header;
