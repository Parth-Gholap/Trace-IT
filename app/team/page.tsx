export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Meet Our Team
          </span>
        </h1>
        <p className="text-lg text-gray-300 text-center mb-16">
          We're a passionate team of students and developers working together to make lost and found easier for everyone.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">
              PG
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Parth Gholap</h3>
            <p className="text-cyan-400 text-center mb-3">Founder & Lead Developer</p>
            <p className="text-gray-300 text-sm mb-4">Computer Science student passionate about solving real-world problems through technology.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300">React</span>
              <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300">Node.js</span>
              <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300">AI/ML</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <a href="mailto:parthgholap18@gmail.com" className="hover:text-cyan-400 transition-colors">
                📧
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl p-8 border border-cyan-400/30">
            <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for passionate individuals to help us improve TraceIT.
            </p>
            <a
              href="mailto:parthgholap18@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
            >
              📧 Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
