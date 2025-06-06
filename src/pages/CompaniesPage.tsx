import React from 'react';

const CompaniesPage: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Top Companies</h1>
      <p className="text-gray-600 mb-8">
        Discover leading companies that are hiring now
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topCompanies.map((company) => (
          <div key={company.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-32 bg-blue-100 relative">
              <img 
                src={company.coverImage} 
                alt={`${company.name} cover`}
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 left-4">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="w-12 h-12 rounded-lg border-2 border-white"
                />
              </div>
            </div>
            <div className="p-4 pt-8">
              <h3 className="font-medium text-gray-800">{company.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{company.industry}</p>
              <p className="text-gray-500 text-sm mt-1">{company.location}</p>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-blue-600">{company.openPositions} open positions</span>
                <button className="text-sm text-blue-600 hover:underline">
                  View Company
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample company data
const topCompanies = [
  {
    id: 'c1',
    name: 'Google',
    industry: 'Technology',
    location: 'Mountain View, CA',
    openPositions: 12,
    logo: 'https://i.pravatar.cc/150?img=1',
    coverImage: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg',
  },
  {
    id: 'c2',
    name: 'Microsoft',
    industry: 'Technology',
    location: 'Redmond, WA',
    openPositions: 8,
    logo: 'https://i.pravatar.cc/150?img=2',
    coverImage: 'https://images.pexels.com/photos/241544/pexels-photo-241544.jpeg',
  },
  {
    id: 'c3',
    name: 'Apple',
    industry: 'Technology',
    location: 'Cupertino, CA',
    openPositions: 15,
    logo: 'https://i.pravatar.cc/150?img=3',
    coverImage: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg',
  },
  {
    id: 'c4',
    name: 'Amazon',
    industry: 'E-commerce, Cloud',
    location: 'Seattle, WA',
    openPositions: 20,
    logo: 'https://i.pravatar.cc/150?img=4',
    coverImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
  },
  {
    id: 'c5',
    name: 'Meta',
    industry: 'Social Media',
    location: 'Menlo Park, CA',
    openPositions: 7,
    logo: 'https://i.pravatar.cc/150?img=5',
    coverImage: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg',
  },
  {
    id: 'c6',
    name: 'Netflix',
    industry: 'Entertainment',
    location: 'Los Gatos, CA',
    openPositions: 5,
    logo: 'https://i.pravatar.cc/150?img=6',
    coverImage: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg',
  },
];

export default CompaniesPage;