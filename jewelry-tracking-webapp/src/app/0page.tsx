export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-black bg-opacity-30 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto py-5 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Diamond DApp 💎
          </h1>
          <nav className="space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-indigo-400 transition"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-indigo-400 transition"
            >
              About
            </a>
            <a
              href="#cta"
              className="text-indigo-400 hover:text-purple-500 font-bold transition"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="flex flex-col justify-center items-center text-center px-4 py-56"
        id="about"
      >
        <h1 className="text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-text">
          The Future of Jewelry Verification
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Verify and transfer the authenticity of luxury diamond jewelry with
          trustless, blockchain-powered certificates. Web3 transparency, now in
          your hands.
        </p>
        <div className="mt-10 flex space-x-4">
          <a
            href="#cta"
            className="px-8 py-3 bg-indigo-500 hover:bg-purple-500 hover:scale-105 transition-transform rounded-lg text-lg font-bold"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 hover:scale-105 transition-transform rounded-lg text-lg font-bold"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Feature Section */}
      <section
        className="py-20 bg-gradient-to-bl from-purple-300 via-white to-indigo-300 py-56"
        id="features"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-purple-400 to-pink-800">
            Key Features
          </h2>

          <p className="mt-4 text-black text-center max-w-3xl mx-auto">
            Discover how our decentralized application ensures trust and
            efficiency in managing certificates for luxury diamond products.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
              <div className="flex justify-center items-center bg-indigo-500 w-12 h-12 rounded-full mb-4">
                🪙
              </div>
              <h3 className="text-2xl font-bold text-white">
                Blockchain Certificates
              </h3>
              <p className="mt-3 text-gray-300">
                Immutable, tamper-proof certificates directly linked to the
                blockchain.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
              <div className="flex justify-center items-center bg-purple-500 w-12 h-12 rounded-full mb-4">
                🔐
              </div>
              <h3 className="text-2xl font-bold text-white">
                Secure Ownership Transfer
              </h3>
              <p className="mt-3 text-gray-300">
                Seamlessly transfer ownership with a guarantee of authenticity
                at every step.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
              <div className="flex justify-center items-center bg-pink-500 w-12 h-12 rounded-full mb-4">
                🌍
              </div>
              <h3 className="text-2xl font-bold text-white">
                Transparent Verification
              </h3>
              <p className="mt-3 text-gray-300">
                Empower customers to independently validate their ownership and
                product authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-36 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-center py-56"
        id="cta"
      >
        <h2 className="text-4xl font-extrabold text-white">
          Join the Revolution
        </h2>
        <p className="mt-6 text-lg text-white">
          Start managing your luxury products with blockchain-powered
          authenticity today.
        </p>
        <a
          href="/create-certificate"
          className="mt-8 inline-block px-10 py-4 bg-white hover:bg-gray-100 hover:scale-105 text-indigo-600 font-bold rounded-lg shadow-md transition-transform"
        >
          Create Certificate
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Diamond DApp. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
