'use client';

import { useState } from 'react';

export default function RoomDetailsClient({ room }) {
  const [liked, setLiked] = useState(false);         // local like toggle
  const [showBooking, setShowBooking] = useState(false);
  const [guests, setGuests] = useState(1);

  return (
    <div>
      {/* Title + location */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="md:w-1/2">
          {/* Main image */}
          <img src={room.images?.[0] || room.img} alt={room.title} className="w-full h-96 object-cover rounded-lg" />

          {/* Small gallery */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            {room.images?.slice(0, 6).map((src, i) => (
              <img key={i} src={src} className="w-full h-24 object-cover rounded" />
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold">{room.title}</h1>
          <p className="text-gray-500">{room.location}</p>

          <p className="mt-4 text-gray-700">{room.description}</p>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-2xl font-bold">{room.price}</div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLiked(!liked)}
                className={`p-2 rounded-full ${liked ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-700'}`}
                aria-pressed={liked}
              >
                {liked ? '❤️' : '🤍'}
              </button>

              <button
                onClick={() => setShowBooking(true)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Book
              </button>
            </div>
          </div>

          {/* Reviews preview */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Reviews</h2>
            {room.reviews?.map((r, idx) => (
              <div key={idx} className="border-t py-3">
                <div className="font-semibold">{r.user} <span className="text-sm text-gray-500">· {r.rating}⭐</span></div>
                <div className="text-sm text-gray-600">{r.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking modal */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold">Book {room.title}</h3>

            <label className="block mt-4 text-sm text-gray-700">Guests</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full border p-2 rounded mt-1"
            />

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setShowBooking(false)} className="px-4 py-2 border rounded">Cancel</button>
              <button
                onClick={() => {
                  // simple client-side confirmation — replace with real booking flow in production
                  alert(`Booking confirmed for ${guests} guest(s).`);
                  setShowBooking(false);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
