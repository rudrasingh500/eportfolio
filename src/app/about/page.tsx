'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/animations/PageTransition';

export default function About() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
              <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-1/3"
              >
                <div className="relative w-full aspect-square max-w-sm mx-auto rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-500">Profile Image Placeholder</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full md:w-2/3"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Rudra Singh</h2>
                <p className="text-gray-700 mb-4">
                  I'm an enthusiastic Computer Engineering student at Georgia Tech, specializing in Cybersecurity and Information Internetworks, 
                  with a strong foundation in software development, machine learning, and embedded systems.
                </p>
                <p className="text-gray-700 mb-4">
                  Born and raised in Alpharetta, Georgia, I've always been fascinated by technology and its potential to solve complex problems. 
                  This curiosity led me to pursue Computer Engineering at Georgia Tech, where I've been able to explore various aspects of computing 
                  and develop a diverse skill set.
                </p>
                <p className="text-gray-700 mb-4">
                  Throughout my academic journey, I've had the opportunity to work on exciting projects and internships that have shaped my 
                  technical abilities and professional outlook. From developing an mmWave radar system for healthcare applications to contributing 
                  to a patent-pending wearable device for military use, these experiences have reinforced my passion for creating innovative solutions.
                </p>
                <p className="text-gray-700">
                  When I'm not coding or working on technical projects, I enjoy staying active, exploring new technologies, and connecting with 
                  fellow tech enthusiasts. I'm fluent in English and Hindi, with some knowledge of French, which helps me connect with people 
                  from diverse backgrounds.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Georgia Institute of Technology</h3>
                  <span className="text-gray-600">August 2023 - Present</span>
                </div>
                <p className="text-gray-700 mb-2">Bachelor of Science in Computer Engineering</p>
                <p className="text-gray-700 mb-2">Concentrations in Cybersecurity and Information Internetworks</p>
                <p className="text-gray-700 mb-2">Minor in Fintech</p>
                <p className="text-gray-700">Expected Graduation: May 2028</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Organizations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Georgia Tech Grand Challenges</h3>
                  <p className="text-gray-700">
                    Participating in collaborative problem-solving initiatives focused on addressing significant societal challenges through 
                    innovative technological solutions.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Startup Exchange at Georgia Tech</h3>
                  <p className="text-gray-700">
                    Engaging with a community of student entrepreneurs and innovators to develop entrepreneurial skills and explore startup 
                    opportunities in the tech industry.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Interests</h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4">
                  Beyond my academic and professional pursuits, I have a variety of interests that keep me balanced and inspired:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Exploring emerging technologies in AI and machine learning</li>
                  <li>Contributing to open-source projects</li>
                  <li>Participating in hackathons and coding competitions</li>
                  <li>Staying active through sports and outdoor activities</li>
                  <li>Reading about technological innovations and their societal impacts</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
