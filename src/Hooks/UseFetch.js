import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState("");
  let error;
  let load;

  const request = React.useCallback((url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json);
          setData(json);
      });
  }, []);

  return { data, error, load, request };
};

export default useFetch;
