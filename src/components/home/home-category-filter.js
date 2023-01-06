import { useState, useEffect } from "react";
import HomeGameList from "./home-game-list";
import axios from "axios";
import { POPIDEA_URL } from "../common/url-manage";

export default function HomeCategoryFilter() {
  const [gameList, setGameList] = useState([]);

  const [queryParam, setQueryParam] = useState({
    page_num: 1,
    page_size: 20,
    name: null,
  });

  useEffect(() => {
    axios
      .post(POPIDEA_URL + "/v1/games/search", {
        page_num: queryParam.page_num,
        page_size: queryParam.page_size,
        name: queryParam.name
      })
      .then(function (response) {
        if (response.status === 200 && response.data.code === 200) {
          console.log(JSON.stringify(response.data.data.list))
          setGameList(response.data.data.list);
        } else {
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, [queryParam]);

  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              游戏库
            </h1>
            <p className="mt-4 text-base text-gray-500">
              在下方寻找你感兴趣的游戏，了解更多资讯吧！
            </p>
          </div>

          <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            {/* Product grid */}
            <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-4">
              <HomeGameList gameList={gameList} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
