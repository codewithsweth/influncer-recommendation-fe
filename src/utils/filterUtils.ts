import { Filters, Influencer } from '../types';
import { mockInfluencers } from '../data/mockInfluencers';

export const getFilteredInfluencers = (filters: Filters): Influencer[] => {
  const { numberOfInfluencers, country, engagementRate } = filters;
  
  // If no country is selected, return random selection
  if (!country) {
    return mockInfluencers
      .sort(() => Math.random() - 0.5)
      .slice(0, numberOfInfluencers);
  }
  
  // Calculate how many influencers should be from the selected country
  const countryInfluencersCount = Math.round(numberOfInfluencers * engagementRate);
  const otherInfluencersCount = numberOfInfluencers - countryInfluencersCount;
  
  // Get influencers from selected country
  const countryInfluencers = mockInfluencers
    .filter(inf => inf.country === country)
    .sort(() => Math.random() - 0.5)
    .slice(0, countryInfluencersCount);
  
  // Get influencers from other countries
  const otherInfluencers = mockInfluencers
    .filter(inf => inf.country !== country)
    .sort(() => Math.random() - 0.5)
    .slice(0, otherInfluencersCount);
  
  // Combine and shuffle
  return [...countryInfluencers, ...otherInfluencers]
    .sort(() => Math.random() - 0.5);
};

export const getInfluencerLevel = (count: number): string => {
  if (count < 1000) return "nano";
  else if (count < 10000) return "nano";
  else if (count < 50000) return "micro";
  else if (count < 500000) return "mid";
  else if (count < 1000000) return "macro";
  else return "mega";
};