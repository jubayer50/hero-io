import React, { useEffect, useState } from "react";
import AppCard from "../../UI/AppCard/AppCard";

const TrendingApps = () => {
  const [appsData, setAppsData] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      // console.log(data);
      setAppsData(data);
    };
    fetchApps();
  }, []);

  // console.log(appsData, "from appsData state");

  return (
    <div className="bg-[#00000006] py-20">
      <div className="max-w-360 mx-auto">
        <div className="text-center">
          <h2 className="text-[#001931] font-bold text-5xl">Trending Apps</h2>
          <p className="text-xl text-[#627382] mt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="py-10 grid grid-cols-3 gap-5">
          {appsData.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="btn font-semibold bg-linear-to-b from-[#632EE3] to-[#9F62F2]  text-white">
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
