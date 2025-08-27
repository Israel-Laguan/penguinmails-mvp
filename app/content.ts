export const content = {
  hero: {
    title: "Cold Email That Lands in Inboxes",
    highlight: "Not Spam",
    description: "A powerful cold email tool made for startups and agencies. Better deliverability, smarter automation, and no contact limits.",
    buttons: {
      getStarted: "Get Started",
      seeHowItWorks: "See How It Works"
    },
    mockup: {
      image: "/img/dashboard.jpeg",
      alt: "Mockup Dashboard",
      link: "https://app.penguinmails.com/dashboard"
    }
  },
  howItWorks: {
    badge: "How",
    badgeHighlight: "PenguinMails",
    badgeDescription: "Works",
    title: "Our 3-step process makes cold emailing straightforward and effective",
    description: "From warming up new domains to running complex, automated campaigns, we provide the tools for successful email marketing.",
    steps: [
      {
        title: "Connect Your Email",
        description: "Link your email account securely. PenguinMails works with Gmail, Outlook, and custom SMTP."
      },
      {
        title: "Build Your Campaign",
        description: "Create personalized email sequences with our drag-and-drop builder and AI assistant."
      },
      {
        title: "Track results",
        description: "Create personalized email sequences with our drag-and-drop builder and AI assistant."
      }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "Is this just an AI wrapper for writing emails?",
        answer: "No, Penguin Mails focuses on deliverability and automation. We use advanced algorithms and bot networks to warm up your domains, ensuring emails from newly acquired domains don't get flagged as spam. While we do offer AI assistance for redacting email templates within campaigns, our core value lies in building sender reputation and automating outreach sequences. We also use AI to analyze campaign performance, detect anomalies like high bounce rates or spam complaints, and provide actionable insights, distinct from simple A/B testing (which we also support)."
      },
      {
        question: "My boss told me to use the platform, but login isn't working.",
        answer: "If you're joining an existing business account on Penguin Mails, you typically need to be invited by an administrator from your company. Ask your boss for the specific referral link they can generate, or at minimum, the `businessId` and `referral code` found in their company settings view. The easiest way is often for your boss (or an admin) to add your email address directly within their Penguin Mails account, which will trigger an invitation or account setup process for you."
      },
      {
        question: "Do you guarantee 100% email delivery rates?",
        answer: "We implement best practices and robust techniques, including domain warm-up and DMARC configuration guidance, to maximize your email deliverability. However, achieving a 100% delivery rate is practically impossible due to factors beyond our control. Email providers might have overly aggressive spam filters, recipient servers could be temporarily down, or end-users might incorrectly mark emails as spam or simply never open them. While we strive for the highest possible inbox placement and provide tools to monitor and improve your rates, we cannot guarantee every single email will be delivered. We are committed to helping you achieve campaign success within these realities."
      },
      {
        question: "What are Handlebars templates?",
        answer: "Handlebars is a simple templating language. It allows you to create dynamic email content by inserting variables (like {{firstName}} or {{companyName}}) into your email templates. When you send a campaign, Penguin Mails replaces these variables with the actual data from your contact list, personalizing each email. You can also use basic logic like conditional statements ({{#if}}) within your templates."
      }
    ]
  }
} as const;

export type Content = typeof content;

export default content;
