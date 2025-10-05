"use client"; 
import { useState } from "react";
export default function Header() {
      const [location, setLocation] = useState("Nearby");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const[isOpen,setIsOpen]=useState(false);
  return (
   <header className="bg-white shadow-md mt-0">
     <div className="max-w-screen-xl mx-auto px-2 py-2 flex justify-between items-center">
      <img src="/assets/airnbn.png" alt="" className=" w-[30px], h-[30px]"/>

    <div className="text-2xl font-bold text-red-600">airbnb</div>
   <div className="flex items-center bg-white shadow-lg rounded-full p-2 space-x-2 max-w-15xl mx-auto mt-28  justify-center">
      
      {/* Location */}
      <div className="flex-1 px-4 py-2 rounded-full hover:shadow-md cursor-pointer">
        <label className="text-xs text-gray-500">Where</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Destination"
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Check-in */}
      <div className="flex-1 px-4 py-2 rounded-full hover:shadow-md cursor-pointer">
        <label className="text-xs text-gray-500">Check in</label>
        <input
          type="date"
                    placeholder="Add Date"

          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Check-out */}
      <div className="flex-1 px-4 py-2 rounded-full hover:shadow-md cursor-pointer">
        <label className="text-xs text-gray-500">Check out</label>
        <input
          type="date"
                              placeholder="Add Date"

          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Guests + Search Button */}
      <div className="flex items-center px-4 py-2 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-600">
        <button className="bg-white text-red-500 rounded-full p-2 hover:bg-gray-200">
          🔍
        </button>
      </div>
    </div>
   
         
    <nav className="flex space-x-8 items-center-safe justify-center">
        
                <img src="/assets/homeimage.png" alt="" className=" w-[30px], h-[30px]"/>

        <a href="" className="text-gray-600 hover:text-gray-800">Home</a>
                <img src="/assets/parachuteimage.jpeg" alt="" className=" w-[40px], h-[40px]"/>

                <a href="" className="text-gray-600 hover:text-gray-800">Experience</a>
                        <img src="/assets/bell.jpeg" alt="" className=" w-[40px], h-[40px]"/>

        <a href="" className="text-gray-600 hover:text-gray-800">Online Experience</a>

    </nav>
    <button className="md:hidden text-gray-600" onClick={()=>setIsOpen(!isOpen)}>
         {isOpen ? 'Close' : 'Menu'}
    </button>
      <div className="flex items-center gap-4 ml-60">
        <div className="cursor-pointer">Become a host</div>
        <div className="cursor-pointer">🌐</div>
        <div className="bg-gray-100 p-2 rounded-full cursor-pointer">☰👤</div>
      </div>
  </div>
  
   {isOpen && (
        <nav className="md:hidden bg-gray-100">
          <a href="#" className="block px-4 py-2 text-gray-700">Homes</a>
          <a href="#" className="block px-4 py-2 text-gray-700">Experiences</a>
          <a href="#" className="block px-4 py-2 text-gray-700">Online Experiences</a>
        </nav>
      )}
    

   </header>
 
  );
}
