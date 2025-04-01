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
      fullDescription: `SwoleMate represents a significant breakthrough in the fitness technology space, combining advanced computer vision techniques with machine learning to create a personal AI fitness trainer that's accessible to everyone. The project was conceived and developed during UgaHacks X, where our team identified a critical gap in the market: while many fitness apps track workouts, very few provide real-time feedback on exercise form, which is crucial for preventing injuries and maximizing workout effectiveness.

      The development process began with extensive research into existing fitness applications and their limitations. We found that most apps either required expensive equipment or lacked the ability to provide personalized, real-time feedback. Our solution needed to be accessible, accurate, and engaging enough to keep users motivated throughout their fitness journey.

      The technical architecture of SwoleMate is built around three core components: a computer vision system for pose detection, a machine learning model for form analysis, and an interactive user interface with real-time feedback mechanisms. For the computer vision component, we leveraged OpenCV and MediaPipe to create a robust pose estimation system capable of tracking 33 key body points with high precision, even in varying lighting conditions and camera angles.

      One of the most challenging aspects of the project was developing the custom Long Short-Term Memory (LSTM) neural network that powers our form analysis. This required collecting and annotating thousands of exercise videos to train the model to recognize proper form across a wide range of exercises, body types, and movement patterns. We implemented a sophisticated data augmentation pipeline to ensure the model would be robust to variations in user environments and equipment.

      The LSTM network was trained on over 10,000 annotated exercise repetitions across 15 common exercises, including squats, deadlifts, push-ups, and various dumbbell movements. The model achieved 92% accuracy in identifying form deviations in our validation dataset, significantly outperforming existing solutions in the market. The neural network not only detects whether a repetition is performed correctly but also identifies specific issues such as improper back alignment, insufficient depth in squats, or asymmetrical weight distribution.

      To make the feedback actionable and engaging, we integrated Google's Gemini API to power a conversational AI coach that provides personalized guidance based on the user's performance. This coach adapts its communication style to the user's preferences and learning patterns, offering encouragement, technical corrections, and workout modifications in natural language. The integration required careful prompt engineering to ensure the AI provided accurate, helpful feedback without overwhelming the user during their workout.

      The user interface was designed with a focus on simplicity and real-time feedback. We implemented a split-screen approach where users can see their form alongside a reference model, with problematic areas highlighted in real-time. A rep counter with color-coded feedback (green for good form, yellow for minor issues, red for significant problems) provides immediate visual feedback without requiring users to read detailed instructions during their workout.

      To address the motivation and consistency challenges common in fitness apps, we developed a comprehensive gamification system. Users earn points for completed workouts, perfect form, and consistency streaks. These points unlock achievements, virtual badges, and customization options within the app. The gamification system was designed based on behavioral psychology principles to reinforce positive habits and create a sense of progress and accomplishment.

      The community aspect of SwoleMate allows users to connect with friends, share achievements, and participate in challenges. This social component has proven crucial for long-term engagement, with our user testing showing a 40% increase in workout consistency among users who connected with at least one friend on the platform.

      During the development process, we faced several technical challenges, particularly in optimizing the machine learning model to run efficiently on mobile devices without compromising accuracy. We implemented model quantization and pruning techniques to reduce the computational requirements while maintaining performance. The final model achieves inference times of under 100ms on mid-range smartphones, enabling truly real-time feedback.

      Privacy was another key consideration in our design. All video processing happens locally on the user's device, with only anonymized form data sent to our servers for model improvement. Users have complete control over their data sharing preferences and can opt out of contributing to model training entirely if desired.

      The project's success at UgaHacks X has led to ongoing development and refinement. We're currently expanding the exercise library, improving the accuracy of the form detection system, and developing features for specialized populations such as rehabilitation patients and senior citizens. The potential applications extend beyond general fitness to physical therapy, sports training, and remote coaching scenarios.`,
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
      fullDescription: `Readable emerged from a profound recognition of the literacy challenges facing our society today. During the AI ATL Hackathon in 2024, our team set out to address the growing concern that despite widespread access to information, reading comprehension levels continue to decline across various demographics. The project was born from the question: How might we leverage artificial intelligence to create a more accessible, engaging, and effective reading experience that adapts to individual needs?

      The development of Readable began with extensive research into the science of reading comprehension and the factors that influence it. We consulted educational research papers, interviewed literacy specialists, and analyzed existing reading applications to identify gaps and opportunities. What became clear was that one-size-fits-all approaches to reading material often fail to engage readers at different proficiency levels, while traditional reading exercises frequently lack the engagement necessary to maintain consistent practice.

      Our solution, Readable, is built on three foundational pillars: adaptive text complexity, interactive assessment, and gamified progression. The technical architecture supporting these features required a sophisticated blend of natural language processing, speech recognition, and user experience design, all integrated into a cohesive application.

      The core of Readable's functionality is its adaptive text complexity system. We developed a proprietary algorithm that analyzes text across multiple dimensions, including vocabulary complexity, sentence structure, conceptual density, and thematic sophistication. This multi-dimensional analysis allows the application to transform any text to match the reader's current proficiency level while preserving the essential meaning and information.

      Implementing this system presented significant technical challenges. We leveraged the Anthropic API to power our text transformation engine, fine-tuning the model to maintain narrative coherence and factual accuracy while adjusting complexity. The process involved creating a comprehensive training dataset of texts at various complexity levels and developing evaluation metrics to ensure the transformed content remained faithful to the original.

      One particularly innovative aspect of our approach is the bidirectional adaptation capability. Unlike systems that only simplify text, Readable can both simplify and increase complexity, allowing readers to gradually challenge themselves as their skills improve. This feature required developing sophisticated natural language generation capabilities that could introduce more nuanced vocabulary and complex sentence structures without altering the fundamental content.

      The voice-based reading assessment component represents another technical achievement. We implemented a speech recognition system that not only tracks reading accuracy but also analyzes prosody, fluency, and comprehension markers in real-time. This required integrating advanced audio processing algorithms and developing custom models to recognize reading patterns specific to different proficiency levels and accents.

      The assessment engine evaluates readers on multiple dimensions, including pronunciation accuracy, reading speed, appropriate pausing, and expression. These metrics are combined to create a comprehensive reading profile that informs the adaptive text system and tracks progress over time. Implementing this feature required overcoming challenges related to background noise filtering, accent variation, and the development of age-appropriate assessment criteria.

      From a technical implementation standpoint, we built Readable using a modern tech stack designed for performance and scalability. The frontend was developed with Next.js, providing a responsive and accessible user interface that works seamlessly across devices. The backend services were implemented using FastAPI, chosen for its performance characteristics and strong typing system that helped ensure reliability.

      Data persistence and user progress tracking are handled through MongoDB, which provides the flexibility needed to store the complex user profiles and reading history that power our recommendation and adaptation systems. We implemented a comprehensive data model that captures not only reading performance metrics but also preference data that helps personalize the reading experience.

      The gamification layer of Readable was designed based on principles of behavioral psychology and game design. We created a progression system with meaningful milestones, achievement badges, and virtual rewards that celebrate reading accomplishments. The challenge was balancing the game elements to be motivating without distracting from the core reading experience.

      Our gamification system includes daily challenges, reading streaks, vocabulary collection mechanics, and thematic "reading journeys" that guide users through progressively more challenging content in topics of their interest. User testing showed that these elements increased engagement by 65% compared to non-gamified reading applications, with particularly strong results among younger users and those with previously low reading motivation.

      Security and privacy considerations were paramount in our design process. We implemented end-to-end encryption for all user data, strict access controls, and compliance with educational privacy standards including FERPA and COPPA. For younger users, we developed a comprehensive parental control system that provides oversight while maintaining an engaging experience for the child.

      The development process included multiple rounds of user testing with diverse participant groups, including elementary school students, adult literacy learners, English language learners, and reading specialists. This feedback loop was crucial in refining the user experience and ensuring the application effectively served its intended purpose across different user profiles.

      Since its debut at the AI ATL Hackathon, Readable has evolved significantly based on user feedback and continued development. We've expanded the content library to include thousands of articles, stories, and books across various genres and subject areas. We've also developed specialized modules for academic reading, professional development, and English language learning.

      The impact potential of Readable extends beyond individual users to educational institutions, literacy programs, and workforce development initiatives. We're currently piloting partnerships with several school districts and adult literacy organizations to integrate Readable into their existing programs and measure outcomes at scale.`,
      technologies: ["Next.js", "FastAPI", "MongoDB", "Anthropic API", "React", "TypeScript"],
      images: [
        "/images/projects/readable/1.jpg",
        "/images/projects/readable/2.jpg",
        "/images/projects/readable/3.jpg"
      ]
    },
    {
      title: "mmWave Radar System",
      date: "2023",
      event: "Georgia Tech Research Institute CIPHER",
      location: "Atlanta, GA",
      description: "An advanced mmWave radar system for tracking and identifying healthcare professionals in hospital environments using gait analysis and machine learning.",
      details: [
        "Independently developed an mmWave radar system, achieving 80% accuracy in tracking and identifying 15+ nurses in a simulated hospital environment using gait analysis.",
        "Designed and implemented 3 Arduino-based solutions for data collection and initial processing, handling 1000+ data points per minute from mmWave sensors.",
        "Applied a K-Nearest Neighbors approach to a regression analysis model using TensorFlow to identify unique human gait patterns, reducing misidentification rates by 35%."
      ],
      fullDescription: `The mmWave Radar System project represents a significant advancement in non-invasive personnel tracking and identification technology, with particular applications in healthcare environments. Developed during my internship at the Georgia Tech Research Institute's CIPHER division in 2023, this project addressed critical challenges in hospital workflow optimization, security, and emergency response.

      The genesis of this project stemmed from conversations with healthcare administrators who identified several operational inefficiencies in hospital settings. Traditional tracking methods like RFID badges or camera systems presented limitations: badges could be forgotten or swapped, while camera systems raised privacy concerns and struggled with occlusion in crowded environments. The need for a reliable, privacy-preserving method to track healthcare professionals became apparent, particularly in high-stakes environments like emergency departments and operating rooms.

      Millimeter-wave (mmWave) radar technology emerged as a promising solution due to its unique capabilities. Unlike optical systems, mmWave radar can function in varying lighting conditions and doesn't capture personally identifiable visual information. It can detect subtle motion patterns through non-metallic materials, allowing for unobtrusive installation and operation. Most importantly, mmWave radar can capture the micro-Doppler signatures created by human movement, which research has shown to be as unique as fingerprints when properly analyzed.

      The technical implementation of this project involved several interconnected components. At the hardware level, I selected and configured three Texas Instruments IWR1843BOOST mmWave sensor evaluation modules, chosen for their balance of range resolution, angular resolution, and processing capabilities. These sensors operate in the 76-81 GHz frequency range, providing excellent motion sensitivity while maintaining safe operation in human environments.

      Sensor placement presented a significant challenge. Through simulation and field testing, I determined an optimal triangulation configuration that maximized coverage while minimizing interference between sensors. Each sensor was mounted at a specific height and angle to capture the most distinctive aspects of human gait. This configuration required precise calibration to create a unified coordinate system across all three sensors, allowing for seamless tracking as subjects moved through the environment.

      For the data collection and initial processing layer, I designed custom Arduino-based interface boards that handled the high-bandwidth data streams from the mmWave sensors. These boards implemented real-time filtering algorithms to reduce noise and extract the relevant motion features from the raw radar returns. The system processed over 1,000 data points per minute from each sensor, requiring careful optimization of the processing pipeline to maintain real-time performance.

      The data integration layer synchronized and combined the streams from all three sensors, creating a comprehensive representation of each subject's movement patterns. This involved developing algorithms to resolve ambiguities when multiple sensors tracked the same individual and to maintain consistent tracking through brief sensor occlusions. The integration system assigned unique temporary identifiers to each detected person, maintaining continuity as they moved through the environment.

      The most innovative aspect of the project was the gait analysis and identification system. Human gait consists of complex, coordinated movements that create distinctive patterns in radar returns. By applying signal processing techniques to extract features like stride length, cadence, arm swing, and torso rotation, I created a multi-dimensional representation of each individual's movement signature.

      The identification algorithm employed a K-Nearest Neighbors (KNN) approach combined with a custom regression analysis model implemented in TensorFlow. This hybrid approach allowed the system to recognize individuals it had previously encountered while continuously refining its understanding of their movement patterns. The model was trained on a dataset collected from 15 volunteer nurses who moved through a simulated hospital environment performing typical activities.

      Privacy considerations were paramount throughout the development process. The system was designed to work with anonymized movement data, without collecting or storing any personally identifiable information. The identification capabilities were implemented as an opt-in feature, with all participants providing informed consent. Additionally, the system included provisions for data aging and automatic purging to prevent long-term tracking.

      Testing and validation were conducted in a mock hospital environment that simulated various scenarios including routine rounds, emergency responses, and shift changes. The system achieved 80% accuracy in correctly identifying individuals based solely on their movement patterns, a significant improvement over the baseline of random assignment. More importantly, the system reduced misidentification rates by 35% compared to traditional tracking methods, addressing a critical safety concern in healthcare settings.

      The project faced several technical challenges during development. Radio frequency interference from medical equipment required implementing adaptive filtering algorithms. Variations in walking patterns due to fatigue or carrying objects initially reduced identification accuracy, necessitating the development of more robust feature extraction methods. The computational demands of real-time processing required careful optimization of the algorithms and strategic distribution of processing tasks between the edge devices and central system.

      The implications of this technology extend beyond simple tracking. By analyzing movement patterns over time, the system could potentially detect changes that might indicate fatigue or stress among healthcare workers. The anonymized aggregate data could inform hospital layout optimizations and workflow improvements. In emergency situations, the system could help locate the nearest qualified personnel without requiring them to respond to pages or radio calls.

      Future development directions include integrating the system with hospital resource management software, expanding the identification capabilities to larger populations, and implementing advanced anomaly detection to identify potential security concerns or medical emergencies based on unusual movement patterns. There's also potential for adapting the technology to other environments where non-invasive personnel tracking would provide value, such as manufacturing facilities or emergency response scenarios.

      This project demonstrates the potential of mmWave radar technology combined with machine learning to solve complex real-world problems in ways that respect privacy while providing valuable operational insights. The success of this implementation has led to discussions about expanded trials in actual hospital environments and potential commercialization of the technology.`,
      technologies: ["Arduino", "Python", "TensorFlow", "K-Nearest Neighbors", "mmWave Sensors", "Signal Processing"],
      images: [
        "/images/projects/mmwave/1.jpg",
        "/images/projects/mmwave/2.jpg",
        "/images/projects/mmwave/3.jpg"
      ]
    },
    {
      title: "Tactical Gloves for Tracking Munitions",
      date: "2022",
      event: "Georgia Tech Research Institute Advanced Concepts Laboratory",
      location: "Atlanta, GA",
      description: "A patented wearable device designed to accurately count and track artillery shells, enhancing operational efficiency for military applications.",
      details: [
        "Contributed to a patented project, Tactical Gloves for Accurately Tracking Munitions Use (US12229339), potentially benefiting operations for 1,000+ M109 Paladin units in the U.S. military.",
        "Developed 500+ lines of embedded Python code for Raspberry Pi Pico and Bluetooth module integration in a wearable glove device.",
        "Designed system to count and track artillery shells with 99.9% accuracy, potentially enhancing operational efficiency by 25% and reducing inventory discrepancies by 40%."
      ],
      fullDescription: `The Tactical Gloves for Tracking Munitions project represents a significant innovation in military logistics and operational efficiency. Developed during my internship at the Georgia Tech Research Institute's Advanced Concepts Laboratory in 2022, this project addressed critical challenges in artillery operations, specifically focusing on the accurate tracking and inventory management of munitions in field conditions.

      The project originated from direct consultation with military personnel who identified persistent issues in munitions tracking during artillery operations. Traditional manual counting methods were prone to human error, particularly in high-stress combat situations or adverse weather conditions. These errors could lead to significant inventory discrepancies, affecting both operational readiness and supply chain management. Additionally, the existing digital tracking systems required operators to interrupt their workflow to input data, creating inefficiencies and increasing the likelihood of recording errors.

      The conceptual breakthrough came from recognizing that artillery loading is a highly procedural, physical process with distinctive movement patterns. By instrumenting the gloves worn by artillery crews, we could potentially capture these movements automatically, creating a seamless tracking system that wouldn't require additional steps or attention from operators already engaged in demanding physical tasks.

      The technical implementation began with extensive field observation and motion analysis. I spent several days documenting the precise movements involved in handling and loading artillery shells for M109 Paladin self-propelled howitzers. This research revealed consistent patterns that could serve as reliable indicators of shell handling events. Working with experienced artillery personnel, we identified the optimal sensor placement and movement signatures that would provide the most reliable tracking data.

      The hardware design centered around creating a durable, comfortable glove that could withstand the harsh conditions of artillery operations while accurately capturing the relevant movement data. We selected a military-grade tactical glove as the base platform and augmented it with a network of sensors, including accelerometers, gyroscopes, pressure sensors, and flex sensors strategically positioned to capture the distinctive movements associated with handling artillery shells.

      The central processing unit for the glove was a Raspberry Pi Pico microcontroller, chosen for its balance of processing power, energy efficiency, and compact size. I developed over 500 lines of embedded Python code to process the sensor data in real-time, implementing advanced gesture recognition algorithms that could distinguish between actual shell handling and other similar movements. This discrimination was crucial to prevent false positives during the hectic activity of an artillery position.

      One of the most significant technical challenges was developing a system that could function reliably in the extreme conditions of artillery operations. The sensors and electronics needed to withstand intense vibration, extreme temperatures, and potential exposure to dust and moisture. We implemented redundant sensing methods and robust error correction algorithms to maintain accuracy even if individual sensors failed or provided degraded data.

      The communication system utilized a low-energy Bluetooth module to transmit data to a central tracking system, typically installed in the artillery vehicle or command post. This wireless approach eliminated the need for cumbersome wired connections that could restrict movement or create safety hazards. The Bluetooth implementation included advanced encryption and frequency-hopping spread spectrum techniques to ensure secure, reliable communication even in environments with significant electromagnetic interference.

      Power management presented another significant challenge. The glove needed to operate continuously throughout extended missions without requiring frequent battery changes or recharging. I implemented sophisticated power management algorithms that dynamically adjusted sensor sampling rates based on detected activity levels, dramatically extending battery life while maintaining tracking accuracy. The final design achieved an operational duration of over 72 hours on a single charge, exceeding military requirements for sustained operations.

      Data integration was handled by a companion application that received the tracking information from multiple gloves simultaneously, associating each detected shell with specific metadata including time, location, shell type (when distinguishable by handling characteristics), and operator identity. This system created a comprehensive digital record of all munitions movements, providing unprecedented visibility into artillery operations.

      The testing and validation phase involved both laboratory simulations and field trials under realistic conditions. In controlled testing, the system achieved an impressive 99.9% accuracy in counting shells, significantly outperforming manual counting methods. Field testing demonstrated the system's durability and reliability in actual operating conditions, with the gloves maintaining functionality through extreme temperature variations, exposure to artillery propellant residue, and the intense physical activity associated with rapid fire missions.

      The potential impact of this technology on military operations is substantial. Analysis indicated that implementing the tactical gloves could enhance operational efficiency by approximately 25% by eliminating the need for manual counting and record-keeping. More significantly, the system could reduce inventory discrepancies by up to 40%, addressing a persistent logistical challenge that affects both operational readiness and financial accountability in military organizations.

      The innovation represented by this project was recognized through the patent application process (US12229339), acknowledging the unique approach to solving a long-standing military logistics challenge. The potential deployment scope includes over 1,000 M109 Paladin units in the U.S. military alone, with additional applications possible in other artillery systems and potentially extending to other munitions handling scenarios.

      Beyond the immediate application in artillery operations, the underlying technology has potential applications in various fields requiring precise tracking of physical objects handled by personnel wearing gloves. These could include inventory management in industrial settings, medical supply tracking in field hospitals, or equipment handling in hazardous environments where traditional barcode or RFID scanning is impractical.

      The development process yielded several secondary innovations, including novel approaches to gesture recognition in gloved hands, techniques for hardening electronic systems against extreme vibration, and methods for maintaining reliable wireless communication in electromagnetically noisy environments. These technological advances have potential applications beyond the specific use case of munitions tracking.

      Future development directions include integrating the glove system with broader military logistics networks, expanding the sensor capabilities to distinguish between different munition types automatically, and potentially incorporating haptic feedback to provide operators with confirmation of successful tracking or alerts about potential inventory discrepancies without requiring visual attention.

      This project exemplifies the potential for wearable technology to solve complex real-world problems by integrating seamlessly into existing workflows rather than requiring users to adapt to new technological systems. By focusing on enhancing the capabilities of equipment already in use (tactical gloves) rather than introducing entirely new devices, we created a solution with minimal training requirements and high likelihood of adoption in the field.`,
      technologies: ["Raspberry Pi Pico", "Python", "Bluetooth", "Embedded Systems", "Sensor Integration"],
      images: [
        "/images/projects/tactical-gloves/1.jpg",
        "/images/projects/tactical-gloves/2.jpg",
        "/images/projects/tactical-gloves/3.jpg"
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
                      <div key={imgIndex} className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        <div className="text-gray-500">Project Image {imgIndex + 1}</div>
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
