'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/animations/PageTransition';
import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '@/utils/imageUtils';

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
        getImagePath("/images/projects/swolemate/1.jpg"),
        getImagePath("/images/projects/swolemate/2.jpg"),
        getImagePath("/images/projects/swolemate/3.jpg")
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
        getImagePath("/images/projects/readable/1.jpg"),
        getImagePath("/images/projects/readable/2.jpg"),
        getImagePath("/images/projects/readable/3.jpg")
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Discovery Project: Morse Code Converter</h2>
            <div className="space-y-8 text-gray-700">
              
              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Problem & Initial Idea</h3>
                <p className="mb-4">
                  The Discovery Project presented an exciting 8-week opportunity to dive deep into a practical Electrical and Computer Engineering (ECE) challenge and cultivate a new skill set. Drawing inspiration from a prior internship where I witnessed the potential of advanced sensor technologies in action, I initially set my sights on a highly ambitious goal: constructing an mmWave (millimeter-wave) radar system for human presence detection and tracking. The vision was to create a sophisticated system that could precisely identify and monitor human movement within a defined space, leveraging the unique capabilities of mmWave frequencies for high-resolution sensing, even through certain materials. This technology held immense appeal due to its potential applications in areas like advanced smart home automation (e.g., occupancy sensing for lighting/HVAC control), enhanced security systems, and even non-invasive healthcare monitoring (like fall detection). I was particularly fascinated by the intricate blend of specialized hardware design, complex signal processing algorithms needed to interpret the reflected waves, and the real-time data interpretation required for accurate tracking, viewing it as a significant but ultimately rewarding technical hurdle that would push my ECE knowledge.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Process: Planning and Setbacks</h3>
                <p className="mb-4">
                  Embarking on the mmWave project, the initial weeks were a whirlwind of intensive research and meticulous planning. I delved into academic papers, technical datasheets for sensors like Texas Instruments&apos; IWR series, and numerous online forums to grasp the nuances of mmWave technology, antenna design considerations, and the signal processing chain (FFT, beamforming, target detection algorithms). I explored suitable microcontrollers, weighing options like powerful ESP32 variants against Raspberry Pi boards for their processing capabilities and interface options (SPI, UART). I sketched out a preliminary system architecture, detailing how the sensor module, microcontroller, and potentially a power management IC would interconnect. A critical part of this phase was creating a detailed 8-week Gantt chart, allocating specific weeks for component sourcing, PCB design (if needed), hardware assembly, firmware development, algorithm implementation (likely starting with vendor-provided libraries), and rigorous testing. Recognizing the notorious lead times for specialized components, especially mmWave sensors which often ship from international suppliers, I initiated the procurement process almost immediately.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="h-64 relative bg-gray-200 rounded-lg overflow-hidden">
                    <Image 
                      src={getImagePath("/images/projects/discovery_project/arduino_image_2.webp")}
                      alt="Arduino Uno R4 planning stage with components"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2"
                    />
                    <p className="text-center text-sm text-gray-600 absolute bottom-1 w-full bg-white bg-opacity-75">Initial planning with the Arduino Uno R4 WiFi.</p>
                  </div>
                   <div className="h-64 relative bg-gray-200 rounded-lg overflow-hidden">
                    <Image 
                      src={getImagePath("/images/projects/discovery_project/arduino_Img3.webp")}
                      alt="Arduino Uno R4 showing onboard RGB LED matrix"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2"
                    />
                    <p className="text-center text-sm text-gray-600 absolute bottom-1 w-full bg-white bg-opacity-75">Exploring the R4&apos;s LED matrix feature.</p>
                  </div>
                </div>
                <p className="mb-4">
                  However, this is where the first significant roadblocks emerged. Several potential suppliers quoted delivery times stretching 6-10 weeks, extending well beyond my project window. Others had minimum order quantities or high unit costs that were prohibitive for a student project budget. This sourcing challenge became a major source of early frustration. Weeks slipped by with key components still on backorder or facing customs delays. By the time week 7 arrived, the stark reality was that the only significant piece of hardware I had received was the Arduino Uno R4 WiFi itself, and even its delivery had been delayed. The ambitious mmWave radar project, so carefully planned, was now logistically impossible within the remaining timeframe.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Challenges & Pivot</h3>
                <p className="mb-4">
                  With the mmWave sensor definitively out of reach, I attempted a rapid pivot using the hardware I had: the Arduino Uno R4 WiFi. This board features a novel onboard 12x8 RGB LED matrix, which seemed like an interesting platform for exploring embedded visual displays and basic animations. My revised, much simpler goal became creating a small application to showcase patterns or simple graphics on this matrix. However, this plan quickly hit another wall. I encountered persistent, critical issues establishing a stable serial connection between the Arduino board and my development computer (a Windows machine). Despite diligently working through standard troubleshooting steps – reinstalling drivers, trying different USB cables and ports, updating the Arduino IDE, checking device manager settings, and even attempting firmware recovery modes – I could not get the board to be reliably recognized for programming uploads. Days were spent wrestling with cryptic error messages and connection timeouts.
                </p>
                <div className="my-6">
                  <div className="h-64 relative bg-gray-200 rounded-lg overflow-hidden">
                    <Image 
                      src={getImagePath("/images/projects/discovery_project/arduino_failure_img1.webp")}
                      alt="Screenshot showing Arduino IDE connection errors"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2"
                    />
                    <p className="text-center text-sm text-gray-600 absolute bottom-1 w-full bg-white bg-opacity-75">Frustrating hours spent debugging Arduino IDE connectivity.</p>
                  </div>
                </div>
                <p className="mb-4">
                  The project clock was now alarmingly close to zero. With only about a week remaining in the Discovery Project period and facing insurmountable roadblocks with the Arduino R4, I needed a functional hardware platform immediately. Thankfully, a classmate generously lent me their mbed NXP LPC1768 development board. This was a familiar and known-reliable platform from previous coursework, equipped with standard peripherals and supported by a stable online compiler environment. This loan provided a crucial lifeline, allowing for one final pivot to a project that could realistically be completed in the last few days.
                </p>
                 <div className="my-6">
                  <div className="h-64 relative bg-gray-200 rounded-lg overflow-hidden">
                    <Image 
                      src={getImagePath("/images/projects/discovery_project/mbed_part_img.webp")}
                      alt="Close-up of the mbed NXP LPC1768 microcontroller board"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2"
                    />
                     <p className="text-center text-sm text-gray-600 absolute bottom-1 w-full bg-white bg-opacity-75">The reliable mbed NXP LPC1768 board that saved the project.</p>
                 </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Outcome: Morse Code Converter</h3>
                <p className="mb-4">
                  Embracing the final pivot with the borrowed mbed board and extremely limited time, I selected a practical and achievable project: a functional Morse code converter. The concept was straightforward yet required careful implementation: accept standard English text input via a serial terminal connection from a computer, translate each character into its corresponding Morse code representation, and then output the code visually by blinking one of the mbed board&apos;s built-in LEDs according to the correct timing conventions.
                </p>
                <p className="mb-4">
                  Development took place rapidly using the convenient mbed online compiler and its C++ libraries. The core logic involved creating a mapping structure (likely a switch-case statement or an array lookup) to associate each letter (A-Z) and number (0-9) with its unique sequence of dots and dashes (represented as strings or character arrays). A separate function was crucial for handling the output: it iterated through the dot/dash sequence for a given character and controlled the mbed&apos;s onboard LED (using the `DigitalOut` library). Precision timing was key here; I implemented delays based on a defined &apos;dot&apos; duration (e.g., 200ms), ensuring dashes were three times as long, inter-element gaps within a letter were one dot duration, gaps between letters were three dot durations, and gaps between words (spaces) were seven dot durations. Serial communication (`Serial` library) was used to receive the input text string from the terminal.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="h-80 relative bg-gray-200 rounded-lg overflow-hidden">
                    <Image 
                      src={getImagePath("/images/projects/discovery_project/code_snippet1.webp")}
                      alt="C++ code snippet showing Morse character mapping"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <p className="text-center text-sm text-gray-600 absolute bottom-1 w-full bg-white bg-opacity-75">Snippet: Mapping characters to Morse sequences.</p>
                  </div>
                  <div className="h-80 relative bg-gray-200 rounded-lg overflow-hidden">
                    <Image 
                      src={getImagePath("/images/projects/discovery_project/code_snippet2.webp")}
                      alt="C++ code snippet showing LED blinking logic with timing"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    
                    <p className="text-center text-sm text-gray-600 absolute bottom-1 w-full bg-white bg-opacity-75">Snippet: Implementing timed LED blinking for dots/dashes.</p>
                  </div>
                </div>
                 <p className="mb-4">
                  Despite the tumultuous journey – from the ambitious mmWave radar concept through procurement nightmares and Arduino failures – I successfully designed, coded, debugged, and demonstrated the functional Morse code converter within the final week. This salvaged project provided valuable hands-on practice in embedded C++ programming on the mbed platform, interfacing with hardware peripherals like LEDs, handling serial communication protocols, and implementing precise timing control. More importantly, the entire 8-week Discovery Project saga became an intense lesson in real-world engineering challenges: the critical importance of contingency planning, the necessity of adaptability when facing unforeseen roadblocks, rapid problem-solving under pressure, and the crucial skill of realistically assessing constraints to pivot towards a deliverable solution. While far from the complex system initially envisioned, the Morse code converter represented a successful navigation of significant adversity and a testament to perseverance.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Demonstrations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Demo 1</h4>
                    <video controls className="w-full rounded-lg shadow-md">
                      <source src={getImagePath("/videos/projects/discovery_project/demo_1.mov")} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Demo 2</h4>
                    <video controls className="w-full rounded-lg shadow-md">
                      <source src={getImagePath("/videos/projects/discovery_project/demo_2.mov")} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </section>

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
              I&apos;m always open to new project opportunities and collaborations. If you have an interesting project idea 
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
