import { Globe, HardDrive, Mail, Server, Users } from "lucide-react";


export const getColorClasses = (color: string, warning?: boolean) => {
    if (warning) {
      return {
        bg: 'bg-red-50',
        icon: 'text-red-600',
        border: 'border-red-200',
      };
    }

    const colors = {
      blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
      red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' },
    };
    return colors[color as keyof typeof colors];
};

export const storageOptions = [
    { gb: 1, price: 3 },
    { gb: 2, price: 6 },
    { gb: 5, price: 15 },
    { gb: 10, price: 30 },
  ];
export const usage = {
    emailsSent: 12450,
    contactsReached: 8230,
    contactsLimit: 10000,
    mailboxes: 3,
    domains: 2,
    storageUsed: 1.7,
    storageLimit: 2,
    resetDate: 'February 25, 2024'
  };
export const usageCards = [
    {
      title: 'Emails Sent',
      value: usage.emailsSent.toLocaleString(),
      limit: 'Unlimited',
      icon: Mail,
      color: 'blue',
      showProgress: false,
    },
    {
      title: 'Contacts Reached',
      value: usage.contactsReached.toLocaleString(),
      limit: usage.contactsLimit.toLocaleString(),
      icon: Users,
      color: 'green',
      showProgress: true,
      percentage: (usage.contactsReached / usage.contactsLimit) * 100,
    },
    {
      title: 'Mailboxes Created',
      value: usage.mailboxes.toString(),
      limit: 'Unlimited',
      icon: Server,
      color: 'purple',
      showProgress: false,
    },
    {
      title: 'Domains Connected',
      value: usage.domains.toString(),
      limit: 'Unlimited',
      icon: Globe,
      color: 'orange',
      showProgress: false,
    },
    {
      title: 'Storage Used',
      value: `${usage.storageUsed} GB`,
      limit: `${usage.storageLimit} GB`,
      icon: HardDrive,
      color: 'red',
      showProgress: true,
      percentage: (usage.storageUsed / usage.storageLimit) * 100,
      warning: usage.storageUsed / usage.storageLimit > 0.8,
    },
  ];
