export interface ChannelItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  opportunityTypes: string[];
  audienceOrPlatforms: string[];
  ctaText: string;
  color: string;
  accentColor: string;
}

export interface IndustryProfile {
  id: string;
  name: string;
  englishName: string;
  description: string;
  keyChannels: string[];
  sampleOpportunities: string[];
}

export interface LeadFormData {
  fullName: string;
  companyName: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  state: string;
  city: string;
  zipCode: string;
  industry: string;
  goal: string;
  channels: string[];
  notes: string;
}
