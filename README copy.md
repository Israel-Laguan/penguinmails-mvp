# Penguin Mail - Email Outreach Application

This is an MVP (Minimum Viable Product) of an email outreach web application built with Next.js and SQLite. The application allows users to manage clients, create email sequence campaigns, manage templates, and track basic results.

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
