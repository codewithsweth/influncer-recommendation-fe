import React from 'react';
import { Users } from 'lucide-react';
import { Company, Filters } from '../types';
import FilterSection from './FilterSection';

interface CompanyDetailsProps {
  company: Company;
  filters: Filters;
  loading: boolean;
  onFilterChange: (key: keyof Filters, value: string | number) => void;
  onRecommendInfluencers: () => void;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  company,
  filters,
  loading,
  onFilterChange,
  onRecommendInfluencers
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {/* Company Details in One Line */}
      <div className="mb-6">
        <p className="text-lg text-gray-900">
          <span className="font-semibold">{company.name}:</span>{' '}
          <span className="text-gray-700">{company.description}, {company.country}</span>
        </p>
      </div>

      {/* Filters */}
      <FilterSection filters={filters} onFilterChange={onFilterChange} />

      {/* Generate Button */}
      <button
        onClick={onRecommendInfluencers}
        disabled={loading}
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
  );
};

export default CompanyDetails;