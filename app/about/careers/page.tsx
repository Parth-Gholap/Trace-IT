export default function AboutCareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Careers at TraceIT
          </span>
        </h1>
        <p className="text-lg text-gray-300 text-center mb-16">
          Join our mission to reunite people with their lost belongings through innovative technology.
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg p-6 border border-cyan-400/30">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Make an Impact</h3>
              <p className="text-gray-300">
                Help thousands of people recover their lost items and bring peace of mind to our community.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-6 border border-purple-400/30">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Innovation</h3>
              <p className="text-gray-300">
                Work with cutting-edge AI technology and contribute to solving real-world problems.
              </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg p-6 border border-cyan-400/30">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Growth</h3>
              <p className="text-gray-300">
                Learn from experienced mentors and develop your skills in a fast-growing startup environment.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Open Positions</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                  <p className="text-gray-300 mb-4">Help us build beautiful and intuitive user interfaces for TraceIT.</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span>💼 Full-time</span>
                    <span>📍 VIT Bhopal</span>
                    <span>🎓 Student Position</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    <strong>Requirements:</strong> React, TypeScript, Tailwind CSS, Next.js
                  </div>
                </div>
                <a
                  href="mailto:parthgholap18@gmail.com?subject=Application%20for%20Frontend%20Developer"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
                >
                  Apply
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
                  <p className="text-gray-300 mb-4">Work on our API and database systems to power the TraceIT platform.</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span>💼 Full-time</span>
                    <span>📍 Remote</span>
                    <span>🎓 Student Position</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    <strong>Requirements:</strong> Node.js, Python, PostgreSQL, REST APIs
                  </div>
                </div>
                <a
                  href="mailto:parthgholap18@gmail.com?subject=Application%20for%20Backend%20Developer"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
                >
                  Apply
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
                  <p className="text-gray-300 mb-4">Create amazing user experiences and visual designs for our platform.</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span>💼 Part-time</span>
                    <span>📍 VIT Bhopal</span>
                    <span>🎓 Student Position</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    <strong>Requirements:</strong> Figma, Adobe Creative Suite, User Research
                  </div>
                </div>
                <a
                  href="mailto:parthgholap18@gmail.com?subject=Application%20for%20UI/UX%20Designer"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
                >
                  Apply
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Marketing Intern</h3>
                  <p className="text-gray-300 mb-4">Help us grow our community and spread the word about TraceIT.</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span>💼 Internship</span>
                    <span>📍 VIT Bhopal</span>
                    <span>🎓 Student Position</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    <strong>Requirements:</strong> Social Media, Content Creation, Event Management
                  </div>
                </div>
                <a
                  href="mailto:parthgholap18@gmail.com?subject=Application%20for%20Marketing%20Intern"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl p-8 border border-cyan-400/30">
          <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-black font-bold">1</span>
              </div>
              <p className="text-sm text-gray-300">Submit Resume</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-black font-bold">2</span>
              </div>
              <p className="text-sm text-gray-300">Initial Interview</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-black font-bold">3</span>
              </div>
              <p className="text-sm text-gray-300">Technical Assessment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-black font-bold">4</span>
              </div>
              <p className="text-sm text-gray-300">Final Interview</p>
            </div>
          </div>
          <a
            href="mailto:parthgholap18@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
          >
            📧 Send Your Resume
          </a>
        </div>

        <div className="text-center mt-16">
          <a 
            href="/about" 
            className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
          >
            Back to About
          </a>
        </div>
      </div>
    </div>
  );
}
