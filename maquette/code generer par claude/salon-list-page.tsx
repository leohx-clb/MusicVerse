import React from 'react';
import { Music, Search, Plus } from 'lucide-react';

export default function SalonListPage() {
  const salons = [
    { id: 1, name: "Pop Hits", members: 156 },
    { id: 2, name: "Rock Classics", members: 89 },
    { id: 3, name: "Jazz Lounge", members: 42 },
    { id: 4, name: "Electronic Beats", members: 118 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 text-white p-4">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Music size={32} className="text-orange-500 mr-2" />
          <h1 className="text-2xl font-bold">MusicApp</h1>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 rounded-full p-2">
          <Plus size={24} />
        </button>
      </header>

      <div className="relative mb-6">
        <Search className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search salons"
          className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="grid gap-4">
        {salons.map(salon => (
          <div key={salon.id} className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{salon.name}</h2>
              <p className="text-gray-400">{salon.members} members</p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
