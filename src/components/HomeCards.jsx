'use client';

import { useState } from 'react';
import Link from 'next/link';
import { places } from '@/data/places'; // uses alias; if that errors use '../../data/places'

export default function HomeCards() {
  // local state to store liked IDs (simple approach)
  const [likedIds, setLikedIds] = useState([]);

  function toggleLike(id) {
    setLikedIds(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {places.map((place) => {
        const liked = likedIds.includes(place.id);
        return (
          <div
            key={place.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer"
          >
            {/* Link wraps image so clicking image goes to details */}
            <Link href={`/room/${place.id}`}>
              <img
                src={place.img}
                alt={place.title}
                className="w-full h-56 object-cover"
              />
            </Link>

            {/* Heart icon overlay -- appears on hover */}
            <button
              onClick={(e) => { e.stopPropagation(); e.preventDefault(); toggleLike(place.id); }}
              className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
              aria-label={liked ? "Unlike" : "Like"}
              title={liked ? "Unlike" : "Like"}
            >
              <span className={`text-lg ${liked ? 'text-red-500' : 'text-gray-600'}`}>
                {liked ? '❤️' : '🤍'}
              </span>
            </button>

            {/* Card body */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{place.title}</h3>
              <p className="text-gray-500">{place.location}</p>
              <p className="text-gray-800 font-medium mt-2">{place.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
