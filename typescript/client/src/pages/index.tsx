import { MovieCart } from '@/components/movie/MovieCart';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { IMovie } from '@/interfaces/movie';

export async function getStaticProps() {
  const response = await fetch(`http://localhost:7070/api/movies?limit=12`);
  const data = await response.json();
  return {
    props: { data },
  };
}

export default function Home({ data }: { data: IMovie[] }): JSX.Element {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [ordering, setOrdering] = useState<string>('');

  const placeHolder = 'https://via.placeholder.com/160x230';

  useEffect(() => {
    fetch(`http://localhost:7070/api/movies?limit=12&ordering=${ordering}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, [ordering]);

  return (
    <>
      <Head>
        <title>My client project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-100 min-h-screen">
        <div className="container mx-auto">
          <div className="bg-white">
            <select
              value={ordering}
              onChange={(e): void => {
                setOrdering(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
            >
              <option value="releasedAsc">Oldest</option>
              <option value="releasedDesc">Newest</option>
              <option value="imdbRatingDesc">Most popular</option>
              <option value="titleAsc">A-Z</option>
              <option value="titleDesc">Z-A</option>
            </select>

            <div className="p-4 grid grid-cols-6 gap-4">
              {movies.map((movie) => (
                <MovieCart movie={movie} key={movie._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
