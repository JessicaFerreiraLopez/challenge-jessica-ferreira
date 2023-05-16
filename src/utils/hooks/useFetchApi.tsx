import { useState } from "react";

function useFetchApi<K>(getInfo: () => Promise<K>) {
  const [data, setData] = useState<K>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>("");

  async function fetchData() {
    setIsLoading(true);
    setError("");
    try {
      const response: K = await getInfo();
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      error instanceof Error && setError(error.message ?? "");
    }
    setIsLoading(false);
  }

  return { data, isLoading, error, fetchData };
}

export default useFetchApi;
