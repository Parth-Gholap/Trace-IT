export default function HandbookPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Employee Handbook
          </span>
        </h1>
        <p className="text-lg text-gray-300 text-center mb-16">
          Our guide to working at TraceIT and building amazing products together.
        </p>

        <div className="space-y-12">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">📖</span>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-300 mb-4">
              At TraceIT, we're on a mission to help people reconnect with their lost belongings through smart technology and community collaboration.
            </p>
            <p className="text-gray-300">
              We believe that every lost item has a story and deserves to find its way back home.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">👥</span>
              <h2 className="text-2xl font-semibold">Team Values</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>• Community First: We're built by students, for students</li>
              <li>• Innovation: Always looking for better ways to solve problems</li>
              <li>• Excellence: High standards in everything we do</li>
              <li>• Collaboration: We work best when we work together</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🛡️</span>
              <h2 className="text-2xl font-semibold">Code of Conduct</h2>
            </div>
            <p className="text-gray-300 mb-4">
              We're committed to providing a safe, inclusive, and welcoming environment for everyone.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• Respect others and their opinions</li>
              <li>• Be inclusive and welcoming to all</li>
              <li>• Focus on what's best for the community</li>
              <li>• Show empathy towards other community members</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">❤️</span>
              <h2 className="text-2xl font-semibold">Work-Life Balance</h2>
            </div>
            <p className="text-gray-300 mb-4">
              We believe in working hard and having fun. Our team is made up of students, so we understand the importance of balancing work with studies.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• Flexible working hours around class schedules</li>
              <li>• Understanding during exam periods</li>
              <li>• Focus on results, not hours worked</li>
              <li>• Regular team activities and celebrations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
