import { top10List } from "../data/TrendingMovies";

const TrendingMovies = () => {
  return (
    <div className="p-12 px-4 md:px-8 ">
      <h1 className="p-2 font-bold text-2xl text-white">Trending Now</h1>

      <ul className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-2 ">
        {top10List.map((item) => (
          <li
            key={item.id}
            className="relative min-w-25 sm:min-w-42 md:min-w-48  
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
