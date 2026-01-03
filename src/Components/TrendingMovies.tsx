import { getTopMovies } from "../data/TrendingMovies";
import useLocalArr from "../hooks/useLocalArr";
import Loading from "./Loading";

const TrendingMovies = () => {
  const { data, loading } = useLocalArr(getTopMovies);
  if (loading) return <Loading />;
  return (
    <div className="pt-12 contant-width ">
      <h1 className="headline">Trending Now</h1>
      <ul className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-2 ">
        {data.map((item) => (
          <li
            key={item.id}
            className="relative min-w-25 sm:min-w-30 md:min-w-48  
                   transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full py-2 rounded-xl object-cover"
            />
            <p className="text-gray-300 absolute top-20 lg:top-42 text-6xl lg:text-8xl shadow-xl ">
              {item.rank}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovies;
