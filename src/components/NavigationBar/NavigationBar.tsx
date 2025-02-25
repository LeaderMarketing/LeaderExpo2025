import { useCallback, useState, useEffect } from 'react';
import styles from './NavigationBar.module.css';

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1306 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className={`${styles.navWrapper} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img 
              src="/LeaderExpo2025/images/leaderexpo2025_logo.png" 
              alt="Leader Expo 2025 Logo" 
              onClick={() => scrollToSection('hero')}
            />
          </div>
          
          <button 
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={styles.navItems}>
            <button onClick={() => scrollToSection('vendors')}>Vendors</button>
            <button onClick={() => scrollToSection('states')}>States</button>
            <button onClick={() => scrollToSection('keynote-speakers')}>Speakers</button>
            <button onClick={() => scrollToSection('why-attend')}>Why Attend</button>
            <button onClick={() => scrollToSection('videos')}>Videos</button>
            <button onClick={() => scrollToSection('agenda')}>Agenda</button>
          </div>

          <div className={styles.registerButton}>
            <button onClick={() => scrollToSection('registration')}>Register</button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.isOpen : ''}`}>
          <div className={styles.mobileMenuContent}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              ×
            </button>
            <div className={styles.mobileNavItems}>
              <button onClick={() => { scrollToSection('vendors'); setIsMenuOpen(false); }}>Vendors</button>
              <button onClick={() => { scrollToSection('states'); setIsMenuOpen(false); }}>States</button>
              <button onClick={() => { scrollToSection('keynote-speakers'); setIsMenuOpen(false); }}>Speakers</button>
              <button onClick={() => { scrollToSection('why-attend'); setIsMenuOpen(false); }}>Why Attend</button>
              <button onClick={() => { scrollToSection('videos'); setIsMenuOpen(false); }}>Videos</button>
              <button onClick={() => { scrollToSection('agenda'); setIsMenuOpen(false); }}>Agenda</button>
              <button 
                onClick={() => { scrollToSection('registration'); setIsMenuOpen(false); }}
                className={styles.mobileRegisterButton}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
