import './App.css'
import logo from './assets/logo.png'
import slider1 from './assets/slider-1.png'
import slider2 from './assets/slider-2.png'
import slider3 from './assets/slider-3.png'
import slider4 from './assets/slider-4.png'
import { useState, useEffect } from 'react'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const slides = [
    {
      image: slider1,
      quote: "Discover Your Perfect Look",
      subtext: "Connect with top-rated stylists and barbers in your area"
    },
    {
      image: slider2,
      quote: "Book in Seconds, Look Amazing",
      subtext: "Your dream appointment is just a tap away"
    },
    {
      image: slider3,
      quote: "Self-Care Made Simple",
      subtext: "From haircuts to massages, we've got you covered"
    },
    {
      image: slider4,
      quote: "Transform Your Routine",
      subtext: "Experience the future of personal care services"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Partner logos - you can replace these with actual partner logos
  const partners = [
    { name: 'Salon Elite', logo: '💇‍♀️' },
    { name: 'Barber Pro', logo: '✂️' },
    { name: 'Spa Luxury', logo: '🧖‍♀️' },
    { name: 'Fitness Plus', logo: '💪' },
    { name: 'Nail Studio', logo: '💅' },
    { name: 'Beauty Center', logo: '✨' },
    { name: 'Massage Therapy', logo: '💆‍♂️' },
    { name: 'Hair Studio', logo: '💇‍♂️' },
  ]

  return (
    <div className="app">
      {/* Header Navigation */}
      <nav className="header-nav">
        <div className="nav-container">
          <img src={logo} alt="Kwipa Logo" className="nav-logo" onClick={() => scrollToSection('home')} />
          
          <div className="nav-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
            <a href="#app" onClick={(e) => { e.preventDefault(); scrollToSection('app'); }}>App</a>
            <a href="#partners" onClick={(e) => { e.preventDefault(); scrollToSection('partners'); }}>Partners</a>
          </div>

          <button className="download-btn" onClick={() => scrollToSection('app')}>
            Download Now
          </button>
        </div>
      </nav>

      {/* Image Slider Section */}
      <section className="hero-slider" id="home">
        <div className="slider-container">
          <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.image} alt={slide.quote} className="slide-image" />
                <div className="slide-overlay">
                  <h2 className="slide-quote">{slide.quote}</h2>
                  <p className="slide-subtext">{slide.subtext}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            className="slider-arrow prev" 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button 
            className="slider-arrow next" 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
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

      {/* App Showcase Section */}
      <section className="app-showcase" id="app">
        <div className="app-showcase-container">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="screen-content">
                  <p className="screen-placeholder">📱</p>
                  <p className="screen-text">App Screenshot</p>
                  <p className="screen-subtext">Place your app screenshot here</p>
                </div>
              </div>
            </div>
          </div>

          <div className="app-info">
            <h2>Experience Kwipa</h2>
            <p>
              Download the app and discover a new way to manage your self-care routine. 
              Book appointments, find the perfect stylist, and enjoy seamless service—all from your phone.
            </p>
            
            <div className="app-features-list">
              <div className="mini-feature">
                <span className="mini-icon">⚡</span>
                <span>Instant Booking</span>
              </div>
              <div className="mini-feature">
                <span className="mini-icon">💳</span>
                <span>Secure Payments</span>
              </div>
              <div className="mini-feature">
                <span className="mini-icon">🔔</span>
                <span>Smart Reminders</span>
              </div>
            </div>

            <div className="app-download-badges">
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
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="reviews-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="reviews-subtitle">Real experiences from people who love Kwipa</p>
        
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">
              "Kwipa made finding the perfect barber so easy! I loved being able to see their portfolio 
              before booking. My haircut turned out exactly how I wanted!"
            </p>
            <div className="review-author">
              <div className="author-avatar">👨</div>
              <div className="author-info">
                <h4>Ahmed K.</h4>
                <p>Regular Client</p>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">
              "As a salon owner, Kwipa has transformed my business. The calendar management is so simple, 
              and I never miss an appointment thanks to the automated reminders!"
            </p>
            <div className="review-author">
              <div className="author-avatar">👩</div>
              <div className="author-info">
                <h4>Fatima M.</h4>
                <p>Salon Owner</p>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">
              "I can finally book my spa appointments at 2 AM if I want! The app is incredibly user-friendly, 
              and I love that I can pay directly through it. Game changer!"
            </p>
            <div className="review-author">
              <div className="author-avatar">👨</div>
              <div className="author-info">
                <h4>Youssef R.</h4>
                <p>Verified User</p>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">
              "The verified reviews with photos helped me choose the best stylist for my hair type. 
              The result was amazing! I've already booked my next appointment."
            </p>
            <div className="review-author">
              <div className="author-avatar">👩</div>
              <div className="author-info">
                <h4>Sara L.</h4>
                <p>Happy Client</p>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">
              "Managing my barber shop has never been easier. The client database feature helps me 
              remember everyone's preferences. My customers love the personal touch!"
            </p>
            <div className="review-author">
              <div className="author-avatar">👨</div>
              <div className="author-info">
                <h4>Karim H.</h4>
                <p>Barber Professional</p>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">
              "I love that I can add notes and upload reference photos before my appointment. 
              My stylist knew exactly what I wanted. No more miscommunication!"
            </p>
            <div className="review-author">
              <div className="author-avatar">👩</div>
              <div className="author-info">
                <h4>Leila A.</h4>
                <p>Satisfied Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section" id="partners">
        <h2 className="section-title">Our Partners & Network</h2>
        <p className="partners-subtitle">Trusted by leading professionals across the industry</p>
        
        <div className="partners-slider">
          <div className="partners-track">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">{partner.logo}</div>
                <p className="partner-name">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logo} alt="Kwipa Logo" className="footer-logo" />
            <p className="footer-tagline">Bringing self-care to your fingertips</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
              <li><a href="#app" onClick={(e) => { e.preventDefault(); scrollToSection('app'); }}>Download App</a></li>
              <li><a href="#partners" onClick={(e) => { e.preventDefault(); scrollToSection('partners'); }}>Partners</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Kwipa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
