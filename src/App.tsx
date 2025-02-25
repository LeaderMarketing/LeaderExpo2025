import { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { HeroSection } from './components/HeroSection/HeroSection';
import ScheduleSection from './components/ScheduleSection/ScheduleSection';
import { VendorsSection } from './components/VendorsSection/VendorsSection';
import KeynoteSpeakersSection from './components/KeynoteSpeakersSection/KeynoteSpeakersSection';
import { WhyAttendSection } from './components/WhyAttendSection/WhyAttendSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import GallerySection from './components/GallerySection/GallerySection';
import { VideosSection } from './components/VideosSection/VideosSection';
import { CitiesSection } from './components/CitiesSection/CitiesSection';
import { RegistrationSection } from './components/RegistrationSection/RegistrationSection';
import { HelpSection } from './components/HelpSection/HelpSection';

type Location = 'ADELAIDE' | 'BRISBANE' | 'SYDNEY' | 'MELBOURNE' | 'PERTH';

function App() {
  const [showBackground, setShowBackground] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | undefined>(undefined);
  const videoUrl = `https://player.vimeo.com/video/1059933625?background=1&autoplay=1&loop=1&muted=1&controls=0&transparent=1&autopause=0&api=1&player_id=background`;

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsPastHero(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoModalClose = () => {
    // Start fade out
    setShowBackground(false);
    
    // Wait for fade out, then reset video
    setTimeout(() => {
      const iframe = document.querySelector('.background-video') as HTMLIFrameElement;
      if (iframe) {
        // Force video refresh by adding timestamp
        iframe.src = `${videoUrl}&t=${Date.now()}`;
      }
      // Show video again after it's been reset
      setShowBackground(true);
    }, 600); // Match CSS transition duration
  };

  return (
    <div className="app" data-past-hero={isPastHero}>
      <div className="background-video-wrapper" style={{ opacity: showBackground ? 1 : 0 }}>
        <iframe 
          className="background-video"
          src={videoUrl}
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Background Video"
        ></iframe>
      </div>
      <NavigationBar />
      <div className="content">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="vendors">
          <VendorsSection />
        </div>
        <div id="states">
          <CitiesSection onSelectLocation={setSelectedLocation} />
        </div>
        <div id="keynote-speakers">
          <KeynoteSpeakersSection />
        </div>
        <div className="why-attend-testimonials-wrapper">
          <div id="why-attend">
            <WhyAttendSection />
          </div>
          <div id="testimonials">
            <TestimonialsSection />
          </div>
        </div>
        <div id="videos">
          <VideosSection onModalClose={handleVideoModalClose} />
        </div>
        <div id="agenda">
          <ScheduleSection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="registration">
          <RegistrationSection selectedLocation={selectedLocation} />
        </div>
        <div id="help">
          <HelpSection />
        </div>
      </div>
    </div>
  );
}

export default App;
