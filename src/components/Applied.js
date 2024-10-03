import React from 'react';
import Header from './Header';
import '../styles/Applied.css'; // CSS for styling

const appliedJobs = [
  {
    id: 1,
    company: 'Google',
    title: 'Software Engineer',
    status: 'Under Review',
    appliedDate: '2024-09-01',
  },
  {
    id: 2,
    company: 'Microsoft',
    title: 'Full Stack Developer',
    status: 'Interview Scheduled',
    appliedDate: '2024-09-05',
  },
  {
    id: 3,
    company: 'Amazon',
    title: 'DevOps Engineer',
    status: 'Rejected',
    appliedDate: '2024-09-10',
  },
];

const Applied = () => {
  return (
    <>
      <Header />
      <div className="applied-container">
        <h1>Applied Jobs</h1>
        <div className="applied-list">
          {appliedJobs.length > 0 ? (
            appliedJobs.map((job) => (
              <div key={job.id} className="applied-card">
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <p><strong>Company:</strong> {job.company}</p>
                  <p><strong>Applied on:</strong> {job.appliedDate}</p>
                </div>
                <div className={`job-status ${job.status.toLowerCase().replace(' ', '-')}`}>
                  {job.status}
                </div>
              </div>
            ))
          ) : (
            <p>You haven't applied for any jobs yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Applied;
