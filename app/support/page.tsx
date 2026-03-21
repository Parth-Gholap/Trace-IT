export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Support Center
          </span>
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          We're here to help you 24/7. Choose your preferred support method.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="inline-flex p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg mb-6">
              <div className="text-black">💬</div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
            <p className="text-gray-300 mb-4">Get instant help from our support team</p>
            <div className="text-sm text-gray-400 mb-4">Available: 24/7</div>
            <a href="/chat" className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300">
              Start Chat
            </a>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="inline-flex p-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mb-6">
              <div className="text-black">📧</div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Email Support</h3>
            <p className="text-gray-300 mb-4">Send detailed questions and get responses within 24 hours</p>
            <div className="text-sm text-gray-400 mb-4">Available: Mon-Fri, 9AM-6PM</div>
            <a href="mailto:parthgholap18@gmail.com" className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300">
              Send Email
            </a>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="inline-flex p-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg mb-6">
              <div className="text-black">📞</div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Phone Support</h3>
            <p className="text-gray-300 mb-4">Call us for immediate assistance</p>
            <div className="text-sm text-gray-400 mb-4">Available: Mon-Fri, 9AM-6PM</div>
            <a href="tel:+917058687058" className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300">
              Call Now
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-semibold mb-4">Need Immediate Help?</h3>
            <p className="text-gray-300 mb-6">
              Our support team is ready to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/chat" className="inline-flex items-center px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors">
                💬 Start Live Chat
              </a>
              <a href="mailto:parthgholap18@gmail.com" className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 transition-colors">
                📧 Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
