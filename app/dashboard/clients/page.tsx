
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ClientsPage() {
  // Placeholder data
  const [clients, setClients] = useState([
    { id: 'c1', email: 'john.doe@example.com', firstName: 'John', lastName: 'Doe' },
    { id: 'c2', email: 'jane.smith@example.com', firstName: 'Jane', lastName: 'Smith' },
    { id: 'c3', email: 'bob.johnson@example.com', firstName: 'Bob', lastName: 'Johnson' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Clients</h1>
        <Link href="/dashboard/clients/new" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Add Client
        </Link>
      </div>
      
      <div className="mt-6">
        {clients.length === 0 ? (
          <div className="text-center py-12 bg-white shadow rounded-lg">
            <p className="text-gray-500">No clients yet. Add your first client.</p>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {clients.map((client) => (
                <li key={client.id}>
                  {/* Make this a link to client detail page later */}
                  <div className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">
                          {client.firstName || client.lastName ? `${client.firstName || ''} ${client.lastName || ''}`.trim() : client.email}
                        </p>
                        {/* Add actions like Edit/Delete later */}
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            {client.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

