import React from 'react';
import { Users, Star, ExternalLink } from 'lucide-react';
import { Influencer } from '../types';

interface InfluencerListProps {
  influencers: Influencer[];
  showInfluencers: boolean;
}

const InfluencerList: React.FC<InfluencerListProps> = ({ influencers, showInfluencers }) => {
  return (
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
          <p className="text-gray-500 text-lg">Select a company and click "Generate Recommendations" to see matching influencers</p>
        </div>
      ) : (
        <div className="space-y-4">
          {influencers.map((influencer) => (
            <div
              key={influencer.influencer_id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 hover:border-gray-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold text-lg">
                  {influencer.influencer_id.slice(-1)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{influencer.influencer_id}</h4>
                      <p className="text-sm text-gray-500">{influencer.bio}</p>
                      <p className="text-sm text-gray-400 mt-1">{influencer.country} • Age {influencer.age} • {influencer.gender}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="flex gap-6 mt-3">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{influencer.follower_count.toLocaleString()} followers</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{(influencer.similarity_score * 100).toFixed(1)}% match</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfluencerList;