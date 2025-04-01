'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/animations/PageTransition';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 95 },
        { name: "C#", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "SQL", level: 75 },
        { name: "HTML/CSS", level: 85 },
        { name: "Kotlin", level: 70 },
        { name: "Go", level: 65 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: ".NET", level: 80 },
        { name: "TensorFlow", level: 85 },
        { name: "React", level: 85 },
        { name: "Unity", level: 75 },
        { name: "PyTorch", level: 80 },
        { name: "Arduino", level: 90 },
        { name: "OpenCV", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "NumPy/Pandas", level: 90 },
        { name: "Matplotlib", level: 85 }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Android Studio", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Azure", level: 75 },
        { name: "AWS Cloud", level: 70 },
        { name: "MongoDB", level: 80 },
        { name: "FastAPI", level: 85 },
        { name: "Figma", level: 75 },
        { name: "JUnit", level: 80 },
        { name: "Docker", level: 70 }
      ]
    },
    {
      title: "Areas of Expertise",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Cybersecurity", level: 80 },
        { name: "Embedded Systems", level: 90 },
        { name: "Data Analysis", level: 85 },
        { name: "Web Development", level: 80 },
        { name: "Mobile Development", level: 75 },
        { name: "Computer Vision", level: 85 },
        { name: "Network Security", level: 75 },
        { name: "Signal Processing", level: 80 },
        { name: "Cloud Computing", level: 70 }
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
            <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              I've developed a diverse set of technical skills through academic coursework, research internships, 
              hackathons, and personal projects. Here's an overview of my capabilities across various domains.
            </p>
          </motion.div>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 p-4 rounded-lg shadow-sm"
                    >
                      <div className="flex justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                        <span className="text-indigo-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: skillIndex * 0.05 + 0.3 }}
                          viewport={{ once: true }}
                          className="bg-indigo-600 h-2.5 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Relevant Coursework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Structures and Algorithms</h3>
                <p className="text-gray-700">
                  Fundamental concepts of data organization and manipulation, including arrays, linked lists, trees, 
                  graphs, and hash tables; algorithm design, analysis, and optimization for sorting, searching, and 
                  dynamic programming.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Introduction to Artificial Intelligence</h3>
                <p className="text-gray-700">
                  Fundamentals of AI including search algorithms, machine learning techniques, knowledge representation, 
                  and reasoning; applications in natural language processing and robotics.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Networks</h3>
                <p className="text-gray-700">
                  Principles of computer networking, including network architecture, protocols, routing, and security; 
                  hands-on experience with network programming and protocol analysis.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Embedded Systems Design</h3>
                <p className="text-gray-700">
                  Design and implementation of embedded systems, including microcontroller programming, real-time 
                  operating systems, and hardware-software integration; applications in IoT and control systems.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-indigo-50 p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h2>
            <p className="text-gray-700 mb-6">
              I'm committed to continuous learning and skill development. Currently, I'm focusing on expanding my 
              knowledge in these areas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Machine Learning</h3>
                <p className="text-gray-700">
                  Exploring deep learning architectures, reinforcement learning, and generative AI models for 
                  various applications.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Architecture</h3>
                <p className="text-gray-700">
                  Developing expertise in cloud-native application design, serverless computing, and multi-cloud 
                  deployment strategies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity</h3>
                <p className="text-gray-700">
                  Deepening knowledge in network security, penetration testing, and secure software development 
                  practices.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              My diverse skill set allows me to approach problems from multiple perspectives and develop 
              comprehensive solutions that integrate various technologies and methodologies.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
