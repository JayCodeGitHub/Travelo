"use client";
import { useState, useEffect } from "react";

export default function List() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  return (
    <section>
      <h1>List</h1>
    </section>
  );
}
