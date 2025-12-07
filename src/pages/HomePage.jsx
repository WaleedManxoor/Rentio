import { useEffect, useState } from "react";
import Properties from "../data/properties.json";
import HeroSection from "../components/HeroSection";
import FiltersBar from "../components/FiltersBar";
import PropertyCard from "../components/PropertyCard";
import useLocalStorage from "../hooks/useLocalStorage";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(100000);

  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFav = (property) => {
    if (!favorites.some((f) => f.id === property.id))
      setFavorites([...favorites, property]);
  };

  const filtered = Properties
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter(p => (city ? p.city === city : true))
    .filter(p => (type ? p.type === type : true))
    .filter(p => p.price <= price);

  return (
    <div className="p-6 space-y-4">
      <HeroSection />
      <FiltersBar
        search={search}
        setSearch={setSearch}
        city={city}
        setCity={setCity}
        type={type}
        setType={setType}
        price={price}
        setPrice={setPrice}
      />

      {/* Properties */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(p => (
          <PropertyCard 
            key={p.id} 
            property={p} 
            addToFav={addToFav} 
            favorites={favorites}
          />
        ))}
      </div>
    </div>
  );
}
