import React from 'react';
import { Filter } from 'lucide-react';
import { Filters } from '../types';
import { countries } from '../data/constants';

interface FilterSectionProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string | number) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="space-y-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
      </div>

      {/* First Row - Number of Influencers */}
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Influencers: {filters.numberOfInfluencers}
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={filters.numberOfInfluencers}
            onChange={(e) => onFilterChange('numberOfInfluencers', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>20</span>
          </div>
        </div>
      </div>

      {/* Second Row - Country and Proportion */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <select
            value={filters.country}
            onChange={(e) => onFilterChange('country', e.target.value)}
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
            onChange={(e) => onFilterChange('engagementRate', parseFloat(e.target.value))}
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Influencer Level
          </label>
          <select
            value={filters.influencerLevel}
            onChange={(e) => onFilterChange('influencerLevel', e.target.value)}
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
            onChange={(e) => onFilterChange('influencerLevelRate', parseFloat(e.target.value))}
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <select
            value={filters.gender}
            onChange={(e) => onFilterChange('gender', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Genders</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

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
            onChange={(e) => onFilterChange('genderRate', parseFloat(e.target.value))}
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age
          </label>
          <select
            value={filters.age}
            onChange={(e) => onFilterChange('age', e.target.value)}
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
            onChange={(e) => onFilterChange('ageRate', parseFloat(e.target.value))}
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
  );
};

export default FilterSection;