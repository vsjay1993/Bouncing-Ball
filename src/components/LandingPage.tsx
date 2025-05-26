import BouncingBalls from './BouncingBalls';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            BallBounce
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#demo" className="hover:text-blue-400 transition-colors">Demo</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Interactive Ball Physics
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the mesmerizing dance of bouncing balls in this interactive physics simulation.
                Watch as colorful spheres create patterns through natural motion.
              </p>
            </div>

            {/* Animation Demo */}
            <div id="demo" className="mb-16">
              <BouncingBalls />
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Physics Simulation</h3>
                <p className="text-gray-300">
                  Real-time physics calculations create natural and fluid movements.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Interactive Design</h3>
                <p className="text-gray-300">
                  Responsive and interactive elements that adapt to your screen.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Color Harmony</h3>
                <p className="text-gray-300">
                  Carefully selected color palette for a visually pleasing experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Get in Touch
            </h2>
            <p className="text-gray-300 mb-8">
              Interested in learning more about this project? Feel free to reach out!
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Contact Us
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p>© 2024 BallBounce. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage; 