import React, { useEffect, useState } from "react";

const useAppData = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApps = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      // console.log(data);

      setTimeout(() => {
        setAppsData(data);
        setLoading(false);
      }, 1000);
      // console.log(loading, "loading");
    };
    fetchApps();
  }, []);

  return { appsData, loading };
};

export default useAppData;
