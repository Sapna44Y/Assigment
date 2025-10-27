import React from 'react';

const TabContent = ({ activeTab }) => {
  const content = {
    about: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed text-sm">
          Hello! I'm Sapna Yadav, a passionate Full Stack Developer with expertise in both front-end and back-end technologies. I'm dedicated to building innovative applications and delivering exceptional user experiences.
        </p>
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <h4 className="font-semibold text-white mb-2 text-sm">Education</h4>
            <p className="text-gray-300 text-sm">Bachelor of Technology (B. Tech)<br/>United College of Engineering and Management</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <h4 className="font-semibold text-white mb-2 text-sm">Contact</h4>
            <p className="text-gray-300 text-sm">
              📞 +91-9131567224<br/>
              📧 yadavsapna2004@gmail.com<br/>
              💼 LinkedIn, GitHub, LeetCode profiles available
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <h4 className="font-semibold text-white mb-2 text-sm">Location</h4>
            <p className="text-gray-300 text-sm">Based in India, open to remote opportunities worldwide</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <h4 className="font-semibold text-white mb-2 text-sm">Availability</h4>
            <p className="text-gray-300 text-sm">Immediately available for full-time positions and freelance projects</p>
          </div>
        </div>
      </div>
    ),
    experiences: (
      <div className="space-y-6">
        {/* Professional Experience */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Professional Experience</h4>
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-medium text-white text-sm">UI/UX Developer • Internship</h5>
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">Aug 2023 - Jun 2024</span>
            </div>
            <p className="text-xs text-gray-400 mb-3">Qubitlink Technologies Pvt. Ltd., Virtual</p>
            <ul className="text-gray-300 text-xs space-y-2 list-disc list-inside">
              <li>Developed multiple responsive web applications using React.js, Tailwind CSS, and Bootstrap</li>
              <li>Contributed to "WordPress Portfolio Management" project with dynamic UI components</li>
              <li>Implemented interactive features using JavaScript, HTML, and CSS</li>
              <li>Optimized frontend functionality using React Hooks, Context API, and Redux</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
              <li>Participated in code reviews and agile development processes</li>
            </ul>
          </div>
        </div>

        {/* Training & Certification */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Training & Certification</h4>
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-medium text-white text-sm">Full Stack Development Course</h5>
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">Apr 2024 – Dec 2024</span>
            </div>
            <p className="text-xs text-gray-400 mb-3">Internshala</p>
            <ul className="text-gray-300 text-xs space-y-2 list-disc list-inside">
              <li>Completed end-to-end training on MERN stack (React.js, Node.js, Express.js, MongoDB)</li>
              <li>Built YouTube Clone with video upload, likes/dislikes, and subscription features</li>
              <li>Developed Full E-Commerce Website with user authentication and order management</li>
              <li>Implemented state management using Redux and Context API</li>
              <li>Strengthened Data Structures & Algorithms through practical coding exercises</li>
              <li>Learned backend development with Node.js and Express.js</li>
              <li>Database management with MongoDB and Mongoose ODM</li>
            </ul>
          </div>
        </div>

        {/* Additional Experience */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Freelance Projects</h4>
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-medium text-white text-sm">Web Developer • Freelance</h5>
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">2023 - Present</span>
            </div>
            <p className="text-xs text-gray-400 mb-3">Various Clients</p>
            <ul className="text-gray-300 text-xs space-y-2 list-disc list-inside">
              <li>Developed custom web applications for small businesses and startups</li>
              <li>Created responsive websites using modern frontend frameworks</li>
              <li>Implemented backend APIs and database solutions</li>
              <li>Provided maintenance and support for existing web applications</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    recommended: (
      <div className="space-y-6">
        {/* Projects */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Projects</h4>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h5 className="font-medium text-white mb-2 text-sm">Social Media App</h5>
              <p className="text-gray-300 text-xs mb-2">
                Developed a Social media app using MERN stack with state management use Redux and with features like image upload, video upload, 
                likes/dislikes, comments, follow page.
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">React</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">MongoDB</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">Redux</span>
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h5 className="font-medium text-white mb-2 text-sm">E-Commerce App (Full Stack)</h5>
              <p className="text-gray-300 text-xs mb-2">
                Built fully functional e-commerce platform with React frontend, Node.js backend, 
                user authentication, product management, and cart functionality using Redux.
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">React</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">Express.js</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">MongoDB</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">JWT</span>
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h5 className="font-medium text-white mb-2 text-sm">Portfolio Website</h5>
              <p className="text-gray-300 text-xs mb-2">
                Created a responsive portfolio website showcasing projects and skills with modern UI/UX design principles.
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">React</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">Tailwind CSS</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">Framer Motion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Technical Skills</h4>
          <div className="flex flex-wrap gap-2">
            {[
              'JavaScript', 'React', 'Node.js', 'Express.js', 'NextJS', 'HTML5', 
              'CSS3', 'Tailwind CSS', 'Bootstrap', 'MongoDB', 'Angular', 'Data Structures & Algorithms',
              'REST APIs', 'Git', 'GitHub', 'Redux', 'Context API', 'Mongoose', 'JWT', 'Postman'
            ].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-medium transition-all duration-200 hover:bg-blue-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Career Objective */}
        <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/50">
          <h5 className="font-semibold text-blue-300 mb-2 text-sm">Career Objective</h5>
          <p className="text-blue-200 text-xs">
            Driven Full Stack Developer passionate about building innovative applications and 
            delivering exceptional user experiences, while continuously enhancing skills to 
            stay ahead in the ever-evolving tech landscape. Seeking opportunities to contribute 
            to meaningful projects and grow professionally in a collaborative environment.
          </p>
        </div>

        {/* Recommendations */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Recommendations</h4>
          <div className="space-y-3">
            <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
              <p className="text-gray-300 text-xs italic">"Sapna demonstrates strong problem-solving skills and attention to detail in her development work."</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
              <p className="text-gray-300 text-xs italic">"Excellent team player with great communication skills and a passion for learning new technologies."</p>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-[300px]">
      {content[activeTab]}
    </div>
  );
};

export default TabContent;
