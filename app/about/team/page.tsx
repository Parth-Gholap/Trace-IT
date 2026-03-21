export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Meet the Team
          </span>
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg p-6 border border-cyan-400/30">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-black">AK</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Ayush Karan</h3>
            <p className="text-cyan-400 text-center mb-4">Team Lead</p>
            <p className="text-gray-300 text-sm text-center">
              Leading the team with vision and expertise in project management and technical direction.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-6 border border-purple-400/30">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-black">PG</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Parth Gholap</h3>
            <p className="text-purple-400 text-center mb-4">Lead Developer</p>
            <p className="text-gray-300 text-sm text-center">
              Computer Science student with passion for solving real-world problems through technology.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg p-6 border border-cyan-400/30">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-black">MK</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Manasvi Kirkire</h3>
            <p className="text-cyan-400 text-center mb-4">UI/UX Designer</p>
            <p className="text-gray-300 text-sm text-center">
              Creative designer focused on making the user experience intuitive and enjoyable.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-6 border border-purple-400/30">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-black">OP</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Om Patel</h3>
            <p className="text-purple-400 text-center mb-4">Backend Developer</p>
            <p className="text-gray-300 text-sm text-center">
              Ensures our platform is scalable, secure, and performs optimally under load.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg p-6 border border-cyan-400/30">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-black">AJ</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Abhiral Jain</h3>
            <p className="text-cyan-400 text-center mb-4">Mobile Developer</p>
            <p className="text-gray-300 text-sm text-center">
              Created our mobile application for iOS and Android platforms.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-6 border border-purple-400/30">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-black">RR</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Rishi</h3>
            <p className="text-purple-400 text-center mb-4">Data Scientist</p>
            <p className="text-gray-300 text-sm text-center">
              Machine learning expert who developed our intelligent matching algorithms.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Supervision</h2>
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-lg p-6 border border-yellow-400/30">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-black">KS</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Khushal Sir</h3>
              <p className="text-yellow-400 text-center mb-4">Supervisor</p>
              <p className="text-gray-300 text-sm text-center">
                Providing guidance and mentorship throughout the project development process.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg p-8 border border-cyan-400/30">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-gray-300 mb-6">
            We're always looking for talented individuals who share our passion for helping people.
          </p>
          <a 
            href="/about/careers" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
          >
            View Open Positions
          </a>
        </div>

        <div className="text-center mt-8">
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
