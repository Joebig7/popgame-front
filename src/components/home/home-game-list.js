/* eslint-disable eqeqeq */
export default function HomeGameList({ gameList }) {
  return (
    <>
      {console.log("xxxx" + JSON.stringify(gameList))}

      <ul
        role="list"
        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
        {gameList.map((game) => (
          <li key={game.id} className="relative">
            <div className="aspect-w-12 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={game.cover_url}
                alt=""
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only"> {game.name_cn}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {game.name_cn}
            </p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">
              {getRecommendLevelDes(game.recommend_level)}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

function getRecommendLevelDes(level) {
  if (level == 1) {
    return "多半差评";
  } else if (level == 2) {
    return "整体一般";
  } else if (level == 3) {
    return "多半好评";
  } else if (level == 4) {
    return "好评如潮";
  } else if (level == 5) {
    return "特别好评";
  }
}
