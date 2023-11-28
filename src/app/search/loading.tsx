type Props = {};

// Solo funciona en la Asincronia de Pages sin SearchParams, para Pages con SearchParams utilizar Suspense con key que lo identifique y dentro el componente que realiza la consulta Async
export default function LoadingPage({}: Props) {
  return <div>Loading...</div>;
}
