import './App.css'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <img src={logo} alt="Kwipa Logo" className="logo" />
        </nav>
        
        <div className="hero-content">
          <h1 className="hero-title">
            Your Self-Care, <span className="highlight">Simplified</span>
          </h1>
          <p className="hero-subtitle">
            Kwipa is a modern, user-friendly SaaS platform that connects clients with local barbershops, 
            beauty salons, spas, and personal care professionals. Discover, book, and pay for services like 
            haircuts, massages, nail treatments, personal training, and more—all in one place.
          </p>
          <p className="hero-tagline">
            <strong>The Glovo of personal care services</strong> — bringing self-care to your fingertips.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        
        {/* Client Features */}
        <div className="feature-category">
          <h3 className="category-title">For Clients</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h4>Rich Professional Profiles</h4>
              <p>
                Discover talented stylists through dynamic portfolios featuring high-quality photo galleries, 
                detailed biographies, and specialized skills like "Curly Hair Specialist," "Expert Fades," 
                or "Blonde Coloring."
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h4>Service-Specific Booking</h4>
              <p>
                Book named services like "Men's Haircut & Beard Trim" rather than generic time slots. 
                Know exactly what to expect for timing and cost.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h4>Transparent Pricing</h4>
              <p>
                Every service displays clear pricing and estimated duration upfront. 
                No surprises—plan your schedule and budget with confidence.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h4>Verified Reviews with Photos</h4>
              <p>
                Only completed bookings can be reviewed. Upload photos of your results to provide 
                authentic social proof and help others find the perfect stylist.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h4>In-App Messaging & Notes</h4>
              <p>
                Add booking notes or upload reference photos to communicate your specific requests 
                before your appointment—ensuring you get exactly what you want.
              </p>
            </div>
          </div>
        </div>

        {/* Business Features */}
        <div className="feature-category">
          <h3 className="category-title">For Businesses</h3>
          <div className="features-grid">
            <div className="feature-card business">
              <div className="feature-icon">📆</div>
              <h4>Ultra-Simple Calendar</h4>
              <p>
                Visual, intuitive scheduling that's easier than a paper appointment book. 
                View daily and weekly schedules at a glance, manage bookings with a single tap.
              </p>
            </div>

            <div className="feature-card business">
              <div className="feature-icon">👥</div>
              <h4>Client Database (CRM Lite)</h4>
              <p>
                Automatic client profiles with contact information, appointment history, and personal notes. 
                Remember preferences like "Likes a #2 guard" to build lasting loyalty.
              </p>
            </div>

            <div className="feature-card business">
              <div className="feature-icon">📸</div>
              <h4>Effortless Portfolio Management</h4>
              <p>
                Snap a photo and upload to your gallery in seconds. 
                Showcase your best work and attract more clients effortlessly.
              </p>
            </div>

            <div className="feature-card business">
              <div className="feature-icon">📱</div>
              <h4>Automated Reminders</h4>
              <p>
                Reduce no-shows with automated appointment reminders via SMS or WhatsApp. 
                Keep your schedule full and clients informed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Get Started with Kwipa</h2>
        <p>Download our app and experience the future of personal care services</p>
        
        <div className="app-badges">
          <a href="#" className="app-badge" aria-label="Download on Google Play">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
            />
          </a>
          <a href="#" className="app-badge" aria-label="Download on the App Store">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="Download on the App Store" 
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Kwipa. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
