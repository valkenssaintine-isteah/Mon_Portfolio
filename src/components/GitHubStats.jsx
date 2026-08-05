import React, { useState, useEffect } from "react";

// 1. Mete tout pseudo GitHub ekip la nan lis sa a
const teamUsernames = [
  "valkenssaintine-isteah", 
  "Fritzson-ISTEAH",       
  "Marie-AnneMancinie1",          
  "isteahppierrejules-tech"       
];

function UserCard({ username }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <p className="text-blue-600 text-lg font-semibold">
          Chargement de @{username}...
        </p>
      </div>
    );
  }

  if (!userData || userData.message) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <p className="text-red-500 font-semibold">
          Impossible de charger @{username}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 text-center hover:shadow-2xl transition duration-300 flex flex-col justify-between">
      <div>
        <img
          src={userData.avatar_url}
          alt={userData.login}
          className="w-28 h-28 rounded-full mx-auto border-4 border-blue-600 shadow-lg object-cover"
        />

        <h3 className="text-2xl font-bold mt-4 text-gray-900">
          {userData.name || userData.login}
        </h3>

        <p className="text-gray-500 mb-6">
          @{userData.login}
        </p>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <h4 className="text-xl font-bold text-blue-600">
              {userData.public_repos}
            </h4>
            <p className="text-xs text-gray-500">
              Repositories
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-blue-600">
              {userData.followers}
            </h4>
            <p className="text-xs text-gray-500">
              Followers
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-blue-600">
              {userData.following}
            </h4>
            <p className="text-xs text-gray-500">
              Following
            </p>
          </div>
        </div>
      </div>

      <a
        href={userData.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl transition font-medium"
      >
        Voir le Profil GitHub
      </a>
    </div>
  );
}

// Kompozan prensipal k ap pase sou tout manm yo
export default function GitHubStats() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Statistiques GitHub de l'Équipe
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamUsernames.map((username) => (
          <UserCard key={username} username={username} />
        ))}
      </div>
    </div>
  );
}