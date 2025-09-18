import React from 'react';
import { Building2, MapPin } from 'lucide-react';
import { Company } from '../types';

interface CompanyListProps {
  companies: Company[];
  selectedCompany: Company | null;
  onCompanySelect: (company: Company) => void;
}

const CompanyList: React.FC<CompanyListProps> = ({
  companies,
  selectedCompany,
  onCompanySelect
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Building2 className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-900">Companies</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {companies.map((company) => (
          <div
            key={company.id}
            onClick={() => onCompanySelect(company)}
            className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:shadow-md min-h-[120px] ${
              selectedCompany?.id === company.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex flex-col h-full">
              <h3 className="font-medium text-gray-900 mb-2">{company.name}</h3>
              <p className="text-sm text-gray-500 flex-1 mb-2">{company.description}</p>
              <div className="flex items-center gap-1 text-gray-400 mt-auto">
                <MapPin className="h-4 w-4" />
                <span className="text-xs">{company.country}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;