import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies, loading, error } = useFetch(apiPath);
  useTitle(title);

  // Handle loading and error states
  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  // Ensure movies is an array before calling .map()
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
