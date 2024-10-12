import React, { useEffect, useState } from "react";

const Fetch_data = () => {
  const [api_data, setapi_data] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await api.json();
      console.log(data);
      setapi_data(data);
    };
    fetchDataFromAPI();
  }, []);

  return (
    <div>
      <h1>Fetching Data from API</h1>
      {api_data.map((data) => (
        <div 
        key={data.id}
        >
          <p>{data.userId}</p>
          <p>{data.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch_data;
