'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/animations/PageTransition';

export default function Career() {
  return (
    <PageTransition>
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Career Goals</h1>
              <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Vision</h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4">
                As a Computer Engineering major in Cybersecurity and Information Internetworks, my professional aspiration in the long run is to be an industry-leading innovator where software development, machine learning, and cybersecurity intersect. My dream is to be the one who develops solutions that not only push technological limits but also address the most vital security and privacy issues.
                </p>
                <p className="text-gray-700">
                Given my diverse experience in software development, machine learning, and embedded systems, I'm positioning myself to contribute to impactful projects that drive significant outcomes. Whether working with established tech companies, research institutions, or pursuing an independent venture in the future, I'm committed to continuous learning and self-improvement throughout the duration of my career.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Timeline</h2>
              
              <div className="relative border-l-2 border-indigo-200 pl-8 ml-4 space-y-10">
                {/* Current */}
                <div className="relative">
                  <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-indigo-600 bg-white"></div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2024-2028: Academic Foundation</h3>
                    <p className="text-gray-700 mb-3">
                      Currently pursuing my Bachelor's in Computer Engineering at Georgia Tech with concentrations in Cybersecurity 
                      and Information Internetworks, and a minor in Fintech.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Complete core coursework in computer engineering, cybersecurity, and networking</li>
                      <li>Participate in research opportunities through Georgia Tech Research Institute</li>
                      <li>Engage in hackathons and coding competitions to build practical skills</li>
                      <li>Secure internships in software development, machine learning, and cybersecurity</li>
                      <li>Develop a strong portfolio of projects demonstrating technical capabilities</li>
                    </ul>
                  </div>
                </div>
                
                {/* Short-term */}
                <div className="relative">
                  <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-indigo-400 bg-white"></div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2028-2031: Early Career Development</h3>
                    <p className="text-gray-700 mb-3">
                      After graduation, I plan to join a tech company or research instite to gain experience in relevant fields
                      and deepen my expertise.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Secure a full-time position as a software engineer or machine learning engineer</li>
                      <li>Contribute to projects involving cybersecurity, AI, or embedded systems</li>
                      <li>Pursue professional certifications in cybersecurity (CISSP, CEH) and cloud platforms</li>
                      <li>Begin part-time graduate studies in Computer Science or Cybersecurity</li>
                      <li>Build professional network through industry conferences and events</li>
                    </ul>
                  </div>
                </div>
                
                {/* Mid-term */}
                <div className="relative">
                  <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-indigo-300 bg-white"></div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2031-2036: Specialization & Growth</h3>
                    <p className="text-gray-700 mb-3">
                      During this phase, I aim to advance to senior technical roles and potentially explore leadership opportunities.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Progress to senior engineering or technical lead positions</li>
                      <li>Complete graduate studies and consider specialized certifications</li>
                      <li>Lead significant technical projects or research initiatives</li>
                      <li>Mentor junior engineers and contribute to technical communities</li>
                      <li>Explore opportunities for technical publications or patents</li>
                    </ul>
                  </div>
                </div>
                
                {/* Long-term */}
                <div className="relative">
                  <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-indigo-200 bg-white"></div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2036 and Beyond: Leadership & Innovation</h3>
                    <p className="text-gray-700 mb-3">
                      In the long term, I aspire to take on leadership roles or entrepreneurial ventures that drive innovation.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Transition to technical leadership, architecture, or executive roles</li>
                      <li>Consider founding a technology startup focused on cybersecurity or AI solutions</li>
                      <li>Contribute to industry standards and best practices</li>
                      <li>Engage in advisory roles for technology companies or educational institutions</li>
                      <li>Give back through mentorship, teaching, or supporting technology education initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Steps to Achieve My Goals</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="text-indigo-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Coursework</h3>
                  <p className="text-gray-700 mb-3">
                    Take advanced courses in:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Machine Learning and AI</li>
                    <li>Network Security</li>
                    <li>Embedded Systems</li>
                    <li>Cloud Computing</li>
                    <li>Cryptography</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="text-indigo-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Experience</h3>
                  <p className="text-gray-700 mb-3">
                    Gain experience through:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Summer internships at tech companies</li>
                    <li>Research assistantships</li>
                    <li>Collaborative projects with industry partners</li>
                    <li>Open-source contributions</li>
                    <li>Co-op opportunities</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="text-indigo-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Portfolio</h3>
                  <p className="text-gray-700 mb-3">
                    Build a strong portfolio through:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Hackathon projects</li>
                    <li>Personal development projects</li>
                    <li>Research projects</li>
                    <li>Capstone projects</li>
                    <li>Collaborative interdisciplinary work</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="text-indigo-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Networking & Community</h3>
                  <p className="text-gray-700 mb-3">
                    Build professional connections through:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Industry conferences and events</li>
                    <li>Professional organizations</li>
                    <li>Online tech communities</li>
                    <li>Alumni networks</li>
                    <li>Mentorship relationships</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-indigo-50 p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Commitment to Growth</h2>
              <p className="text-gray-700">
                I recognize that career paths often evolve, and I'm committed to remaining adaptable and open to new opportunities. 
                By building a strong foundation in computer engineering, cybersecurity, and software development, I'm preparing 
                myself to navigate the rapidly changing technology landscape and make meaningful contributions throughout my career.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
