import { Filters } from '../types';

export const buildApiUrl = (companyId: number, filters: Filters): string => {
  const baseUrl = `http://127.0.0.1:8000/recommend_influencers/comp${companyId}`;
  const params = new URLSearchParams();
  
  // Required parameters
  params.append('k', filters.numberOfInfluencers.toString());
  
  // Optional parameters - only add if they have values
  if (filters.country) {
    params.append('country', filters.country);
    params.append('country_pct', filters.engagementRate.toString());
  } else {
    params.append('country_pct', '0');
  }
  
  if (filters.influencerLevel) {
    params.append('follower_bracket', filters.influencerLevel);
    params.append('follower_pct', filters.influencerLevelRate.toString());
  } else {
    params.append('follower_pct', '0');
  }
  
  if (filters.age) {
    params.append('age_range', filters.age);
    params.append('age_pct', filters.ageRate.toString());
  } else {
    params.append('age_pct', '0');
  }
  
  if (filters.gender) {
    params.append('gender', filters.gender);
    params.append('gender_pct', filters.genderRate.toString());
  } else {
    params.append('gender_pct', '0');
  }
  
  return `${baseUrl}?${params.toString()}`;
};