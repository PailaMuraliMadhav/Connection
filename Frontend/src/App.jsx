import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-white p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-6 drop-shadow">
          HAHAHAHAHAHAHHAHA
        </h1>

        <p className="text-gray-700 text-lg mb-4">
          Total Users: <span className="font-semibold">{users.length}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-red-600 mb-2">
                {user.name}
              </h2>
              <p className="text-gray-600">
                📧 <span className="font-medium">{user.email}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
