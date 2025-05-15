import { Template, TemplateCategory } from "@/app/api/generated/prisma";

export const userTemplates: Template[] = [
  {
    id: 1,
    name: "Initial CEO Outreach",
    category: "OUTREACH",
    subject: "Quick question about {Company}'s growth strategy",
    body: "Hi {First Name},\n\nI hope this email finds you well...",
    bodyHtml: "<p>Hi {First Name},</p><p>I hope this email finds you well...</p>",
    description: "A personalized first touch to CEOs highlighting their company achievements",
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
    companyId: 1,
    createdById: "user1"
  },
{
    id: 2,
    name: "SaaS Introduction",
    category: "INTRODUCTION",
    subject: "Introduction to {Company} regarding our SaaS solution",
    body: "Hi {First Name},\n\nI wanted to briefly introduce our SaaS solution...",
    bodyHtml: "<p>Hi {First Name},</p><p>I wanted to briefly introduce our SaaS solution...</p>",
    description: "Introduction to SaaS decision makers with value proposition",
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    companyId: 1,
    createdById: "user1"
},
{
    id: 3,
    name: "Follow-up After No Response",
    category: "FOLLOW_UP",
    subject: "Following up on {Previous Email Subject}",
    body: "Hi {First Name},\n\nI'm just following up on my previous email...",
    bodyHtml: "<p>Hi {First Name},</p><p>I'm just following up on my previous email...</p>",
    description: "Gentle follow-up message after no response to initial email",
    createdAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000),
    companyId: 1,
    createdById: "user1"
},
{
    id: 4,
    name: "Meeting Request",
    category: "MEETING",
    subject: "Meeting request to discuss {Topic}",
    body: "Hi {First Name},\n\nI'd like to schedule a brief meeting to discuss...",
    bodyHtml: "<p>Hi {First Name},</p><p>I'd like to schedule a brief meeting to discuss...</p>",
    description: "Template to request a short meeting with prospect",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    companyId: 1,
    createdById: "user1"
},
{
    id: 5,
    name: "Case Study Share",
    category: "VALUE",
    subject: "Case study: {Company} achieved X with our solution",
    body: "Hi {First Name},\n\nI thought you might be interested in this case study...",
    bodyHtml: "<p>Hi {First Name},</p><p>I thought you might be interested in this case study...</p>",
    description: "Share relevant case study with prospect",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    companyId: 1,
    createdById: "user1"
},
{
    id: 6,
    name: "Closing the Loop",
    category: "FOLLOW_UP",
    subject: "Closing the loop on {Previous Conversation}",
    body: "Hi {First Name},\n\nSince I haven't heard back, I'm closing the loop on this...",
    bodyHtml: "<p>Hi {First Name},</p><p>Since I haven't heard back, I'm closing the loop on this...</p>",
    description: "Final follow-up message before closing the conversation thread",
    createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    companyId: 1,
    createdById: "user1"
}
];

export const builtInTemplates: Template[] = [
  {
    id: 7,
    name: "SaaS Demo Request",
    category: "SAAS",
    subject: "Quick demo of {Product} for {Company}?",
    body: "Hello {First Name},\n\nI noticed that {Company} has been...",
    bodyHtml: "<p>Hello {First Name},</p><p>I noticed that {Company} has been...</p>",
    description: "Request a demo for your SaaS product with clear value proposition",
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    companyId: 1,
    createdById: "user1"
  },
  {
    id: 8,
    name: "Agency Introduction",
    category: "AGENCY",
    subject: "Unlocking Growth for {Company} with Expert Agency Services",
    body: "Hi {First Name},\n\nI trust this message finds you well...",
    bodyHtml: "<p>Hi {First Name},</p><p>I trust this message finds you well...</p>",
    description: "Perfect for marketing or creative agencies to introduce their services",
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    companyId: 1,
    createdById: "user1"
  },
  {
    id: 9,
    name: "Consultant Value Prop",
    category: "CONSULTING",
        subject: "Driving Measurable Results for {Company} as a Consultant",
    body: "Hi {First Name},\n\nI hope this email reaches you in good spirits...",
    bodyHtml: "<p>Hi {First Name},</p><p>I hope this email reaches you in good spirits...</p>",
    description: "Highlight your expertise and value as a consultant",
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    companyId: 1,
    createdById: "user1"
  },
  {
    id: 10,
    name: "E-commerce Partnership",
    category: "ECOMMERCE",
        subject: "Exploring Partnership Synergies for {Company} in E-commerce",
    body: "Hi {First Name},\n\nI am reaching out to explore potential synergies...",
    bodyHtml: "<p>Hi {First Name},</p><p>I am reaching out to explore potential synergies...</p>",
    description: "Initiate partnerships with complementary e-commerce businesses",
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    companyId: 1,
    createdById: "user1"
  },
  {
    id: 11,
    name: "Real Estate Investor",
    category: "REAL_ESTATE",
        subject: "Exclusive Real Estate Investment Opportunities for {Company}",
    body: "Hi {First Name},\n\nI am excited to share some exclusive real estate...",
    bodyHtml: "<p>Hi {First Name},</p><p>I am excited to share some exclusive real estate...</p>",
    description: "Cold approach for real estate investment opportunities",
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    companyId: 1,
    createdById: "user1"
  },
  {
    id: 12,
    name: "Recruitment Outreach",
    category: "HR",
        subject: "Connecting Talent with Opportunity at {Company}",
    body: "Hi {First Name},\n\nI hope this message finds you well...",
    bodyHtml: "<p>Hi {First Name},</p><p>I hope this message finds you well...</p>",
    description: "Reach out to potential candidates for open positions",
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    companyId: 1,
    createdById: "user1"
  },
  {
    id: 13,
    name: "Financial Services",
    category: "FINANCE",
        subject: "Securing Your Financial Future with Expert Services at {Company}",
    body: "Hi {First Name},\n\nI am reaching out to introduce our comprehensive...",
    bodyHtml: "<p>Hi {First Name},</p><p>I am reaching out to introduce our comprehensive...</p>",
    description: "Introduction of financial planning or investment services",
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    companyId: 1,
    createdById: "user1"
  },
  {
    id: 14,
    name: "Healthcare Solution",
    category: "HEALTHCARE",
        subject: "Revolutionizing Healthcare with Innovative Solutions for {Company}",
    body: "Hi {First Name},\n\nI am excited to present our cutting-edge healthcare...",
    bodyHtml: "<p>Hi {First Name},</p><p>I am excited to present our cutting-edge healthcare...</p>",
    description: "Introducing innovative healthcare solutions to practitioners",
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    companyId: 1,
    createdById: "user1"
  }
];

export const categories: TemplateCategory[] = [
  "OUTREACH",
  "INTRODUCTION",
  "FOLLOW_UP",
  "MEETING",
  "VALUE",
  "SAAS",
  "AGENCY",
  "CONSULTING",
  "ECOMMERCE",
  "REAL_ESTATE",
  "HR",
  "FINANCE",
  "HEALTHCARE"
];

export type TemplateUsage = 'low' | 'medium' | 'high';

export function getTemplateUsage(templateId: number): TemplateUsage {
  // Simple algorithm based on template ID for mock data
  const usageMap: Record<number, TemplateUsage> = {
    7: 'high',    // SaaS Demo Request
    8: 'medium',  // Agency Introduction
    9: 'high',    // Consultant Value Prop
    10: 'low',    // E-commerce Partnership
    11: 'medium', // Real Estate Investor
    12: 'high',   // Recruitment Outreach
    13: 'low',    // Financial Services
    14: 'medium'  // Healthcare Solution
  };

  return usageMap[templateId] || 'low';
}
