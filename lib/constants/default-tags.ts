import { PersonalizationTagType } from '@/app/api/generated/prisma';

export const DEFAULT_PERSONALIZATION_TAGS = [
  // Company tags
  {
    name: 'Company Name',
    identifier: 'companyName',
    visualText: '{Company}',
    description: 'The name of the target company',
    type: PersonalizationTagType.COMPANY,
  },
  {
    name: 'Industry',
    identifier: 'industry',
    visualText: '{Industry}',
    description: 'The industry of the target company',
    type: PersonalizationTagType.COMPANY,
  },
  
  // Client tags
  {
    name: 'First Name',
    identifier: 'firstName',
    visualText: '{First Name}',
    description: 'Contact\'s first name',
    defaultValue: 'there',
    type: PersonalizationTagType.CLIENT,
  },
  {
    name: 'Last Name',
    identifier: 'lastName',
    visualText: '{Last Name}',
    description: 'Contact\'s last name',
    type: PersonalizationTagType.CLIENT,
  },
  {
    name: 'Full Name',
    identifier: 'fullName',
    visualText: '{Full Name}',
    description: 'Contact\'s full name',
    type: PersonalizationTagType.CLIENT,
  },
  {
    name: 'Email',
    identifier: 'email',
    visualText: '{Email}',
    description: 'Contact\'s email address',
    type: PersonalizationTagType.CLIENT,
  },
  
  // Marketing tags
  {
    name: 'Campaign Name',
    identifier: 'campaignName',
    visualText: '{Campaign}',
    description: 'The name of the campaign',
    type: PersonalizationTagType.MARKETING,
  },
  {
    name: 'Product Name',
    identifier: 'productName',
    visualText: '{Product}',
    description: 'Your product name',
    type: PersonalizationTagType.MARKETING,
  },
] as const;
