import { useState, useRef, useEffect } from 'react';
import type { MouseEvent, TouchEvent } from 'react';
import styles from './VideosSection.module.css';

interface VideosSectionProps {
  onModalClose: () => void;
}

interface Video {
  id: string;
  title: string;
  description: string;
  speaker: string;
  role: string;
  duration: string;
  thumbnail: string;
}

const getComputedTranslateX = (element: HTMLElement): number => {
  const style = window.getComputedStyle(element);
  const matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41; // Get the X translation value
};

// Video data array remains the same...
const videos: Video[] = [
  {
    id: '1026735812',
    title: 'Taking Partners Forward in the Short and Long Term',
    description: `Theo Kristoris, Managing Director at Leader, spoke to the transformation in the tech scene. As AI reshapes our future, Kristoris said, "We're moving beyond traditional methods to embrace comprehensive AI solutions."`,
    speaker: 'Theo Kristoris',
    role: 'Managing Director - Leader',
    duration: '0:49',
    thumbnail: `https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/theo_isolate.png`
  },
  {
    id: '1026732368',
    title: 'Breeze Connect: Value for Partners',
    description: `Diego Torre explained to CRN how Breeze Connect are revolutionising the telecommunications landscape."We dedicate ourselves to offering partners the best value and rapid service to ensure their growth aligns with our journey."`,
    speaker: 'Diego Torre',
    role: 'Business Manager - Breeze Connect',
    duration: '0:27',
    thumbnail: `https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/diegot_isolate.png`
  },
  {
    id: '1025335015',
    title: 'How partners can get started with Ubiquiti',
    description: `Ubiquiti was in the spotlight for utilizing AI in groundbreaking ways, as presented by Chris Sutherland. By focusing on security and smart detection, Ubiquiti leads in employing AI within firewalls and camera systems.`,
    speaker: 'Chris Sutherland',
    role: 'Senior Product Manager - Leader',
    duration: '0:36',
    thumbnail: `https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/chris_isolate.png`
  },
  {
    id: '1033694932',
    title: 'Leader Expo: Face time with partners across five capital cities',
    description: `Discover how wireless and 5G can be game-changers—whether as a primary solution or a backup to keep operations running smoothly. Dive into how enterprise-grade 5G is helping businesses stay connected, resilient, and ahead of the curve.`,
    speaker: 'John Hopping',
    role: 'Director Sales Engineering APAC - Ericsson',
    duration: '1:04',
    thumbnail: `https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/johnh_isolate.png`
  },
  {
    id: '1039877243',
    title: 'End user priorities in 2025',
    description: `Symon Ten highlights the top priorities for end-users. As Windows 10 support winds down, device refresh is paramount. AI's rapid integration into business processes is also a hot topic, alongside the imperative focus on enhanced security measures.`,
    speaker: 'Symon Ten',
    role: 'Business Manager Infrastructure Solutions & Leader Brand',
    duration: '0:55',
    thumbnail: `https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/symont_isolate.png`
  },
  {
    id: '1030613395',
    title: 'Remote Management Solutions for Cellular Networks',
    description: `Francis Chu, Business Development Manager at Teltonika discusses Teltonika's Remote Management System Solutions and how they are helping partners deliver robust solutions even in complex, multi-location environments.`,
    speaker: 'Francis Chu',
    role: 'Business Development Manager - Teltonika',
    duration: '0:31',
    thumbnail: `https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/francish_isolate.png`
  },
  {
    id: '1039871213',
    title: 'Partner Challenges and Expectations',
    description: `Lachlan highlighted the critical need for expertise amidst evolving threats. With cybersecurity demands stressing IT professionals, collaboration with tech partners becomes essential to ensure effective threat management.`,
    speaker: 'Lachlan Eyers',
    role: 'Territory Account Executive - Sophos',
    duration: '1:02',
    thumbnail: `https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/lachlane_isolate.png`
  },
];

export const VideosSection = ({ onModalClose }: VideosSectionProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Handle background video playback when modal opens/closes
  useEffect(() => {
    // Use a more reliable selector to find the video element
    const bgVideo = document.querySelector('.hero video') as HTMLVideoElement | null;
    backgroundVideoRef.current = bgVideo;
    
    if (!bgVideo) {
      console.log('Background video element not found');
      return;
    }

    const debugVideoState = () => {
      console.log('Video element:', bgVideo);
      console.log('Video paused state:', bgVideo.paused);
      console.log('Video current time:', bgVideo.currentTime);
      console.log('Video ready state:', bgVideo.readyState);
    };

    if (!selectedVideo) {
      // When modal is closed
      debugVideoState();
      
      // Add a slightly longer delay to ensure browser has finished handling the modal close
      // Ensure video continues to loop and stay muted
      bgVideo.loop = true;
      bgVideo.muted = true;
      
      // Simply resume playback
      const playPromise = bgVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error resuming background video:', error);
          // Try one more time after a short delay
          setTimeout(() => bgVideo.play().catch(console.error), 100);
        });
      }
    } else {
      // When modal is opened
      console.log('Modal opened - Current video state:');
      debugVideoState();
    }
  }, [selectedVideo]);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    setIsMouseDown(true);
    setIsDragging(false);
    carouselRef.current.style.cursor = 'grabbing';
    carouselRef.current.style.transition = 'none';
    setStartX(e.pageX);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
      carouselRef.current.style.transition = 'transform 0.3s ease-out';
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !carouselRef.current) return;
    e.preventDefault();
    const walk = e.pageX - startX;
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }

    const newTranslateX = translateX + walk;
    const minTranslate = -(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
    const clampedTranslateX = Math.max(minTranslate, Math.min(0, newTranslateX));
    
    carouselRef.current.style.transform = `translateX(${clampedTranslateX}px)`;
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    setIsMouseDown(true);
    setIsDragging(false);
    const touch = e.touches[0];
    carouselRef.current.style.transition = 'none';
    setStartX(touch.pageX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isMouseDown || !carouselRef.current) return;
    const touch = e.touches[0];
    const walk = touch.pageX - startX;
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }

    const newTranslateX = translateX + walk;
    const minTranslate = -(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
    const clampedTranslateX = Math.max(minTranslate, Math.min(0, newTranslateX));
    
    carouselRef.current.style.transform = `translateX(${clampedTranslateX}px)`;
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    setIsMouseDown(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
      carouselRef.current.style.transition = 'transform 0.3s ease-out';
      const currentTranslateX = getComputedTranslateX(carouselRef.current);
      setTranslateX(currentTranslateX);
    }
  };

  const handleVideoPlay = (e: MouseEvent<HTMLDivElement>, video: Video) => {
    e.stopPropagation();
    if (!isDragging) {
      setSelectedVideo(video);
    }
  };

  return (
    <section className={styles.videos}>
      <h2 className={styles.title}>INSIGHTS FROM THE 2024 LEADER EXPO</h2>
      
      <div 
        className={styles.carousel}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {videos.map((video) => (
          <div 
            key={video.id} 
            className={styles.videoCard}
          >
            <div className={styles.thumbnailWrapper}>
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className={styles.thumbnailImage}
              />
              <div 
                className={styles.playButton}
                onClick={(e) => handleVideoPlay(e, video)}
              >
                <div className={styles.playIcon} />
              </div>
              <div className={styles.duration}>{video.duration}</div>
            </div>
            <div className={styles.cardContentWrapper}>
              <div className={styles.cardContent}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <div className={styles.speaker}>
                  <span className={styles.name}>{video.speaker}</span>
                  <span className={styles.role}>{video.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div 
          key={selectedVideo.id} // Force recreation when video changes
          className={styles.modal} 
          onClick={() => {
            setSelectedVideo(null);
            // Call onModalClose after state update
            setTimeout(() => onModalClose(), 0);
          }}
        >
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                  setSelectedVideo(null);
                  // Call onModalClose after state update
                  setTimeout(() => onModalClose(), 0);
              }}
            >
              ×
            </button>
            <div className={styles.videoWrapper}>
              <iframe
                src={`https://player.vimeo.com/video/${selectedVideo.id}?autoplay=1`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={selectedVideo.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
