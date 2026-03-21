export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </h1>
        
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-3 text-cyan-400">How do I report a lost item?</h2>
            <p className="text-gray-300">
              Click 'Report Lost Item' on the homepage, fill in the details including description, location, and contact information. Our system will automatically search for matches.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-3 text-cyan-400">What should I include when reporting a found item?</h2>
            <p className="text-gray-300">
              Include item description, location found, date/time, and any identifying features. The more details, the better the match.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-3 text-cyan-400">How does the matching system work?</h2>
            <p className="text-gray-300">
              Our AI-powered system analyzes item descriptions, locations, and timing to find potential matches automatically.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-3 text-cyan-400">How can I contact support?</h2>
            <p className="text-gray-300">
              Email: parthgholap18@gmail.com | Phone: +91 70586 87058 | Location: VIT Bhopal University, Madhya Pradesh, India
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/chat" className="px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors">
                Start Live Chat
              </a>
              <a href="/support" className="px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 transition-colors">
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
