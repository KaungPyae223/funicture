import { useEffect, useState } from "react";
import { FurnitureBase } from "./Furniture";

const useFetchData = (Target: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {

    const FetchData = async () => {
      try {
        const fetch = await FurnitureBase.get(Target);
        setData(fetch.data);
      } catch (error) {
        setError(`${error.message} in ${Target} Fetching. `);
      } finally {
        setLoading(false);
      }
    };

    FetchData();
  }, []);

  return { data, loading, error };
};
export default useFetchData;
