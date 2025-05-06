import { useEffect, useState } from "react";

export function useCustomQuery<T>(url: string, enabled: boolean = true) {
  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (!enabled) return;

    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(undefined);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("네트워크 응답 없음");
        const json = await response.json();
        if (isMounted) {
          setData(json);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("Unknown error"));
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url, enabled]);

  return { data, isLoading, error };
}
