import React, { useState, useEffect } from "react";

function DataFromServer() {
  const [data, setData] = useState(null);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "1rem" }}>
      <h4>Data </h4>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              {item.id} {item.title}
            </div>
          );
        })}
    </div>
  );
}

export default DataFromServer;
