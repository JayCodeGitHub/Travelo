"use client";
import { useState, useEffect } from "react";

export default function List() {
  const [data, setData] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api");
      const newData = await response.json();
      setData(newData[0].name);
      console.log(newData[0].name);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section>
      <h1>List</h1>
      {data ? <span>{data}</span> : <p>Loading ...</p>}
    </section>
  );
}
