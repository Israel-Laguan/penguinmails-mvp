'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import AvatarSelector from './AvatarSelector';

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    avatarUrl: '',
  });

  useEffect(() => {
    if (session?.user) {
      // Fetch user profile data
      const fetchUserProfile = async () => {
        try {
          const response = await fetch('/api/user/profile');
          if (response.ok) {
            const userData = await response.json();
            setFormData({
              firstName: userData.firstName || '',
              lastName: userData.lastName || '',
              email: userData.email || '',
              avatarUrl: userData.avatarUrl || '',
            });
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      };

      fetchUserProfile();
    }
  }, [session]);

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (url: string) => {
    setFormData((prev) => ({ ...prev, avatarUrl: url }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Update session with new user data
        await update({
          ...session,
          user: {
            ...session?.user,
            firstName: formData.firstName,
            lastName: formData.lastName,
            avatarUrl: formData.avatarUrl,
          },
        });

        setMessage({ type: 'success', text: 'Profile updated successfully!' });
      } else {
        const error = await response.json();
        setMessage({ type: 'error', text: error.message || 'Failed to update profile' });
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Profile Settings</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  disabled
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-50 text-gray-500 sm:text-sm"
                />
                <p className="mt-1 text-sm text-gray-500">Your email address cannot be changed.</p>
              </div>

              <div className="sm:col-span-2">
                <AvatarSelector 
                  currentAvatarUrl={formData.avatarUrl} 
                  onAvatarChange={handleAvatarChange} 
                />
              </div>
            </div>

            {message.text && (
              <div className={`mt-4 p-3 rounded ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {message.text}
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
