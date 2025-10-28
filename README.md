# PenguinMails - Email Outreach Application

This is an MVP (Minimum Viable Product) of an email outreach web application built with Next.js and SQLite. The application allows users to manage clients, create email sequence campaigns, manage templates, and track basic results.

## What is PenguinMails?

This project is a platform for managing and automating email campaigns and outreach. It helps users create, send, and track the performance of their email campaigns. The platform also provides tools for managing clients, domains, and email accounts, as well as features for analyzing campaign statistics and managing templates. It aims to streamline the process of reaching out to clients and prospects through email.


## Features

- **User Authentication:** Email/password signup and login with session management
- **Company Context:** Users belong to a company
- **Client Management:** Add and view clients (Placeholder)
- **Template Management:** Create and manage email templates (Placeholder)
- **Campaign Management:**
    - **Detailed Campaign Creation:** Create multi-step sequential email campaigns with delays, conditions, scheduling, and recipient management using a rich UI.
    - **Campaign List:** View a detailed list of campaigns with summary metrics, status indicators, progress bars, and performance data.
- **Dashboard:** Visual overview of key metrics, campaign performance, email status, recent campaigns, and upcoming tasks.
- **Detailed Analytics:** Track email events (sent, opened, clicked, bounced, unsubscribed) (Placeholder)
- **Avatar Selection:** Choose from default avatars or use custom URLs for profile pictures
- **Advanced Campaign Scheduling:** Configure days of the week and time windows for sending emails within the campaign creation flow.
- **Settings:** User profile, appearance, and billing settings (Placeholders)

## Tech Stack

- **Framework:** Next.js 15+
- **Database:** SQLite (for development, with migration path to PostgreSQL)
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **UI Components:** shadcn/ui (integrated from provided project)
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form with Zod for validation
- **Charting:** Recharts
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository or extract the provided zip file.
2. Create a `.env` file in the root directory with the following content:
   ```
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-nextauth-secret-key-change-in-production"
   NEXTAUTH_URL="http://localhost:3000"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) (or the port specified if 3000 is busy) in your browser.

## Migration to PostgreSQL

This project uses SQLite for development purposes. For production deployment, it's recommended to migrate to PostgreSQL. See the `MIGRATION_NOTES.md` file for detailed instructions on how to migrate from SQLite to PostgreSQL.

## Project Structure

- `/src/app` - Next.js app router pages and API routes
    - `/dashboard/campaigns/create` - New detailed campaign creation page
- `/src/components` - Reusable React components
    - `/ui` - Core shadcn/ui components
    - `/layout` - Dashboard layout components (Sidebar, Header)
    - `/campaigns` - Components specific to campaign creation and management
    - `/email` - Email related components (e.g., PersonalizationTags)
- `/src/lib` - Server actions and utility functions
- `/prisma` - Prisma schema and migrations
- `/public` - Static assets
    - `/avatars` - Default avatar images for user profiles

## API Routes & Server Actions

- `/api/auth/[...nextauth]` - NextAuth.js authentication endpoints
- `/api/signup` - User registration
- `/api/clients` - Client management (Placeholder)
- `/api/templates` - Template management (Placeholder)
- `/api/campaigns` - Campaign management (Placeholder for potential future REST endpoints)
- `/api/analytics` - Analytics data and event tracking (Placeholder)
- `/src/lib/actions.ts` - Server actions for fetching data (e.g., `getCampaignsDataAction`)

## Feature Details

### Dashboard

Located at `/dashboard`, the dashboard provides a visual overview of application activity:
- **KPI Cards:** Key metrics like Open Rate, Click Rate, Reply Rate, Bounce Rate.
- **Campaign Performance Chart:** Line chart showing opens, clicks, replies over time.
- **Email Status Chart:** Pie chart visualizing email delivery and engagement status.
- **Recent Campaigns List:** Summary of recent campaigns and their stats.
- **Upcoming Tasks List:** Pending tasks related to campaigns, emails, etc.

See `DASHBOARD_COMPONENTS.md` for detailed documentation on dashboard components.

### Campaigns Page (`/dashboard/campaigns`)

This page provides a detailed view of all campaigns:
- **Summary Cards:** Metrics for Total Campaigns, Active Campaigns, Emails Sent, and Total Replies.
- **Campaigns Table:** A detailed table listing campaigns with status, progress, performance metrics, and last activity.

Data is fetched using the `getCampaignsDataAction` server action.

### Campaign Creation Page (`/dashboard/campaigns/create`)

This new page provides a comprehensive interface for creating multi-step email campaigns:
- **Structure:** Uses a tabbed interface for Sequence, Schedule, and Recipients.
- **Campaign Details:** Form section for basic campaign info (Name, From Name, From Email) using `CampaignDetailsForm`.
- **Sequence Builder:** Allows adding, removing, reordering, and editing Email and Delay steps (`SequenceStep`, `EmailStep`, `DelayStep`).
    - **Email Steps:** Include subject, body (with template import and personalization tag insertion), using `TemplateSelector` and `PersonalizationTags`.
    - **Delay Steps:** Configure wait times (days/hours) and conditions (e.g., send only if previous email not opened/clicked/replied).
- **Scheduling:** Configure sending days, time windows, and timezone using `ScheduleSettings`.
- **Recipients:** Add recipients via CSV upload or manual entry using `RecipientsSettings` (upload/parsing logic not yet implemented).
- **Validation:** Uses React Hook Form and Zod for robust form validation.

### Avatar Selection System

The application provides a set of default avatars for users to choose from, including options for different genders, ethnicities, and even animal avatars. Users can also provide custom URLs for their avatars.

To use the avatar selection:
1. Navigate to Dashboard > Settings > Profile
2. Click on any of the default avatars or select "Use custom avatar URL"
3. If using a custom URL, enter the URL and click "Apply"

### Analytics Tracking

The analytics system tracks various email events:

- Sent emails
- Opened emails
- Clicked links
- Bounced emails
- Unsubscribed recipients

The Dashboard > Analytics page provides visualizations and metrics for campaign performance.

## Future Improvements

- **Backend Integration:** Connect the new Campaign Creation form (`onSubmit`) to a server action or API route to save campaign data to the database using Prisma.
- Implement email sending functionality (e.g., using Nodemailer or an email API service).
- Connect UI components (Dashboard, Campaign List, etc.) to real database data instead of mock data/placeholders.
- Implement full CRUD functionality for Templates and Clients.
- Implement CSV upload and parsing for recipients.
- Implement dynamic fetching for sending accounts and templates.
- Add user dropdown and logout functionality to the Dashboard Header.
- Refine mobile responsiveness, potentially adding a mobile sidebar toggle.
- Integrate with third-party services like Stripe for payments.

## Firebase Configuration
PenguinMails uses Firebase to manage user authentication and may use other services in the future. There are two types of Firebase configurations you need to add to your .env file: one for the client (frontend) and one for the server (backend/admin SDK).

### 🔐 Client-Side Firebase Config
These variables are exposed to the browser and used to initialize Firebase on the client (e.g., Firebase Auth for sign-in):

```
# CLIENT FIREBASE KEYS
NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_NEXT_PUBLIC_FIREBASE_API_KEY"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_NEXT_PUBLIC_FIREBASE_PROJECT_ID"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_NEXT_PUBLIC_FIREBASE_APP_ID"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="YOUR_NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID"
```
### 🔎 How to get these values:

1. Go to `https://console.firebase.google.com/`.

2. Select your project or create a new one.

3. On the project home page, click the gear icon (⚙️) > Project settings.

4. Under the Your apps section, select the Web app (or create one).

5. Copy the Firebase config object values provided.

### 🛡️ Server-Side Firebase Admin Config
These variables are used to initialize the Firebase Admin SDK on the server and must remain private. They are used for secure operations like token verification, access to Firestore, etc.

# SERVER FIREBASE KEYS
```
# SERVER FIREBASE KEYS
FIREBASE_SERVICE_ACCOUNT="YOUR_FIREBASE_SERVICE_ACCOUNT"
FIREBASE_PROJECT_ID="YOUR_FIREBASE_PROJECT_ID"
FIREBASE_PRIVATE_KEY_ID="YOUR_FIREBASE_PRIVATE_KEY_ID"
FIREBASE_PRIVATE_KEY="YOUR_FIREBASE_PRIVATE_KEY"
FIREBASE_CLIENT_EMAIL="YOUR_FIREBASE_CLIENT_EMAIL"
FIREBASE_CLIENT_ID="YOUR_FIREBASE_CLIENT_ID"
FIREBASE_AUTH_URI="YOUR_FIREBASE_AUTH_URI"
FIREBASE_TOKEN_URI="YOUR_FIREBASE_TOKEN_URI"
FIREBASE_AUTH_PROVIDER_X509_CERT_URL="YOUR_FIREBASE_AUTH_PROVIDER_X509_CERT_URL"
FIREBASE_CLENT_X509_CERT_URL="YOUR_FIREBASE_CLENT_X509_CERT_URL"
FIREBASE_UNIVERSE_DOMAIN="YOUR_FIREBASE_UNIVERSE_DOMAIN"
```

📌 Important notes:
FIREBASE_SERVICE_ACCOUNT should contain the full service account JSON, encoded as a single string (e.g., using JSON.stringify() or loading the file and escaping quotes).

Make sure this value is never exposed to the client or included in any public bundle.

### 🔎 How to get the service account file:

1. In the Firebase Console, go to Project Settings > Service accounts tab.

2. Click "Generate new private key".

3. Save the .json file and convert its contents into a string for use in the FIREBASE_SERVICE_ACCOUNT variable.

## Stripe integration

### Get Your Stripe API Keys
Your API keys are found in your Stripe Dashboard. These differentiate between your test environment (for development) and your live environment (for production).

1. Log in to your Stripe [Dashboard](https://dashboard.stripe.com/).
2. Navigate to Developers > API Keys in the left-hand sidebar.
3. You'll see two main keys:
  - Publishable key (starts with `pk_test_`... or `pk_live_`...): This key is safe to expose in your frontend code. Copy its value.
  - Secret key (starts with `sk_test_`... or `sk_live_`...): This key must be kept absolutely confidential and never exposed in your frontend code. Copy its value.

### Get Your Stripe Webhook Signing Secret
The Webhook Signing Secret is crucial for verifying that incoming webhooks are genuinely from Stripe and haven't been tampered with.

1. In your Stripe [Dashboard](https://dashboard.stripe.com/), navigate to Developers > Webhooks in the left-hand sidebar.

2. Click on Add an endpoint (or select an existing one if you've already configured your webhook URL).
3. When configuring your webhook endpoint (e.g., https://yourdomain.com/api/stripe-webhook), you'll see a section titled `Signing secret`.
4. Click the "Click to reveal" button next to the signing secret. Copy this value.
Important: This secret is unique to each webhook endpoint you create. Make sure you copy the secret for the correct endpoint that matches your application's webhook URL.

### Set Up Your .env.local File
Once you have these keys, create a file named .env.local in the root of your project (if you don't have one already). Add the following variables to it, replacing the placeholder values with the keys you copied:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY='your_publishable_key_here'
STRIPE_SECRET_KEY='your_secret_key_here'
STRIPE_WEBHOOK_SIGNING_SECRET='your_webhook_signing_secret_here'
```

<!-- CONTRIBUTORS START -->
<h2>Contributors</h2>
<table border='1' cellspacing='0' cellpadding='5'>
  <thead>
    <tr><th>Avatar</th><th>Username</th><th>Insights</th></tr>
  </thead>
  <tbody>
    <tr><td><img src="https://avatars.githubusercontent.com/u/52115726?v=4?s=50" alt="Avatar" width="50" height="50"></td><td><a href="https://github.com/ARenzDev">ARenzDev</a></td><td><a href="https://github.com/Israel-Laguan/penguinmails-mvp/graphs/contributors">📈</a></td></tr>
    <tr><td><img src="https://avatars.githubusercontent.com/u/36519478?v=4?s=50" alt="Avatar" width="50" height="50"></td><td><a href="https://github.com/Israel-Laguan">Israel-Laguan</a></td><td><a href="https://github.com/Israel-Laguan/penguinmails-mvp/graphs/contributors">📈</a></td></tr>
    <tr><td><img src="https://avatars.githubusercontent.com/u/112190828?v=4?s=50" alt="Avatar" width="50" height="50"></td><td><a href="https://github.com/Mhmd0Mhmod">Mhmd0Mhmod</a></td><td><a href="https://github.com/Israel-Laguan/penguinmails-mvp/graphs/contributors">📈</a></td></tr>
    <tr><td><img src="https://avatars.githubusercontent.com/u/89047058?v=4?s=50" alt="Avatar" width="50" height="50"></td><td><a href="https://github.com/YoelFerreyra">YoelFerreyra</a></td><td><a href="https://github.com/Israel-Laguan/penguinmails-mvp/graphs/contributors">📈</a></td></tr>
    <tr><td><img src="https://avatars.githubusercontent.com/u/49282275?v=4?s=50" alt="Avatar" width="50" height="50"></td><td><a href="https://github.com/joset98">joset98</a></td><td><a href="https://github.com/Israel-Laguan/penguinmails-mvp/graphs/contributors">📈</a></td></tr>
    <tr><td><img src="https://avatars.githubusercontent.com/u/136950183?v=4?s=50" alt="Avatar" width="50" height="50"></td><td><a href="https://github.com/umer104">umer104</a></td><td><a href="https://github.com/Israel-Laguan/penguinmails-mvp/graphs/contributors">📈</a></td></tr>
    <tr><td><img src="https://avatars.githubusercontent.com/u/6664588?v=4?s=50" alt="Avatar" width="50" height="50"></td><td><a href="https://github.com/TESTPERSONAL">TESTPERSONAL</a></td><td><a href="https://github.com/Israel-Laguan/penguinmails-mvp/graphs/contributors">📈</a></td></tr>
  </tbody>
</table>
<!-- CONTRIBUTORS END -->
