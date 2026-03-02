"use client";

import { useEffect, useState } from "react";
import CountryCard from "@/components/CountryCard";

export type Country = {
  cca3: string;
  name: {
    common: string;
    official?: string;
  };
  flags: {
    png: string;
    alt?: string;
  };
};

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,cca3"
      );
      const data = await res.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1>Explorador de Países</h1>

      <input
        type="text"
        placeholder="Buscar país..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginTop: "20px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {filtered.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}