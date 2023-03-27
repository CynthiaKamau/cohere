import { useState, useEffect } from "react";

const usePostQuery = (url) => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("abantu", data)
        setError(data.error);
        setResponseData(data?.data?.children);
        setLoading(false);
      });
  }, [url]);
  return { responseData, loading, error };
};

export default usePostQuery;
