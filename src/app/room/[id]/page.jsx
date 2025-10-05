import RoomDetailsClient from '@/components/RoomDetailsClient';
import { places } from '@/data/places';
import Header from '@/components/Header';

export default async function RoomPage({ params }) {
  // await params (required by Next.js 14+)
  const { id } = await params;

  const room = places.find(p => String(p.id) === String(id));

  if (!room) return <div className="p-8 text-center">Room not found</div>;

  return (
     <>
      {/* ✅ Header appears on top of every room detail page */}
      <Header />

      {/* ✅ Main Room Details Section */}
      <main className="max-w-5xl mx-auto p-8">
        <RoomDetailsClient room={room} />
      </main>
    </>
  );
}
