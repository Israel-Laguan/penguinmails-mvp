
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BillingSettingsPage() {
  // Placeholder data - would fetch from API based on Company model
  const [planType, setPlanType] = useState('FREE'); // Example: 'FREE', 'STARTER', 'PRO'
  const [stripeCustomerId, setStripeCustomerId] = useState('cus_placeholder123'); // Example

  // Placeholder URL for Stripe Customer Portal or Checkout
  const stripePortalUrl = `https://billing.stripe.com/p/login/test_...`; // Replace with actual logic
  const stripeCheckoutUrl = `https://checkout.stripe.com/pay/test_...`; // Replace with actual logic

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Billing & Plan</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Manage your subscription and view billing history.</p>
        </div>

        <div className="mt-5">
          <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 sm:mt-0 sm:ml-4">
                <div className="text-sm font-medium text-gray-900">Current Plan</div>
                <div className="mt-1 text-sm text-gray-600">
                  You are currently on the <span className="font-semibold">{planType.charAt(0) + planType.slice(1).toLowerCase()}</span> plan.
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
              {planType === 'FREE' ? (
                <Link
                  href={stripeCheckoutUrl} // Link to upgrade checkout
                  target="_blank" // Open Stripe in new tab
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Upgrade Plan
                </Link>
              ) : (
                <Link
                  href={stripePortalUrl} // Link to Stripe Customer Portal
                  target="_blank" // Open Stripe in new tab
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Manage Subscription
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500">
            Billing management is handled by Stripe. Clicking the button above will redirect you to Stripe's secure portal.
          </p>
          {/* Add billing history section later if needed */}
        </div>
      </div>
    </div>
  );
}

