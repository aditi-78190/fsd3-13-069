const Hello = () => {
  return <h2>Welcome to React 19</h2>;
};

function Book() {
  return (
    <>
      <h1 className="text-blue-900 font-bold text-3xl">Let's React</h1>
      <h2>Price: 765</h2>
      <h3>Rating: 4.7</h3>
    </>
  );
}

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-blue-500 text-white p-4 text-center">
        Hello React 😃
      </h1>

      <Hello />
      <Book />
    </>
  );
}