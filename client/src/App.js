import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      console.log(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Card</h2>
      {data &&
        data.map((item) => (
          <Card
            key={item.id}
            Image={item.Image}
            name={item.name}
            price={item.price}
            rating={item.rating}
          />
        ))}
    </>
  );
};

export default App;
