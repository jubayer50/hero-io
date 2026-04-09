import React from "react";
import useAppData from "../../Hooks/useAppData";
import AppCard from "../../Components/UI/AppCard/AppCard";
import { HashLoader } from "react-spinners";

const Apps = () => {
  const { appsData, loading } = useAppData();

  return (
    <div className="bg-[#00000008] py-20">
      <div className="max-w-360 mx-auto space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="font-bold text-5xl">Our All Applications</h2>
          <p className="text-[#627382] text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="">
          <div className="flex justify-between items-center">
            <h3 className="text-[#001931] font-semibold text-2xl">
              ({appsData.length}) Apps Found
            </h3>

            <div>
              <input
                className="border border-gray-400 p-1.5 rounded-md"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          <div>
            {loading ? (
              <div className="flex justify-center items-center py-15">
                <HashLoader color="#9F62F2"></HashLoader>
              </div>
            ) : (
              <div className="py-10 grid grid-cols-4 gap-4">
                {appsData.map((app) => (
                  <AppCard key={app.id} app={app}></AppCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
<h2>All Apps</h2>;
