import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="hero min-h-screen flex items-center justify-center">
        <div className="container">
          <div className="hero-content text-center">
            <p className="greeting-text text-lg text-portfolio-text-secondary mb-2">hello</p>
            <p className="text-lg text-portfolio-text-secondary mb-4">my name is</p>
            <h2 className="main-name font-alfa text-6xl md:text-8xl text-portfolio-text-primary mb-8">Saqlain</h2>
            <div className="welcome-section">
              <p className="welcome-text text-lg text-portfolio-text-secondary mb-4">
                I welcome you to see
              </p>
              <p className="work-text text-lg text-portfolio-text-secondary font-semibold">
                my work
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
