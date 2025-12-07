import useLocalStorage from "../hooks/useLocalStorage";
import PropertyCard from "../components/PropertyCard";

export default function FavoritesPage() {
  const [favorites] = useLocalStorage("favorites", []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold dark:text-white mb-4">Your Favorites</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {favorites.map((p) => (
          <PropertyCard property={p} key={p.id} favorites={favorites} />
        ))}
      </div>
    </div>
  );
}
