import React from 'react';
import { Music, SkipBack, Play, SkipForward, Send } from 'lucide-react';

export default function SalonPage() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-700 to-blue-900 text-white">
      <header className="flex justify-between items-center p-4 bg-gray-800">
        <div className="flex items-center">
          <Music size={24} className="text-orange-500 mr-2" />
          <h1 className="text-xl font-bold">Pop Hits Salon</h1>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 rounded px-4 py-2">
          Leave
        </button>
      </header>

      <main className="flex-grow flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-3/4 p-4 flex flex-col">
          <div className="flex-grow bg-black rounded-lg mb-4">
            <img src="/api/placeholder/640/360" alt="Video placeholder" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white"><SkipBack size={24} /></button>
              <button className="bg-orange-500 rounded-full p-2 hover:bg-orange-600"><Play size={24} /></button>
              <button className="text-gray-400 hover:text-white"><SkipForward size={24} /></button>
            </div>
            <div className="text-sm">
              Currently Playing: "Song Title" by Artist
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4 bg-gray-800 p-4 flex flex-col">
          <div className="flex-grow overflow-y-auto mb-4">
            {/* Chat messages would go here */}
            <div className="bg-gray-700 rounded p-2 mb-2">
              <p className="font-bold">User1:</p>
              <p>Great song choice!</p>
            </div>
            <div className="bg-gray-700 rounded p-2 mb-2">
              <p className="font-bold">User2:</p>
              <p>Thanks! What should we play next?</p>
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow bg-gray-700 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 rounded-r px-4 py-2">
              <Send size={20} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
