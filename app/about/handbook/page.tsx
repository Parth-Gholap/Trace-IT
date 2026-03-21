export default function HandbookPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Employee Handbook
          </span>
        </h1>
        
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg p-8 border border-cyan-400/30">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission & Values</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Mission</h3>
                <p className="text-gray-300">
                  To reunite people with their lost belongings through innovative technology and community collaboration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Core Values</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Integrity - We operate with honesty and transparency</li>
                  <li>Innovation - We constantly improve our technology and processes</li>
                  <li>Community - We believe in the power of helping others</li>
                  <li>Excellence - We strive for the highest quality in everything we do</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-8 border border-purple-400/30">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Work Culture</h2>
            <p className="text-gray-300 mb-4">
              At TraceIT, we foster a collaborative and innovative environment where everyone's voice is heard. 
              We believe in work-life balance and encourage continuous learning and growth.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-cyan-400">Flexible Hours</h3>
                <p className="text-gray-300 text-sm">We understand that creativity doesn't follow a 9-5 schedule</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-cyan-400">Remote Options</h3>
                <p className="text-gray-300 text-sm">Work from anywhere when needed</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-cyan-400">Learning Budget</h3>
                <p className="text-gray-300 text-sm">Investment in your professional development</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-cyan-400">Team Events</h3>
                <p className="text-gray-300 text-sm">Regular team building and social activities</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg p-8 border border-cyan-400/30">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Code of Conduct</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Treat everyone with respect and dignity</li>
              <li>Maintain confidentiality of user data and company information</li>
              <li>Report any issues or concerns to management</li>
              <li>Follow security protocols and best practices</li>
              <li>Contribute positively to the team environment</li>
              <li>Take ownership of your work and responsibilities</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-8 border border-purple-400/30">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-cyan-400">Health & Wellness</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Health insurance coverage</li>
                  <li>Mental health support</li>
                  <li>Gym membership discounts</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-cyan-400">Professional Growth</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Conference attendance</li>
                  <li>Online course subscriptions</li>
                  <li>Mentorship programs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg p-8 border border-cyan-400/30">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Communication Guidelines</h2>
            <p className="text-gray-300 mb-4">
              We believe in clear, transparent, and respectful communication. Here are our guidelines:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Use professional language in all communications</li>
              <li>Respond to emails and messages within 24 hours</li>
              <li>Participate actively in team meetings</li>
              <li>Share ideas and feedback constructively</li>
              <li>Document important decisions and processes</li>
            </ul>
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
