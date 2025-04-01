'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/animations/PageTransition';

export default function Resume() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resume</h1>
              <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-gray-700 text-center mb-8">
                View and download my resume below. You can also contact me directly for the most up-to-date version.
              </p>
              
              <div className="flex justify-center mb-8">
                <motion.a 
                  href="https://drive.google.com/file/d/10IwFYIk5H62WeRJpg3-gdWbREfZq94MV/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full aspect-[4/3] md:aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-lg"
            >
              <iframe 
                src="https://drive.google.com/file/d/10IwFYIk5H62WeRJpg3-gdWbREfZq94MV/preview" 
                width="100%" 
                height="100%" 
                allow="autoplay"
                className="w-full h-full border-0"
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Resume Highlights</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Skills</h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Languages:</span> Java, Python, C#, C/C++, SQL, Javascript, Kotlin, HTML/CSS, Go, TypeScript
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Frameworks:</span> .NET, TensorFlow, React, Unity, Xamarin, Arduino, PyTorch, JUnit, OpenCV, Node.js
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Developer Tools:</span> Android Studio, Git, Firebase, Github, Azure, Figma, AWS Cloud, FastAPI, MongoDB
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Libraries:</span> Java Swing, NumPy, Pandas, Matplotlib, SciPy, Keras, GSon, JSON.net
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience Highlights</h3>
                  <div className="mb-4">
                    <div className="flex flex-col md:flex-row justify-between mb-1">
                      <p className="font-medium text-gray-900">Georgia Tech Research Institute - CIPHER</p>
                      <p className="text-gray-600">May - July 2023</p>
                    </div>
                    <p className="text-gray-700 italic mb-2">Machine Learning and Radar Research Intern</p>
                    <p className="text-gray-700">
                      Developed an mmWave radar system with 80% accuracy in tracking and identifying nurses in a hospital environment.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row justify-between mb-1">
                      <p className="font-medium text-gray-900">Georgia Tech Research Institute - Advanced Concepts Laboratory</p>
                      <p className="text-gray-600">May - July 2022</p>
                    </div>
                    <p className="text-gray-700 italic mb-2">Embedded Computing Research Intern</p>
                    <p className="text-gray-700">
                      Contributed to a patent-pending project for tracking munitions use, developing embedded Python code for wearable devices.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Highlights</h3>
                  <div className="mb-4">
                    <div className="flex flex-col md:flex-row justify-between mb-1">
                      <p className="font-medium text-gray-900">SwoleMate - AI Fitness Trainer</p>
                      <p className="text-gray-600">UgaHacks X Winner, 2025</p>
                    </div>
                    <p className="text-gray-700">
                      Developed a fitness app using OpenCV, MediaPipe, and a custom LSTM neural network for real-time exercise form analysis.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row justify-between mb-1">
                      <p className="font-medium text-gray-900">Readable - AI-Powered Reading Companion</p>
                      <p className="text-gray-600">AI ATL Hackathon Project, 2024</p>
                    </div>
                    <p className="text-gray-700">
                      Created an AI-powered application to enhance reading comprehension by adapting text complexity and gamifying the experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
