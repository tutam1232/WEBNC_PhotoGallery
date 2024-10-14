import { useEffect, useState } from "react";
import axios from "axios";

// Function: wrapPromise
// Parameters: promise - a promise object
// Returns: throw promise if status is pending, throw result if status is error, return result if status is success -> so that Suspense, ErrorBoundary
// can catch the promise or error or return the result
const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspend = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  
  return () => {
    if (status === "pending") {
      throw suspend;
    } else if (status === "error") {
      throw result;
    } else if (status === "success") {
      return result;
    }
  };
};

const useFetchData = (url, method) => {
  const [data, setData] = useState(null);

  useEffect(() => {

    // Fetch to Unsplash API and use wrapPromise to handle promise, error, success
    const getData = async () => {
      const promise = axios({
        method: method,
        url: url,
      }).then((res) => res?.data);

      setData(wrapPromise(promise));
    };

    getData();
  }, [url, method]);
  
  return data;
};

export default useFetchData;