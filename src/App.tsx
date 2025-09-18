import React, { useState } from 'react';
import { Building2, MapPin, Users, Star, ExternalLink, Filter, Sliders } from 'lucide-react';

interface Company {
  id: number;
  name: string;
  description: string;
  country: string;
  industry: string;
}

interface Influencer {
  id: number;
  name: string;
  platform: string;
  followers: string;
  engagement: string;
  category: string;
  avatar: string;
}

interface Filters {
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

const companies: Company[] = [
  {
    id: 1,
    name: "TechFlow Solutions",
    description: "Leading software development company specializing in AI and machine learning solutions for enterprise clients.",
    country: "United States",
    industry: "Technology"
  },
  {
    id: 2,
    name: "GreenEarth Cosmetics",
    description: "Sustainable beauty brand committed to eco-friendly products and cruelty-free testing practices.",
    country: "Canada",
    industry: "Beauty & Cosmetics"
  },
  {
    id: 3,
    name: "FitLife Nutrition",
    description: "Premium health and wellness company offering organic supplements and fitness programs.",
    country: "Australia",
    industry: "Health & Wellness"
  },
  {
    id: 4,
    name: "Urban Style Co.",
    description: "Contemporary fashion retailer focused on sustainable streetwear and ethical manufacturing.",
    country: "United Kingdom",
    industry: "Fashion"
  },
  {
    id: 5,
    name: "ByteCloud Systems",
    description: "Cloud infrastructure provider delivering scalable solutions for modern businesses worldwide.",
    country: "Germany",
    industry: "Technology"
  }
];

const influencers: Influencer[] = [
  {
    id: 1,
    name: "Sarah Chen",
    platform: "Instagram",
    followers: "2.4M",
    engagement: "4.8%",
    category: "Lifestyle",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Marcus Thompson",
    platform: "YouTube",
    followers: "1.8M",
    engagement: "6.2%",
    category: "Tech Reviews",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    platform: "TikTok",
    followers: "3.2M",
    engagement: "8.1%",
    category: "Fashion",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Kim",
    platform: "Instagram",
    followers: "956K",
    engagement: "5.4%",
    category: "Fitness",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Aria Johnson",
    platform: "YouTube",
    followers: "1.3M",
    engagement: "7.3%",
    category: "Beauty",
    avatar: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Alex Rivera",
    platform: "TikTok",
    followers: "2.7M",
    engagement: "9.2%",
    category: "Entertainment",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150&h=150&fit=crop&crop=face"
  }
];

const countries = [
  "USA", "India", "UK", "Canada", "Netherlands", "South Korea", 
  "Switzerland", "Australia", "Germany", "Japan", "Brazil", 
  "Singapore", "France", "Mexico", "Sweden", "Argentina", 
  "Italy", "Russia", "New Zealand"
];

// Extended influencers data with countries
const influencersWithCountries: (Influencer & { country: string })[] = [
  {
    id: 1,
    name: "Sarah Chen",
    platform: "Instagram",
    followers: "2.4M",
    engagement: "4.8%",
    category: "Lifestyle",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "USA"
  },
  {
    id: 2,
    name: "Marcus Thompson",
    platform: "YouTube",
    followers: "1.8M",
    engagement: "6.2%",
    category: "Tech Reviews",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "Canada"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    platform: "TikTok",
    followers: "3.2M",
    engagement: "8.1%",
    category: "Fashion",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "USA"
  },
  {
    id: 4,
    name: "David Kim",
    platform: "Instagram",
    followers: "956K",
    engagement: "5.4%",
    category: "Fitness",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "South Korea"
  },
  {
    id: 5,
    name: "Aria Johnson",
    platform: "YouTube",
    followers: "1.3M",
    engagement: "7.3%",
    category: "Beauty",
    avatar: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "UK"
  },
  {
    id: 6,
    name: "Alex Rivera",
    platform: "TikTok",
    followers: "2.7M",
    engagement: "9.2%",
    category: "Entertainment",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "Brazil"
  },
  {
    id: 7,
    name: "Priya Sharma",
    platform: "Instagram",
    followers: "1.1M",
    engagement: "6.8%",
    category: "Travel",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "India"
  },
  {
    id: 8,
    name: "James Wilson",
    platform: "YouTube",
    followers: "890K",
    engagement: "4.2%",
    category: "Gaming",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "Australia"
  },
  {
    id: 9,
    name: "Sophie Mueller",
    platform: "TikTok",
    followers: "1.9M",
    engagement: "7.8%",
    category: "Comedy",
    avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "Germany"
  },
  {
    id: 10,
    name: "Yuki Tanaka",
    platform: "Instagram",
    followers: "750K",
    engagement: "5.9%",
    category: "Food",
    avatar: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "Japan"
  },
  {
    id: 11,
    name: "Lucas Silva",
    platform: "YouTube",
    followers: "1.6M",
    engagement: "6.5%",
    category: "Sports",
    avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "Brazil"
  },
  {
    id: 12,
    name: "Emma Thompson",
    platform: "TikTok",
    followers: "2.1M",
    engagement: "8.4%",
    category: "Dance",
    avatar: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "UK"
  },
  {
    id: 13,
    name: "Raj Patel",
    platform: "Instagram",
    followers: "920K",
    engagement: "5.1%",
    category: "Business",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "India"
  },
  {
    id: 14,
    name: "Marie Dubois",
    platform: "YouTube",
    followers: "1.4M",
    engagement: "6.9%",
    category: "Art",
    avatar: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "France"
  },
  {
    id: 15,
    name: "Carlos Rodriguez",
    platform: "TikTok",
    followers: "1.7M",
    engagement: "7.6%",
    category: "Music",
    avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?w=150&h=150&fit=crop&crop=face",
    country: "Mexico"
  }
];

// Function to get filtered influencers based on proportional filters
const getFilteredInfluencers = (filters: Filters) => {
  const { numberOfInfluencers, country, engagementRate, influencerLevel } = filters;
  
  // If no country is selected, return random selection
  if (!country) {
    return influencersWithCountries
      .sort(() => Math.random() - 0.5)
      .slice(0, numberOfInfluencers);
  }
  
  // Calculate how many influencers should be from the selected country
  const countryInfluencersCount = Math.round(numberOfInfluencers * engagementRate);
  const otherInfluencersCount = numberOfInfluencers - countryInfluencersCount;
  
  // Get influencers from selected country
  const countryInfluencers = influencersWithCountries
    .filter(inf => inf.country === country)
    .sort(() => Math.random() - 0.5)
    .slice(0, countryInfluencersCount);
  
  // Get influencers from other countries
  const otherInfluencers = influencersWithCountries
    .filter(inf => inf.country !== country)
    .sort(() => Math.random() - 0.5)
    .slice(0, otherInfluencersCount);
  
  // Combine and shuffle
  return [...countryInfluencers, ...otherInfluencers]
    .sort(() => Math.random() - 0.5);
};
const getInfluencerLevel = (count: number): string => {
  if (count < 1000) return "nano";
  else if (count < 10000) return "nano";
  else if (count < 50000) return "micro";
  else if (count < 500000) return "mid";
  else if (count < 1000000) return "macro";
  else return "mega";
};

function App() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [showInfluencers, setShowInfluencers] = useState(false);
  const [filteredInfluencers, setFilteredInfluencers] = useState<(Influencer & { country: string })[]>([]);
  const [filters, setFilters] = useState<Filters>({
    numberOfInfluencers: 10,
    country: "",
    engagementRate: 0.5,
    influencerLevel: "",
    influencerLevelRate: 0.5,
    gender: "",
    genderRate: 0.5,
    age: "",
    ageRate: 0.5
  });

  const handleCompanySelect = (company: Company) => {
    setSelectedCompany(company);
    setShowInfluencers(false);
    setFilteredInfluencers([]);
  };

  const handleRecommendInfluencers = () => {
    const filtered = getFilteredInfluencers(filters);
    setFilteredInfluencers(filtered);
    setShowInfluencers(true);
  };

  const handleFilterChange = (key: keyof Filters, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Company-Influencer Matching</h1>
          <p className="text-lg text-gray-600">Connect brands with the perfect influencers for your campaigns</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Company Side - Left (3/10) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Company List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Companies</h2>
              </div>
              
              <div className="space-y-3">
                {companies.map((company) => (
                  <div
                    key={company.id}
                    onClick={() => handleCompanySelect(company)}
                    className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:shadow-md ${
                      selectedCompany?.id === company.id
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{company.name}</h3>
                        <p className="text-sm text-gray-500">{company.industry}</p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span className="text-xs">{company.country}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Company Details + Influencers (7/10) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Company Details Card */}
            {selectedCompany && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                {/* Company Details in One Line */}
                <div className="mb-6">
                  <p className="text-lg text-gray-900">
                    <span className="font-semibold">{selectedCompany.name}:</span>{' '}
                    <span className="text-gray-700">{selectedCompany.description}, {selectedCompany.country}</span>
                  </p>
                </div>

                {/* Filters */}
                <div className="space-y-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="h-5 w-5 text-purple-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  </div>

                  {/* First Row - Number of Influencers */}
                  <div className="grid grid-cols-1 gap-6">
                    {/* Number of Influencers */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Influencers: {filters.numberOfInfluencers}
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={filters.numberOfInfluencers}
                        onChange={(e) => handleFilterChange('numberOfInfluencers', parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1</span>
                        <span>20</span>
                      </div>
                    </div>
                  </div>

                  {/* Second Row - Country and Proportion in one line */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Country Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <select
                        value={filters.country}
                        onChange={(e) => handleFilterChange('country', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">All Countries</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Country Proportion Slider */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {filters.country ? `${filters.country} Proportion: ${(filters.engagementRate * 100).toFixed(0)}%` : 'Engagement Rate: N/A'}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={filters.engagementRate}
                        onChange={(e) => handleFilterChange('engagementRate', parseFloat(e.target.value))}
                        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider ${!filters.country ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!filters.country}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>100%</span>
                      </div>
                      {filters.country && (
                        <p className="text-xs text-gray-500 mt-1">
                          {Math.round(filters.numberOfInfluencers * filters.engagementRate)} from {filters.country}, {filters.numberOfInfluencers - Math.round(filters.numberOfInfluencers * filters.engagementRate)} from other countries
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Third Row - Influencer Level Filters */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {/* Influencer Level Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Influencer Level
                      </label>
                      <select
                        value={filters.influencerLevel}
                        onChange={(e) => handleFilterChange('influencerLevel', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">All Levels</option>
                        <option value="nano">Nano (&lt; 10K)</option>
                        <option value="micro">Micro (10K - 50K)</option>
                        <option value="mid">Mid (50K - 500K)</option>
                        <option value="macro">Macro (500K - 1M)</option>
                        <option value="mega">Mega (&gt; 1M)</option>
                      </select>
                    </div>

                    {/* Influencer Level Proportion Slider */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {filters.influencerLevel ? `${filters.influencerLevel.charAt(0).toUpperCase() + filters.influencerLevel.slice(1)} Proportion: ${(filters.influencerLevelRate * 100).toFixed(0)}%` : 'Level Proportion: N/A'}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={filters.influencerLevelRate}
                        onChange={(e) => handleFilterChange('influencerLevelRate', parseFloat(e.target.value))}
                        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider ${!filters.influencerLevel ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!filters.influencerLevel}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>100%</span>
                      </div>
                      {filters.influencerLevel && (
                        <p className="text-xs text-gray-500 mt-1">
                          {Math.round(filters.numberOfInfluencers * filters.influencerLevelRate)} {filters.influencerLevel} level, {filters.numberOfInfluencers - Math.round(filters.numberOfInfluencers * filters.influencerLevelRate)} other levels
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Fourth Row - Gender Filters */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Gender Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                      </label>
                      <select
                        value={filters.gender}
                        onChange={(e) => handleFilterChange('gender', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">All Genders</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                        <option value="unknown">Unknown</option>
                      </select>
                    </div>

                    {/* Gender Proportion Slider */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {filters.gender ? `${filters.gender.charAt(0).toUpperCase() + filters.gender.slice(1)} Proportion: ${(filters.genderRate * 100).toFixed(0)}%` : 'Gender Proportion: N/A'}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={filters.genderRate}
                        onChange={(e) => handleFilterChange('genderRate', parseFloat(e.target.value))}
                        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider ${!filters.gender ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!filters.gender}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>100%</span>
                      </div>
                      {filters.gender && (
                        <p className="text-xs text-gray-500 mt-1">
                          {Math.round(filters.numberOfInfluencers * filters.genderRate)} {filters.gender}, {filters.numberOfInfluencers - Math.round(filters.numberOfInfluencers * filters.genderRate)} other genders
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Fifth Row - Age Filters */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Age Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age
                      </label>
                      <select
                        value={filters.age}
                        onChange={(e) => handleFilterChange('age', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">All Ages</option>
                        <option value="under13">Under 13</option>
                        <option value="13–17">13–17</option>
                        <option value="18–24">18–24</option>
                        <option value="25–34">25–34</option>
                        <option value="35–44">35–44</option>
                        <option value="45+">45+</option>
                      </select>
                    </div>

                    {/* Age Proportion Slider */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {filters.age ? `${filters.age} Proportion: ${(filters.ageRate * 100).toFixed(0)}%` : 'Age Proportion: N/A'}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={filters.ageRate}
                        onChange={(e) => handleFilterChange('ageRate', parseFloat(e.target.value))}
                        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider ${!filters.age ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!filters.age}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>100%</span>
                      </div>
                      {filters.age && (
                        <p className="text-xs text-gray-500 mt-1">
                          {Math.round(filters.numberOfInfluencers * filters.ageRate)} {filters.age}, {filters.numberOfInfluencers - Math.round(filters.numberOfInfluencers * filters.ageRate)} other ages
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <button
                    onClick={handleRecommendInfluencers}
                    disabled={!selectedCompany || loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Loading...
                      </>
                    ) : (
                      <>
                        <Users className="h-5 w-5" />
                        Generate Recommendations
                      </>
                    )}
                  </button>
              </div>
            )}

            {/* Influencers List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Recommended Influencers</h2>
              </div>

              {!showInfluencers ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg">Select a company and click "Recommend Influencers" to see matching influencers</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredInfluencers.map((influencer) => (
                    <div
                      key={influencer.id}
                      className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 hover:border-gray-300"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={influencer.avatar}
                          alt={influencer.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900">{influencer.name}</h4>
                              <p className="text-sm text-gray-500">{influencer.category} • {influencer.platform} • {influencer.country}</p>
                            </div>
                            <button className="text-blue-600 hover:text-blue-700 transition-colors">
                              <ExternalLink className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <div className="flex gap-6 mt-3">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{influencer.followers} followers</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{influencer.engagement} engagement</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default App;