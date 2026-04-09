import React from "react";
import Banner from "../../Components/HomePage/Banner/Banner";
import Status from "../../Components/HomePage/Status/Status";
import TrendingApps from "../../Components/HomePage/TrendingApps/TrendingApps";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>

      <Status></Status>

      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Homepage;
