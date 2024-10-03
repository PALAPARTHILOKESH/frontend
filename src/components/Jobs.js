import React from 'react';
import Header from './Header';
import '../styles/Jobs.css';

const jobs = [
  {
    id: 1,
    company: 'Google',
    title: 'Software Engineering',
    salary: '15-25 LPA',
    location: 'Hyderabad, India',
    qualifications: [
      "Bachelor’s degree or equivalent practical experience.",
      "1 year of experience with software development in Java.",
      "Good skills in data structure or algorithms in either an academic or industry setting.",
    ],
    logo: 'https://via.placeholder.com/100', // Replace with company logo URL
  },
  {
    id: 2,
    company: 'Microsoft',
    title: 'Full Stack Developer',
    salary: '50-60 LPA',
    location: 'Mumbai, India',
    qualifications: [
      "Bachelor's in Computer Science or related field.",
      "3+ years of experience in full stack development.",
      "Experience with JavaScript, React, Node.js.",
    ],
    logo: 'https://via.placeholder.com/100',
  },
  // Add 8 more jobs as needed
  {
    id: 3,
    company: 'Amazon',
    title: 'DevOps Engineer',
    salary: '20-30 LPA',
    location: 'Bangalore, India',
    qualifications: [
      "Bachelor's degree or equivalent practical experience.",
      "Experience with cloud infrastructure (AWS preferred).",
      "Proficiency with scripting languages like Python or Bash.",
    ],
    logo: 'https://via.placeholder.com/100',
  },
  {
    id: 4,
    company: 'TCS',
    title: 'Data Analyst',
    salary: '10-15 LPA',
    location: 'Pune, India',
    qualifications: [
      "Bachelor's in Data Science, Statistics, or related field.",
      "Proficiency in SQL and Python.",
      "Experience with data visualization tools like Tableau.",
    ],
    logo: 'https://via.placeholder.com/100',
  },
  {
    id: 5,
    company: 'Infosys',
    title: 'Frontend Developer',
    salary: '12-18 LPA',
    location: 'Chennai, India',
    qualifications: [
      "Strong experience with React.js and modern JavaScript.",
      "2+ years of experience in frontend development.",
      "Experience with CSS frameworks like Bootstrap.",
    ],
    logo: 'https://via.placeholder.com/100',
  },
  {
    id: 6,
    company: 'Facebook',
    title: 'Backend Developer',
    salary: '30-40 LPA',
    location: 'New Delhi, India',
    qualifications: [
      "Proficiency in backend languages like Java, Python, or Node.js.",
      "Experience with databases like MySQL, MongoDB.",
      "Ability to design and maintain APIs.",
    ],
    logo: 'https://via.placeholder.com/100',
  },
  {
    id: 7,
    company: 'Netflix',
    title: 'Machine Learning Engineer',
    salary: '40-50 LPA',
    location: 'Bangalore, India',
    qualifications: [
      "Experience with machine learning frameworks like TensorFlow.",
      "Strong mathematical and analytical skills.",
      "Bachelor's or Master's in Computer Science or equivalent.",
    ],
    logo: 'https://via.placeholder.com/100',
  },
  {
    id: 8,
    company: 'Flipkart',
    title: 'Product Manager',
    salary: '25-30 LPA',
    location: 'Gurgaon, India',
    qualifications: [
      "Experience in product management.",
      "Strong understanding of e-commerce platforms.",
      "Excellent communication and leadership skills.",
    ],
    logo: 'https://via.placeholder.com/100',
  },
  {
    id: 9,
    company: 'Zomato',
    title: 'Mobile App Developer',
    salary: '18-22 LPA',
    location: 'Mumbai, India',
    qualifications: [
      "Experience in mobile development (iOS/Android).",
      "Proficiency with Swift, Kotlin, or React Native.",
      "Bachelor's degree in Computer Science or equivalent.",
    ],
    logo: 'https://via.placeholder.com/100',
  },
  {
    id: 10,
    company: 'Paytm',
    title: 'Security Engineer',
    salary: '30-35 LPA',
    location: 'Noida, India',
    qualifications: [
      "Experience with security tools and protocols.",
      "Knowledge of network security and penetration testing.",
      "Bachelor's degree in Information Security or equivalent.",
    ],
    logo: 'https://via.placeholder.com/100',
  },
];

const Jobs = () => {
  return (
    <>
    <Header/>
    <div className="jobs-container">
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <div className="job-header">
            <img src={job.logo} alt={job.company} className="job-logo" />
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>{job.salary}</p>
              <p>{job.location}</p>
            </div>
          </div>
          <div className="job-qualifications">
            <h4>Minimum qualifications</h4>
            <ul>
              {job.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
          <button className="apply-btn">Apply</button>
        </div>
      ))}
    </div>
    </>
  );
}

export default Jobs;
