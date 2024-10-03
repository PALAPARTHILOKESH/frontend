// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file for styles
import careercounsellingImage from '../images/careercounselling.jpg';
import resumebuidingImage from '../images/resumebuilding.jpg';
import interview from '../images/interview.jpg';
import job from '../images/job.jpg';
import skill from '../images/skill.jpg';
import Navbar from '../components/Navbar';
const HomePage = () => {
  return (<><Navbar />
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to the Placement Portal</h1>
        <p>Your gateway to exciting job opportunities!</p>
      </header>

      <section className="info-section">
        <p>
          We connect students with employers to facilitate successful placements.
          Our platform provides resources for skill development and career guidance.
        </p>
      </section>

      <section className="image-gallery">
        <h2>Our Services</h2>
        <div className="image-grid">
          <div className="image-item">
            <img src={careercounsellingImage} alt="Career Counseling" />
            <p><b>Career Counseling</b></p>
          </div>
          <div className="image-item">
            <img src={resumebuidingImage} alt="Resume Building" />
            <p><b>Resume Building</b></p>
          </div>
          <div className="image-item">
            <img src={interview} alt="Interview Preparation" />
            <p><b>Interview Preparation</b></p>
          </div>
          <div className="image-item">
            <img src={job} alt="Job Fairs" />
            <p><b>Job Fairs</b></p>
          </div>
          <div className="image-item">
            <img src={skill} alt="Skill Development" />
            <p><b>Skill Development</b></p>
          </div>
        </div>
      </section>

      {/* Service Descriptions Section */}
      <section className="service-descriptions">
        <h2>About Our Services</h2>

        <div className="service">
          <h3>Career Counseling</h3>
          <img src={careercounsellingImage} alt="Career Counseling" />
          <p>
            Our Career Counseling service helps students identify their career paths, offering personalized guidance tailored to their strengths and interests. Our experts provide insights into various industries and roles, helping students make informed decisions.
          </p>
          <p>
            We conduct one-on-one sessions, group workshops, and assessments to explore the best options for each student. Our counselors are experienced professionals who understand the latest job market trends, ensuring that students receive relevant and up-to-date advice.
          </p>
        </div>

        <div className="service">
          <h3>Resume Building</h3>
          <img src={resumebuidingImage} alt="Resume Building" />
          <p>
            We assist students in crafting impactful resumes that showcase their skills, experiences, and achievements. Our resume building workshops equip students with the tools and techniques to create a standout application.
          </p>
          <p>
            During our sessions, students learn how to highlight their strengths and tailor their resumes to specific job descriptions. We also provide templates and examples of successful resumes, as well as tips on how to format and structure their applications effectively.
          </p>
        </div>

        <div className="service">
          <h3>Interview Preparation</h3>
          <img src={interview} alt="Interview Preparation" />
          <p>
            Our Interview Preparation service offers mock interviews and feedback sessions to help students refine their interviewing skills. We provide tips and strategies to confidently present themselves to potential employers.
          </p>
          <p>
            Students will participate in role-playing exercises and receive personalized feedback on their performance. Our coaching covers common interview questions, body language, and effective communication techniques, ensuring students feel prepared and self-assured on interview day.
          </p>
        </div>

        <div className="service">
          <h3>Job Fairs</h3>
          <img src={job} alt="Job Fairs" />
          <p>
            We organize job fairs that connect students with potential employers, providing them with opportunities to network and apply for jobs. Job fairs offer a platform for students to engage directly with companies.
          </p>
          <p>
            At our job fairs, students can meet with recruiters, participate in on-the-spot interviews, and learn about various organizations. We also provide workshops on networking strategies and effective follow-up techniques, enhancing students' chances of securing employment.
          </p>
        </div>

        <div className="service">
          <h3>Skill Development</h3>
          <img src={skill} alt="Skill Development" />
          <p>
            Our Skill Development programs focus on enhancing students' skills through workshops, training sessions, and resources tailored to meet industry demands. We aim to equip students with the necessary competencies to excel in their careers.
          </p>
          <p>
            From technical skills to soft skills like communication and teamwork, our programs are designed to address the specific needs of today's job market. We collaborate with industry experts to ensure our curriculum is relevant, up-to-date, and beneficial for students' career growth.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;
