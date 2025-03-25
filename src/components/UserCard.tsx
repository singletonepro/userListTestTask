"use client";

import type { User } from "@/types/user";

export default function UserCard({ user }: { user: User }) {
  const statusColor =
    user.status === "active" ? "bg-green-500" : "bg-yellow-500";

  return (
    <li className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-6 mb-4">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            className="w-16 h-16 rounded-full border-2 border-gray-200"
          />
          <span
            className={`absolute bottom-0 right-0 w-4 h-4 ${statusColor} border-2 border-white rounded-full`}
            title={`Status: ${user.status}`}
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              {user.name}
            </h2>
            <button
              onClick={() => (window.location.href = `mailto:${user.email}`)}
              className="text-gray-400 hover:text-blue-500 transition-colors"
              title="Send email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>

          <p className="text-sm font-medium text-blue-600 mt-1">{user.role}</p>
          <p className="text-gray-600 mt-2">{user.description}</p>
        </div>
      </div>
    </li>
  );
}
