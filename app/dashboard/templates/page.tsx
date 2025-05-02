'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TemplatesPage() {
  // Placeholder data
  const [templates, setTemplates] = useState([
    { id: 't1', name: 'Welcome Email', subject: 'Welcome to Our Service!' },
    { id: 't2', name: 'Follow-up 1', subject: 'Checking In' },
    { id: 't3', name: 'Re-engagement Offer', subject: 'A Special Offer Just For You' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Templates</h1>
        <Link href="/dashboard/templates/new" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Create Template
        </Link>
      </div>
      
      <div className="mt-6">
        {templates.length === 0 ? (
          <div className="text-center py-12 bg-white shadow rounded-lg">
            <p className="text-gray-500">No templates yet. Create your first template.</p>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {templates.map((template) => (
                <li key={template.id}>
                  <Link href={`/dashboard/templates/${template.id}`} className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">{template.name}</p>
                        {/* Add more details or actions here */}
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            Subject: {template.subject}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

