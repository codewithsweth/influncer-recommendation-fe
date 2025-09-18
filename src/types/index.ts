export interface Company {
  id: string;
  name: string;
  description: string;
  country: string;
  industry?: string;
}

export interface Influencer {
  influencer_id: string;
  bio: string;
  country: string;
  follower_count: number;
  age: number;
  gender: string;
  similarity_score: number;
}

export interface Filters {
  numberOfInfluencers: number;
  country: string;
  engagementRate: number;
  influencerLevel: string;
  influencerLevelRate: number;
  gender: string;
  genderRate: number;
  age: string;
  ageRate: number;
}
