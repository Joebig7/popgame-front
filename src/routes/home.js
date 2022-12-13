import HomeNavbar from "../components/home/home-navbar";
import HomeBanner from "../components/home/home-banner";
import HomeCategoryFilter from "../components/home/home-category-filter";
import HomeGameList from "../components/home/home-game-list";
import HomeFooter from "../components/home/home-footer";

export default function Example() {
  return (
    <>
      <HomeNavbar />

      <HomeBanner />

      <div>
        <HomeCategoryFilter />
        <HomeGameList />
      </div>

      <HomeFooter />
    </>
  );
}
