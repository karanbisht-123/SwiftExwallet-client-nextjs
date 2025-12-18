import { Download, Book, LineChart, Rocket, FileText, Shield, TrendingUp } from 'lucide-react';

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-[#020E46] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 mx-auto  bg-linear-to-r from-blue-500 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl">
              <FileText className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Discover the Technology and Vision
            <br />
            Behind SwiftEx
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our comprehensive whitepaper detailing the innovation driving the future of
            decentralized finance
          </p>
        </div>

        {/* Main Whitepaper Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl mb-16 border-4 border-blue-400/20">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 sm:p-12 border-b-4 border-blue-400/30">
            <div className="flex items-start gap-6">
              <div className="hidden sm:block flex-shrink-0">
                <div className="w-24 h-24  bg-linear-to-r from-blue-500 to-blue-800 rounded-2xl flex items-center justify-center shadow-xl">
                  <Book className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Executive Summary
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our whitepaper outlines the groundbreaking technology and innovative approach that
                  sets SwiftEx apart in the Blockchain-Crypto space. We detail our unique mechanism,
                  tokenomics, and roadmap for the future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://swift-ex-web-app.s3.us-east-2.amazonaws.com/s3-objects/White+Paper+SwiftEX+%2B%2B%2B.pdf"
                    download
                    className="inline-flex items-center px-8 py-4  bg-linear-to-r from-blue-500 to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="mr-3 w-5 h-5" />
                    Download Whitepaper
                  </a>
                  {/* <button className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:border-amber-400 hover:text-amber-600 transition-all duration-300">
                    <Book className="mr-3 w-5 h-5" />
                    Read Online
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 divide-x divide-gray-200 bg-white">
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">18+</div>
              <div className="text-sm text-gray-600 font-medium">Pages</div>
            </div>
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-sm text-gray-600 font-medium">Chapters</div>
            </div>
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
              <div className="text-sm text-gray-600 font-medium">Latest Edition</div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What's Inside the Whitepaper
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">In-Depth Analysis</h3>
              <p className="text-slate-300 leading-relaxed">
                Comprehensive explanation of our blockchain architecture, smart contract
                implementation, and token utility mechanisms.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <LineChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Market Strategy</h3>
              <p className="text-slate-300 leading-relaxed">
                Our approach to market penetration, competitive analysis, and long-term growth
                strategy in the evolving crypto landscape.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Future Roadmap</h3>
              <p className="text-slate-300 leading-relaxed">
                Detailed timeline of project milestones, feature releases, and strategic
                partnerships planned for the next 3-5 years.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 border border-slate-700/50">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Technical Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Security Architecture</h3>
                <p className="text-slate-300">
                  Multi-layer security protocols, audit reports, and compliance frameworks ensuring
                  maximum protection.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Tokenomics Model</h3>
                <p className="text-slate-300">
                  Detailed breakdown of token distribution, vesting schedules, and economic
                  incentive structures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Market Analysis</h3>
                <p className="text-slate-300">
                  In-depth research on market trends, user demographics, and competitive
                  positioning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Development Roadmap</h3>
                <p className="text-slate-300">
                  Quarter-by-quarter breakdown of feature releases, partnerships, and ecosystem
                  expansion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-2xl border-4 border-amber-400/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have Questions About Our Whitepaper?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to discuss the technical details, answer your questions,
            and explore potential partnerships.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-linear-to-r from-blue-500 to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Our Team
            </a>
            {/* <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:border-amber-400 hover:text-amber-600 transition-all duration-300"
            >
              Schedule a Demo
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
