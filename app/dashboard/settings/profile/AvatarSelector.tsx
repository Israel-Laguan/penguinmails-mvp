'use client';

import { useState } from 'react';
import Image from 'next/image';

// Default avatar options
const defaultAvatars = [
  { id: 'male1', src: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Kingston', alt: 'Male avatar 1' },
  { id: 'male2', src: '/avatars/male2.png', alt: 'Male avatar 2' },
  { id: 'female1', src: '/avatars/female1.png', alt: 'Female avatar 1' },
  { id: 'female2', src: '/avatars/female2.png', alt: 'Female avatar 2' },
  { id: 'diverse1', src: '/avatars/diverse1.png', alt: 'Diverse avatar 1' },
  { id: 'diverse2', src: '/avatars/diverse2.png', alt: 'Diverse avatar 2' },
  { id: 'cat', src: '/avatars/cat.png', alt: 'Cat avatar' },
  { id: 'dog', src: '/avatars/dog.png', alt: 'Dog avatar' },
  { id: 'fox', src: '/avatars/fox.png', alt: 'Fox avatar' },
  { id: 'robot', src: '/avatars/robot.png', alt: 'Robot avatar' },
];

interface AvatarSelectorProps {
  currentAvatarUrl?: string;
  onAvatarChange: (url: string) => void;
}

export default function AvatarSelector({ currentAvatarUrl, onAvatarChange }: AvatarSelectorProps) {
  const [customUrl, setCustomUrl] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleDefaultAvatarClick = (src: string) => {
    onAvatarChange(src);
    setShowCustomInput(false);
  };

  const handleCustomUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      onAvatarChange(customUrl);
    }
  };

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select an avatar
      </label>
      
      <div className="grid grid-cols-5 gap-4 mb-4">
        {defaultAvatars.map((avatar) => (
          <div 
            key={avatar.id}
            className={`relative cursor-pointer rounded-full overflow-hidden border-2 ${
              currentAvatarUrl === avatar.src ? 'border-blue-500' : 'border-transparent'
            } hover:border-blue-300 transition-all`}
            onClick={() => handleDefaultAvatarClick(avatar.src)}
          >
            <div className="w-16 h-16 relative">
              <Image 
                src={avatar.src} 
                alt={avatar.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button
          type="button"
          onClick={() => setShowCustomInput(!showCustomInput)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {showCustomInput ? 'Hide custom URL option' : 'Use custom avatar URL'}
        </button>
        
        {showCustomInput && (
          <form onSubmit={handleCustomUrlSubmit} className="mt-2 flex">
            <input
              type="text"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              placeholder="Enter avatar URL"
              className="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <button
              type="submit"
              className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Apply
            </button>
          </form>
        )}
      </div>

      {currentAvatarUrl && (
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Current avatar:</p>
          <div className="w-20 h-20 relative rounded-full overflow-hidden border border-gray-200">
            <Image 
              src={currentAvatarUrl} 
              alt="Current avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
