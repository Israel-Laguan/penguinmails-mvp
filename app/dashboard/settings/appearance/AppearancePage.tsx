
'use client';

import { useState } from 'react';

export default function AppearanceSettingsPage() {
  // Placeholder state, would ideally load from UserPreference
  const [theme, setTheme] = useState('LIGHT');
  const [layoutDensity, setLayoutDensity] = useState('NORMAL');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaveMessage('Appearance settings saved');
    }, 1000);
    
    // In a real implementation, you would call your API:
    // try {
    //   const response = await fetch('/api/user/preferences', {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ theme, layoutDensity }),
    //   });
    //   if (response.ok) {
    //     setSaveMessage('Appearance settings saved');
    //   } else {
    //     setSaveMessage('Failed to save settings');
    //   }
    // } catch (error) {
    //   setSaveMessage('An error occurred');
    // } finally {
    //   setIsSaving(false);
    // }
  };

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Appearance</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Customize the look and feel of the application.</p>
        </div>
        
        {saveMessage && (
          <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md">
            {saveMessage}
          </div>
        )}

        <div className="mt-5 space-y-6">
          {/* Theme Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Theme</label>
            <fieldset className="mt-2">
              <legend className="sr-only">Theme selection</legend>
              <div className="space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                {['LIGHT', 'DARK', 'CONTRAST'].map((themeOption) => (
                  <div key={themeOption} className="flex items-center">
                    <input
                      id={`theme-${themeOption.toLowerCase()}`}
                      name="theme"
                      type="radio"
                      value={themeOption}
                      checked={theme === themeOption}
                      onChange={(e) => setTheme(e.target.value)}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor={`theme-${themeOption.toLowerCase()}`} className="ml-3 block text-sm font-medium text-gray-700">
                      {themeOption.charAt(0) + themeOption.slice(1).toLowerCase()}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Layout Density Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Layout Density</label>
            <fieldset className="mt-2">
              <legend className="sr-only">Layout density selection</legend>
              <div className="space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                {['COMPACT', 'NORMAL', 'WIDE'].map((densityOption) => (
                  <div key={densityOption} className="flex items-center">
                    <input
                      id={`density-${densityOption.toLowerCase()}`}
                      name="layoutDensity"
                      type="radio"
                      value={densityOption}
                      checked={layoutDensity === densityOption}
                      onChange={(e) => setLayoutDensity(e.target.value)}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor={`density-${densityOption.toLowerCase()}`} className="ml-3 block text-sm font-medium text-gray-700">
                      {densityOption.charAt(0) + densityOption.slice(1).toLowerCase()}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
            >
              {isSaving ? 'Saving...' : 'Save Appearance'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

