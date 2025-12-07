import { useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import gsap from "gsap";

export default function PropertyCard({ property, addToFav, favorites }) {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
  }, []);

  const isFav = favorites.some((f) => f.id === property.id);

  return (
    <div ref={cardRef} className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
      
      <img src={property.image} className="rounded-lg w-full h-40 object-cover" />

      <div className="mt-3 flex justify-between">
        <h2 className="font-semibold dark:text-white">{property.title}</h2>

        <FaHeart
          size={20}
          className={`cursor-pointer ${isFav ? "text-red-500" : "text-gray-400"}`}
          onClick={() => addToFav(property)}
        />
      </div>

      <p className="text-gray-600 dark:text-gray-300">
        {property.city} • {property.type}
      </p>

      <p className="font-bold mt-2 dark:text-white">Rs {property.price}</p>
    </div>
  );
}
