import React from 'react';
import { Music, User, Lock } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-center mb-8">
          <Music size={48} className="text-orange-500 mr-2" />
          <h1 className="text-3xl font-bold">MusicApp</h1>
        </div>
        <form className="space-y-6">
          <div className="relative">
            <User className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
