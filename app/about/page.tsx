export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About TraceIT
          </span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              TraceIT was born from a simple observation: students constantly lose valuable items on campus, and there's no efficient way to reunite them with their owners.
            </p>
            <p className="text-gray-300 mb-4">
              What started as a small project in our computer science lab has grown into a campus-wide platform that has helped hundreds of students recover their lost items.
            </p>
            <p className="text-gray-300">
              Today, we're proud to serve the VIT Bhopal community and continue to improve our system with cutting-edge AI technology.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              Our mission is to create a seamless lost and found experience that leverages technology to bring people and their belongings back together.
            </p>
            <p className="text-gray-300 mb-4">
              We believe that every lost item has a story and deserves to find its way back home. Through community collaboration and smart matching, we make this possible.
            </p>
            <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg p-6 border border-cyan-400/30">
              <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400">1000+</div>
                  <div className="text-sm text-gray-300">Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">500+</div>
                  <div className="text-sm text-gray-300">Items Recovered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">95%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl p-8 border border-cyan-400/30">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-gray-300 mb-6">
              Help us build a better lost and found experience for everyone.
            </p>
            <a
              href="mailto:parthgholap18@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
