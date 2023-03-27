import axios from "axios";
import { useState } from "react";

const usePostQuery = (url) => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callPost = async () => {
    setLoading(true);
    await axios
      .get(url)
      .then((res) => {
        setResponseData(res.data?.data?.children);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return { responseData, loading, error, callPost };
};

export default usePostQuery;
