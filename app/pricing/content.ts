// Create a new file, e.g., 'app/pricing/content.ts'

export const pricingContent = {
    hero: {
      title: "Choose Your Plan",
      description: "Simple, transparent pricing for businesses of all sizes. Start warming up your domains and sending campaigns today.",
    },
    plans: {
      business: {
        title: "Business",
        description: "Ideal for growing businesses starting with email outreach.",
        price: "$99",
        interval: "/mo",
        features: [
          "Up to 5 Connected Domains",
          "Unlimited Domain Warm-up",
          "10,000 Emails Sent/Month",
          "Basic Campaign Automation",
          "Standard Analytics",
          "Email & Chat Support",
        ],
        ctaText: "Choose Business",
      },
      premium: {
        title: "Premium",
        description: "For established businesses scaling their outreach efforts.",
        price: "$249",
        interval: "/mo",
        features: [
          "Up to 20 Connected Domains",
          "Unlimited Domain Warm-up",
          "50,000 Emails Sent/Month",
          "Advanced Campaign Automation (IF/ELSE)",
          "Advanced Analytics & AI Insights",
          "A/B Testing",
          "Priority Support",
        ],
        ctaText: "Choose Premium",
      },
      custom: {
        title: "Custom",
        description: "Tailored solutions for large enterprises or specific needs.",
        price: "Contact Us",
        features: [
          "Custom Domain Limits",
          "Custom Email Sending Volume",
          "Bespoke Feature Development",
          "Dedicated Account Manager",
          "Service Level Agreements (SLAs)",
          "Onboarding & Training",
        ],
        ctaText: "Contact Sales",
      },
    },
    faq: {
      title: "Pricing Questions",
      items: [
        {
          question: "Is there a free tier or trial?",
          answer: "No, we currently do not offer a free tier or a traditional free trial. However, you can explore the platform using our test account to see how things work. Use credentials: Email: `test@email.com` Password: `Test#1234` Business ID: `Test1234567890` Referral Code: `Test1234567890` Please note that actions within this test account are mocked and no real emails are sent or domains warmed up. When you're ready to use the service actively, please select one of our paid plans.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We use Stripe as our payment processor. This allows us to accept a wide variety of payment methods, including major credit cards (Visa, Mastercard, American Express), debit cards, and potentially other regional payment options like SEPA Direct Debit, iDEAL, etc., depending on your location.",
        },
        {
          question: "I don't like some part of the plan or have suggestions.",
          answer: "We appreciate your feedback! If specific features in the Business or Premium plans don't perfectly fit your needs, or if you have suggestions for improvement, please reach out to us via our Contact Us page. For highly specific requirements or significant modifications, the 'Custom' plan is designed to offer tailored solutions. Contact our sales team to discuss how we can build a plan that works best for you.",
        },
        {
          question: "Can I get a discount?",
          answer: "We occasionally offer promotions or discounts, especially for annual commitments or non-profit organizations. Please contact our sales or support team through the Contact Us page to inquire about any current offers or discuss potential discounts based on your specific situation (e.g., volume, commitment length). Choosing the 'Custom' plan also allows for negotiation based on the scope of services.",
        },
      ],
    },
  };
  