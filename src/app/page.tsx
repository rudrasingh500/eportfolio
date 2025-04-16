'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageTransition from '@/components/animations/PageTransition';
import Image from 'next/image';
import { getImagePath } from '@/utils/imageUtils';

export default function Home() {
  return (
    <PageTransition>
      <div className="bg-gradient-to-b from-white to-gray-100">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                    Hi, I&apos;m <span className="text-indigo-600">Rudra Singh</span>
                  </h1>
                  <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
                    Computer Engineering Student at Georgia Tech
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    Specializing in Cybersecurity and Information Internetworks with a passion for software development, 
                    machine learning, and embedded systems. I&apos;m dedicated to creating innovative solutions to complex problems.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/about" className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors">
                        Learn More
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/projects" className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                        View Projects
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative w-full aspect-square max-w-md mx-auto"
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                    <Image
                      src={getImagePath("/profile.png")}
                      alt="Profile picture"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and interests in software development, 
                machine learning, and embedded systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <motion.div
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Image
                    src={getImagePath("/images/projects/swolemate/1.jpg")}
                    alt="SwoleMate Project"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">SwoleMate - AI Fitness Trainer</h3>
                  <p className="text-gray-600 mb-4">
                    A fitness app using OpenCV, MediaPipe, and a custom LSTM neural network for real-time exercise form analysis.
                  </p>
                  <Link href="/projects" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                    Learn more →
                  </Link>
                </div>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={getImagePath("/images/projects/readable/1.jpg")}
                      alt="Readable Project"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Readable - AI Reading Companion</h3>
                  <p className="text-gray-600 mb-4">
                    An AI-powered application to enhance reading comprehension by adapting text complexity and gamifying the experience.
                  </p>
                  <Link href="/projects" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                    Learn more →
                  </Link>
                </div>
              </motion.div>

              {/* Project Card 3 */}
              <motion.div
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Image
                    src={getImagePath("/images/projects/discovery_project/arduino_image_2.webp")}
                    alt="Morse Code Converter Project"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Morse Code Converter</h3>
                  <p className="text-gray-600 mb-4">
                    An 8-week ECE project that translates text to Morse code using mBed, featuring LED and buzzer outputs with adjustable transmission speed.
                  </p>
                  <Link href="/projects" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/projects" className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors inline-block">
                  View All Projects
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I&apos;ve developed a diverse set of skills throughout my academic and professional journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Skill Category 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-indigo-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Programming Languages</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Java, Python, C#</li>
                  <li>C/C++, SQL, JavaScript</li>
                  <li>Kotlin, HTML/CSS, Go</li>
                </ul>
              </motion.div>

              {/* Skill Category 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-indigo-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Frameworks</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>.NET, TensorFlow, React</li>
                  <li>Unity, Xamarin, Arduino</li>
                  <li>PyTorch, OpenCV, Node.js</li>
                </ul>
              </motion.div>

              {/* Skill Category 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-indigo-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Developer Tools</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Android Studio, Git, Firebase</li>
                  <li>GitHub, Azure, Figma</li>
                  <li>AWS Cloud, MongoDB, FastAPI</li>
                </ul>
              </motion.div>

              {/* Skill Category 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-indigo-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hardware & Other</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Arduino, Raspberry Pi</li>
                  <li>Machine Learning, Data Analysis</li>
                  <li>Embedded Systems, Cybersecurity</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in working together?</h2>
                <p className="text-indigo-100 text-lg">
                  I&apos;m always open to discussing new projects, opportunities, and collaborations.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors inline-block">
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
