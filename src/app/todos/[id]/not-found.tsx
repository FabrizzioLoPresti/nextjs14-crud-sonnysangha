import Link from 'next/link';

type Props = {};

export default function NotFoundPage({}: Props) {
  return (
    <section className="mx-auto max-w-7xl flex flex-col items-center justify-center gap-y-8">
      <h3 className="text-3xl font-bold">404 - Page Not Found</h3>
      <p className="text-2xl">
        Sorry, the page you requested could not be found.
      </p>
      <Link href="/">Go Home</Link>
    </section>
  );
}
