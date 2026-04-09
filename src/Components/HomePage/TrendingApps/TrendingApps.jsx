import AppCard from "../../UI/AppCard/AppCard";
import { HashLoader } from "react-spinners";
import { Link } from "react-router";
import useAppData from "../../../Hooks/useAppData";

const TrendingApps = () => {
  const { appsData, loading } = useAppData();

  return (
    <div className="bg-[#00000008] py-20">
      <div className="max-w-360 mx-auto">
        <div className="text-center">
          <h2 className="text-[#001931] font-bold text-5xl">Trending Apps</h2>
          <p className="text-xl text-[#627382] mt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div>
          {loading ? (
            <div className="flex justify-center items-center py-15">
              <HashLoader color="#9F62F2"></HashLoader>
            </div>
          ) : (
            <div className="py-10 grid grid-cols-4 gap-4">
              {appsData.slice(0, 8).map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
          )}
        </div>

        <div className="text-center">
          <Link to={"/Apps"}>
            <button className="btn font-semibold bg-linear-to-b from-[#632EE3] to-[#9F62F2]  text-white">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
