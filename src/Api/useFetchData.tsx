import {  useEffect, useState } from "react";
import { FurnitureBase } from "./Furniture";

const useFetchData = (Target: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const DataFetching = async () => {
      try {
        const fetch = await FurnitureBase.get(Target);
        setData(fetch.data);
        setError(null);
      } catch (error) {
        setError("Error in Fetching");
      } finally {
        setLoading(false);
      }
    };

    DataFetching();
  }, [Target]);

  return { data, loading, error };
};
export default useFetchData;
