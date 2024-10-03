import React from 'react';
import '../styles/Companies.css';
import Header from './Header';

const companies = [
  {
    id: 1,
    name: 'JPMorgan Chase Bank',
    rating: 4.1,
    reviews: '5.4K+ reviews',
    description: 'Leader in financial services.',
    logo: 'https://via.placeholder.com/100', // You can replace with real logos
  },
  {
    id: 2,
    name: 'Amazon',
    rating: 4.1,
    reviews: '23.2K+ reviews',
    description: "World's largest Internet company.",
    logo: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'Tata Consultancy Services',
    rating: 3.7,
    reviews: '80.1K+ reviews',
    description: 'Explore challenging and exciting opportunities at TCS.',
    logo: 'https://via.placeholder.com/100',
  },
  {
    id: 4,
    name: 'Reliance Industries (RIL)',
    rating: 4.1,
    reviews: '14.3K+ reviews',
    description: 'Indian multinational conglomerate company.',
    logo: 'https://via.placeholder.com/100',
  },
];

const Companies = () => {
  return (<>
  <Header/>
    <div className="companies-container">
      <h2 className="companies-title">Find Your Dream Company</h2>
      <div className="companies-grid">
        {companies.map((company) => (
          <div key={company.id} className="company-card">
            <img src={company.logo} alt={company.name} className="company-logo" />
            <h3>{company.name}</h3>
            <p className="company-rating">
              <span className="star">★</span> {company.rating} <span>{company.reviews}</span>
            </p>
            <p className="company-description">{company.description}</p>
            <a href={`/jobs/${company.id}`} className="view-jobs-btn">View jobs</a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Companies;
