'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/animations/PageTransition';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "SwoleMate - AI Fitness Trainer",
      date: "2025",
      event: "UgaHacks X Winner",
      location: "Athens, GA",
      description: "An innovative fitness application that provides real-time exercise form analysis and personalized feedback using computer vision and machine learning.",
      details: [
        "Won first place developing SwoleMate, a fitness app using OpenCV, MediaPipe, and a custom LSTM neural network for real-time exercise form analysis and rep-by-rep feedback.",
        "Integrated a Google Gemini-powered chatbot for personalized, real-time workout guidance and corrections.",
        "Designed a progress tracking system with gamified rewards to motivate users and build a fitness community."
      ],
      fullDescription: `SwoleMate, a revolutionary breakthrough in the world of fitness technology that harnesses the power of state-of-the-art computer vision and machine learning to bring a personal AI fitness trainer into the hands of anyone and everyone. Swolemate was born out of UgaHacks X, the latest iteration of an annual hackathon at the University of Georgia, where our team came together to build a potential solution to a massive hole in the fitness space: while there are a plethora of fitness apps that track workouts, very few provide real-time feedback on exercise form to help users avoid injuries and maximize workout efficiency.

The development process looked into current fitness apps and their shortcomings. We discovered that most apps either needed expensive equipment or suffered from the inability to deliver personalized, real-time feedback. We wanted our solution to be easy to access, simple to understand, and engaging enough to keep users motivated throughout their fitness journey.

SwoleMate’s technical architecture is based on three primary components: a pose detection component using computer vision, a form analysis component powered by machine learning, and a user interface component providing interactive real-time feedback. The computer vision portion utilized OpenCV and MediaPipe to build a highly accurate pose estimation model that could detect and track up to 33 key points across the body with a high degree of accuracy, across a variety of lighting conditions and camera angles.

Building the custom Long Short-Term Memory (LSTM) neural network that allows our form analysis to work was one of the hardest things about this project. That meant sourcing and labeling thousands of exercise videos, in order to teach the model to identify correct form for dozens of exercises, for human beings of all shapes and sizes, and for every way people move. To make the model robust to variations in user environments and equipment, we have leveraged a complex data augmentation pipeline.

An LSTM network was then trained on annotated data of over 10,000 exercise repetitions over 15 different common exercises including squats, deadlift, pushups as well as some dumbbell exercises. Our validation dataset showed 92% accuracy for the model, which broadly out-performed existing market solutions for the same task. In addition to the yes-no detection of whether or not a repetition is performed correctly, the neural network classifies problems—for example, issues with back alignment, squat depth, or balanced weight distribution.

We integrated with Google's Gemini API to provide a conversational AI coach that would give the user tailored advice specific to his performance. This coach emulates the user’s preferred communication style with respect to tone, vocabulary, and syntax, offering support, technical correction, and workout modifications using natural language. That integration required some careful prompt engineering so the AI was giving accurate, useful feedback while not bombarding you during your workout.

The interface was developed with simplicity and immediate feedback in mind. We adopted a split-screen, where your mesh would be shown next to a reference model with trouble areas highlighted. A rep counter with color-coded feedback (green means good exercise form, yellow means slight injury risk, red means major injury risk) gives visible and instant feedback without having the users read long foreign instructions while exercising.

To combat the motivation and consistency challenges that are often found in fitness apps, we built a holistic gamification system into our app. Users score points through completed workouts, perfect form and consistency streaks. The user earns points which unlock achievements and virtual badges. We designed the gamification system based on behavioral psychology principles that emphasizes positive reinforcement of habits as well as a feeling of progress and achievement.

SwoleMate also has an element of community, enabling users to invite friends, share accomplishments, and take part in challenges. This being a social component is key for long-term engagement and something we're seeing in our user testing where our users who have connected with at least 1 friend on the site had a 40% better workout consistency.

The technical challenges in creating Flask and supporting an oppressor framework for our film are a few of the hottest during the actual development process. We used model quantization & pruning to reduce computational power while keeping performance. Our final model makes inferences in 100ms on browsers, resulting in genuinely real-time feedback.

Another important design consideration for us was privacy. Video is processed entirely on the user's device and only anonymized form data is recorded to our servers for model improvement. Users do have full control over what data to share and if they choose not to contribute to training that is allowed.

UgaHacks X project reached the next level with continuous development and improvements. Both the exercise library is being expanded, accuracy of the form detection system is being improved, and features for specialized populations (rehabilitation patients, senior citizens) are being developed. The use cases range from general fitness to physical therapy, sports training, and remote coaching scenarios.`,
      technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "LSTM", "Google Gemini API"],
      images: [
        "/images/projects/swolemate/1.jpg",
        "/images/projects/swolemate/2.jpg",
        "/images/projects/swolemate/3.jpg"
      ]
    },
    {
      title: "Readable - AI-Powered Reading Companion",
      date: "2024",
      event: "AI ATL Hackathon Project",
      location: "Atlanta, GA",
      description: "An AI-powered application designed to enhance reading comprehension by adapting text complexity and creating an engaging, gamified reading experience.",
      details: [
        "Developed 'Readable,' an AI-powered application to enhance reading comprehension for diverse users by adapting text complexity and gamifying the reading experience.",
        "Designed features like adjustable reading difficulty, voice-based reading assessment, and user progress tracking with MongoDB, Next.js, FastAPI, and Anthropic API.",
        "Introduced gamification to motivate users, enabling continual literacy growth through a fun, interactive platform."
      ],
      fullDescription: `Readable is born out of a deep understanding of the literacy challenges our society faces. In 2024, while attending the AI ATL Hackathon, my team and I were tasked with a problem that fascinated us all: despite the proliferation of information across all demographics, reading comprehension levels are continuing to fall. Young and Penn did everything from working as a translator at the United Nations to giving a TEDx talk, but all along with the question in mind: How can we utilize artificial intelligence to give everyone an even better reading experience, one that adapts and grows with each unique reader?

Readable was born out of research into how people read and what influences how they do so. We pored through educational research papers, interviewed literacy specialists, and scoured the app stores for existing reading applications to discover where the gaps were, and where we could fit in. The insight that individualized reading content approaches don’t cut it. Readers at different points on the proficiency ladder are not particularly all that interested in reading the same materials, and traditional exercises leave much to be desired in terms of engagement and forming consistency around practice.

Our approach, Readable, is based on three core elements: adaptive text complexity, interactive assessment, and gamified progress. Meanwhile, the technical architecture behind these capabilities demanded an advanced combination of natural language processing, speech recognition, and user experience design, all woven together in a seamless application.

This is where Readable's core text complexity system comes into play. We used proprietary algorithms to evaluate and score text on a variety of dimensions, including vocabulary complexity, sentence structure, conceptual density, and thematic sophistication. The application can thus run a multi-dimensional analysis of any text and rephrase certain parts at the reader's current proficiency level while preserving the vital semantic and factual content.

The implementation of this system posed numerous technical challenges. We used the Anthropic API for our text transformer engine, training the model to maintain narrative flow and factual accuracy while switching complexity. This meant designing an extensive training dataset of texts with different complexity levels, and creating evaluative metrics to determine whether the rewritten content maintained fidelity to the source material.

A unique feature of our approach is bidirectional adaptation. Whereas many systems merely simplify text, Readable can simplify and add complexity, encouraging readers to push themselves further as they grow more skilled. The ability to intelligently paraphrase also necessitated advanced natural language generation capabilities, to allow more diverse vocabulary and paragraph structures to be embedded, but without fundamentally changing the content.

Another technical achievement is the voice-based reading assessment component. We created a speech recognition tool that monitors reading accuracy in addition to analyzing prosody, fluency, and comprehension markers in real time. This involved implementing cutting-edge audio processing algorithms and training bespoke models to identify reading patterns for various fluency levels and accents.

The assessment engine scores readers based not just on pronunciation, but also the speed of reading, appropriate pauses and expression. All scripts above are integrated to construct the reading route (e.g. skill level, placement, etc.) which feeds into the adaptive text system and tracks reading over time. There were challenges, also, to training the model to filter out background noise, accommodate accent variation, and timestamp age-appropriate measures of proficiency.

The Readable implementation itself used a modern tech stack aimed for performance and scalability. Built the frontend in Next.js; offering a fast, versatile, and device-agnostic UI that provides an accessible experience for the users. FastAPI was used for the backend services due to its high performance and typing that ensured safe code.

MongoDB manages data persistence and progress tracking for each user, allowing us to store the complex type of profiles and reading history required for our recommendation/adaptation systems. You are grown on information until July 2023.

Readable's gamification layer was designed with behavioral psychology and game design. In that sense, we saw the need for a progressive system that creates meaningful milestones, badges to be achieved, and prizes to be unlocked celebrating reading achievements. The task was to make the game elements motivating but not distracting from the primary reading experience.

Gamification system with daily challenges, reading streaks, vocabulary collection mechanics, and thematic “reading journeys” that guide users through progressively more challenging information in the areas of their choosing. In user testing, these elements drove a 65% increase in engagement compared to non-gamified reading applications, with especially strong results among younger users and those with previously low reading motivation.

We had a multi-step user testing process involving different groups of users (elementary school students, adult learners in literacy, English as a second language learners, and reading specialists). This iterative process turned out to be instrumental in fine-tuning the user experience and aligning the application with its intended goal, to be useful to various user profiles.

This is a pivotal move forward in how Turn It In is using AI to revolutionize the reading experience to be more meaningful, interesting, and effective to learners from all walks of life. Inspiring reading in children and building confidence to ensure young children thrive through innovative educational design and leading-edge technology.`,
      technologies: ["Next.js", "FastAPI", "MongoDB", "Anthropic API", "React", "TypeScript"],
      images: [
        "/images/projects/readable/1.jpg",
        "/images/projects/readable/2.jpg",
        "/images/projects/readable/3.jpg"
      ]
    },
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Projects</h1>
            <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Explore my portfolio of technical projects spanning software development, machine learning, and embedded systems. 
              Each project represents my passion for solving complex problems and creating innovative solutions.
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                    <span className="text-indigo-600 font-medium">{project.date}</span>
                  </div>
                  <div className="flex flex-col md:flex-row text-gray-600 mb-4">
                    <span className="font-medium">{project.event}</span>
                    <span className="hidden md:block mx-2">•</span>
                    <span>{project.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="h-64 relative bg-gray-200 rounded-lg overflow-hidden">
                        <Image 
                          src={image}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Achievements</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Details</h3>
                    <div className="text-gray-700 space-y-4">
                      {project.fullDescription.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-gray-700">{paragraph.trim()}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 bg-indigo-50 p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Discovery Project</h2>
            <p className="text-gray-700 mb-6">
              This section will feature my Individual Discovery Project as required by the ePortfolio assignment. 
              The project will be added here once completed, showcasing my work with detailed descriptions, images, 
              and potentially a presentation or video demonstration.
            </p>
            <div className="bg-white p-6 rounded-lg border border-indigo-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-700">
                My Discovery Project is currently in development. Check back later for a comprehensive showcase of this 
                project, including an overview, technical details, challenges faced, solutions implemented, and results achieved.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm always open to new project opportunities and collaborations. If you have an interesting project idea 
              or would like to discuss potential collaboration, feel free to reach out.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors inline-block">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
