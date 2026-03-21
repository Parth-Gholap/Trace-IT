export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Company History
          </span>
        </h1>
        
        <div className="space-y-12">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg p-8 border border-cyan-400/30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">2023 - The Beginning</h2>
            <p className="text-gray-300 mb-4">
              TraceIT started as a class project in our computer science lab at VIT Bhopal. 
              We noticed how frequently students lost valuable items on campus and how inefficient 
              the traditional lost and found system was.
            </p>
            <p className="text-gray-300">
              Our initial prototype was a simple web form that helped students report lost items 
              and allowed others to submit found items.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-8 border border-purple-400/30">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">2024 - Growth & Development</h2>
            <p className="text-gray-300 mb-4">
              After winning the campus innovation competition, we received funding to expand our platform. 
              We implemented AI-powered matching algorithms and improved the user interface significantly.
            </p>
            <p className="text-gray-300">
              The platform was adopted campus-wide and helped recover over 200 items in the first year.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg p-8 border border-cyan-400/30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">2025 - Expansion</h2>
            <p className="text-gray-300 mb-4">
              We launched our mobile app and introduced features like real-time notifications, 
              image recognition, and location-based searching.
            </p>
            <p className="text-gray-300">
              Our success rate improved to 95% and we expanded to serve multiple educational institutions.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-8 border border-purple-400/30">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Today</h2>
            <p className="text-gray-300 mb-4">
              TraceIT is now the leading lost and found platform in educational institutions across India. 
              We've helped thousands of students recover their belongings and continue to innovate 
              with new features and improvements.
            </p>
            <p className="text-gray-300">
              Our commitment to bringing people and their belongings back together remains stronger than ever.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a 
            href="/about" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
          >
            Back to About
          </a>
        </div>
      </div>
    </div>
  );
}
