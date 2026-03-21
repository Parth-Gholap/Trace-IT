export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Careers at TraceIT
          </span>
        </h1>
        <p className="text-lg text-gray-300 text-center mb-16">
          Join our team and help us build the future of lost and found technology.
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Open Positions</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                  <p className="text-gray-300 mb-4">Help us build beautiful and intuitive user interfaces for TraceIT.</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>💼 Full-time</span>
                    <span>📍 VIT Bhopal</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300">
                  Apply
                </button>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
                  <p className="text-gray-300 mb-4">Work on our API and database systems to power the TraceIT platform.</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>💼 Full-time</span>
                    <span>📍 Remote</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300">
                  Apply
                </button>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
                  <p className="text-gray-300 mb-4">Create amazing user experiences and visual designs for our platform.</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>💼 Part-time</span>
                    <span>📍 VIT Bhopal</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl p-8 border border-cyan-400/30">
            <h2 className="text-2xl font-semibold mb-4">Don't see a fit?</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future openings.
            </p>
            <a
              href="mailto:parthgholap18@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
            >
              📧 Send Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
