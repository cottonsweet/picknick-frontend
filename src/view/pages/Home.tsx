import { useState } from "react";
import { HomeWrap } from "../pages/HomeCSS";

// Components
import Splash from "../components/Splash";
import MapLocation from "../components/MapLocation";

// Layouts
import NavBar from "../layouts/NavBarLayout";
import SearchLayout from "../layouts/SearchLayout";

const Home = () => {
  const [splash, setSplash] = useState<boolean>(true);

  setTimeout(() => {
    setSplash(false);
  }, 2000);

  if (splash) return <Splash />;

  return (
    <HomeWrap>
      <SearchLayout />
      <MapLocation />
      <NavBar />
    </HomeWrap>
  );
};

export default Home;
