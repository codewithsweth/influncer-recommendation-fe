import { useState } from "react";
import axios from "axios";
import { Company, Influencer, Filters } from "./types";
import { companies } from "./data/companies";
import { getFilteredInfluencers } from "./utils/filterUtils";
import { buildApiUrl } from "./utils/apiUtils";
import CompanyList from "./components/CompanyList";
import CompanyDetails from "./components/CompanyDetails";
import InfluencerList from "./components/InfluencerList";

function App() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [showInfluencers, setShowInfluencers] = useState(false);
  const [filteredInfluencers, setFilteredInfluencers] = useState<Influencer[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    numberOfInfluencers: 10,
    country: "",
    engagementRate: 0.5,
    influencerLevel: "",
    influencerLevelRate: 0.5,
    gender: "",
    genderRate: 0.5,
    age: "",
    ageRate: 0.5,
  });

  const handleCompanySelect = (company: Company) => {
    setSelectedCompany(company);
    setShowInfluencers(false);
    setFilteredInfluencers([]);
  };

  const handleRecommendInfluencers = async () => {
    if (!selectedCompany) return;

    setLoading(true);
    try {
      const apiUrl = buildApiUrl(selectedCompany.id, filters);
      const response = await axios.get(apiUrl);
      setFilteredInfluencers(response.data?.recommendations);
      setShowInfluencers(true);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      // Fallback to local data
      const filtered = getFilteredInfluencers(filters);
      setFilteredInfluencers(filtered);
      setShowInfluencers(true);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key: keyof Filters, value: string | number) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Company-Influencer Matching
          </h1>
          <p className="text-lg text-gray-600">
            Connect brands with the perfect influencers for your campaigns
          </p>
        </div>

        {/* Top Section - Company List (Full Width) */}
        <div className="mb-8">
          <CompanyList
            companies={companies}
            selectedCompany={selectedCompany}
            onCompanySelect={handleCompanySelect}
          />
        </div>

        {/* Bottom Section - Filters (7/10) and Influencers (3/10) */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Left Side - Company Details/Filters (7/10) */}
          <div className="lg:col-span-7 space-y-6">
            {selectedCompany && (
              <CompanyDetails
                company={selectedCompany}
                filters={filters}
                loading={loading}
                onFilterChange={handleFilterChange}
                onRecommendInfluencers={handleRecommendInfluencers}
              />
            )}
          </div>

          {/* Right Side - Influencers List (3/10) */}
          <div className="lg:col-span-3 space-y-6">
            <InfluencerList
              influencers={filteredInfluencers}
              showInfluencers={showInfluencers}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default App;
