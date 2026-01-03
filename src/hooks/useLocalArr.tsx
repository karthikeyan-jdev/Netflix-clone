import { useEffect, useState } from "react";

const useLocalArr = <T,>(localArr: () => Promise<T[]>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    localArr()
      .then((res: T[]) => {
        if (isMounted) setData(res);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [localArr]);

  return {
    data,
    loading,
  };
};

export default useLocalArr;
