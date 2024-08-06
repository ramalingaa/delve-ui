// src/components/profile/ProfileCard.tsx

import React from 'react';
import { UserCard } from '../../types';
import profileCardImage from "../../assets/profile-koushik.png"

interface ProfileCardProps {
  user: UserCard;
  onStatusChange: (userId: string, status: keyof UserCard['status']) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, onStatusChange }) => {
  return (
    <div className="relative bg-gray-800 rounded-xl shadow-lg border border-blue-500">
      <div className="flex items-center px-6 py-3">
        <img
          src={profileCardImage}
          alt={`${user.name}'s avatar`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-2xl font-semibold text-white">{user.name}</h3>
          <p className="text-lg text-gray-400">{user.title}</p>
        </div>
      </div>
      <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
        <svg width="24" height="9" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.6875 2.5C7.6875 3.4375 6.91406 4.1875 6 4.1875C5.0625 4.1875 4.3125 3.4375 4.3125 2.5C4.3125 1.58594 5.0625 0.8125 6 0.8125C6.91406 0.8125 7.6875 1.58594 7.6875 2.5ZM10.125 0.8125C11.0391 0.8125 11.8125 1.58594 11.8125 2.5C11.8125 3.4375 11.0391 4.1875 10.125 4.1875C9.1875 4.1875 8.4375 3.4375 8.4375 2.5C8.4375 1.58594 9.1875 0.8125 10.125 0.8125ZM1.875 0.8125C2.78906 0.8125 3.5625 1.58594 3.5625 2.5C3.5625 3.4375 2.78906 4.1875 1.875 4.1875C0.9375 4.1875 0.1875 3.4375 0.1875 2.5C0.1875 1.58594 0.9375 0.8125 1.875 0.8125Z" fill="#7C859D" />
        </svg>

      </button>
      <div className="h-[1px] bg-[#374053]"></div>
      <div className="flex flex-wrap gap-4 p-3">
        {Object.entries(user.status).map(([key, value]) => (
          <button
            key={key}
            className="flex items-center justify-start py-3 px-4 rounded-lg text-white transition border border-[#374053] flex-grow"
            onClick={() => onStatusChange(user.id, key as keyof UserCard['status'])}
          >
            <span className={`flex-shrink-0 w-5 h-5 mr-2 rounded-full border-2 flex items-center justify-center
            ${value ? 'bg-blue-500' : 'border-blue-400'}`}>
              {value && <span className="text-white text-xs">✓</span>}
            </span>
            <span className="whitespace-nowrap">
              {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;