import { useEffect, useState } from 'react';
import styles from './CitiesSection.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Location = 'ADELAIDE' | 'BRISBANE' | 'SYDNEY' | 'MELBOURNE' | 'PERTH';

interface CitiesSectionProps {
  onSelectLocation: (location: Location) => void;
}

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
}

interface CityEvent {
  id: number;
  state: Location;
  date: string;
  venue: string;
  address: string;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const cityEvents: CityEvent[] = [
  {
    id: 1,
    state: 'ADELAIDE',
    date: '2025-05-27T09:00:00+10:30',
    venue: 'Adelaide Convention Centre, Hall E & C',
    address: 'North Terrace, Adelaide SA 5000',
    imageUrl: 'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/adl_expo.png',
    coordinates: {
      lat: -34.9206,
      lng: 138.5954
    }
  },
  {
    id: 4,
    state: 'BRISBANE',
    date: '2025-07-16T09:00:00+10:30',
    venue: 'Brisbane Royal International Convention Centre, Hall B & C',
    address: '600 Gregory Terrace, Bowen Hills QLD 4006',
    imageUrl: 'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/bris_expo.png',
    coordinates: {
      lat: -27.4520,
      lng: 153.0294
    }
  },
  {
    id: 2,
    state: 'SYDNEY',
    date: '2025-08-05T09:00:00+10:30',
    venue: 'CommBank Stadium, Cumberland Lounge and Directors Club',
    address: '11-13 O\'Connell St, Parramatta NSW 2150',
    imageUrl: 'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/syd_expo.png',
    coordinates: {
      lat: -33.8082,
      lng: 150.9999
    }
  },
  {
    id: 3,
    state: 'MELBOURNE',
    date: '2025-08-07T09:00:00+10:30',
    venue: 'Caulfield Racecourse, Concourse and Mezzanine',
    address: '22 Station Street, Caulfield East VIC 3145',
    imageUrl: 'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/vic_expo.png',
    coordinates: {
      lat: -37.8771,
      lng: 145.0428
    }
  },
  {
    id: 5,
    state: 'PERTH',
    date: '2025-09-23T09:00:00+10:30',
    venue: 'Crown Perth, Grand Ballroom 1 & 2',
    address: 'Great Eastern Highway, Burswood WA 6100',
    imageUrl: 'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/perth_expo.png',
    coordinates: {
      lat: -31.9580,
      lng: 115.8896
    }
  }
];

const calculateTimeLeft = (eventDate: string): CountdownValues => {
  const difference = new Date(eventDate).getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  };
};

export const CitiesSection = ({ onSelectLocation }: CitiesSectionProps) => {
  const [countdowns, setCountdowns] = useState<Record<number, CountdownValues>>({});

  useEffect(() => {
    // Initial calculation
    const initialCountdowns: Record<number, CountdownValues> = {};
    cityEvents.forEach(city => {
      initialCountdowns[city.id] = calculateTimeLeft(city.date);
    });
    setCountdowns(initialCountdowns);

    // Update every minute
    const timer = setInterval(() => {
      const newCountdowns: Record<number, CountdownValues> = {};
      cityEvents.forEach(city => {
        newCountdowns[city.id] = calculateTimeLeft(city.date);
      });
      setCountdowns(newCountdowns);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className={styles.cities}>
      <div className={styles.container}>
        <h2>EXPO IN 5 MAJOR CITIES</h2>
        <p className={styles.description}>
          Experience Leader EXPO 2025, strategically hosted across Australia's major state capitals to ensure maximum accessibility nationwide. Join this landmark tech event where location convenience meets cutting-edge ICT trends.
        </p>
        <div className={styles.cityContainer}>
          <Slider {...settings}>
            {cityEvents.map((city) => (
              <div key={city.id} className={styles.cityCard}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={city.imageUrl}
                    alt={`${city.venue}`}
                    className={styles.venueImage}
                  />
                </div>
                <div className={styles.cityInfo}>
                  <h3 className={styles.state}>{city.state}</h3>
                  <div className={styles.date}>
                    <span className={styles.dateDay}>
                      {new Date(city.date).toLocaleDateString('en-AU', {
                        weekday: 'long'
                      })}
                    </span>
                    <span className={styles.dateValue}>
                      {new Date(city.date).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className={styles.countdown}>
                    <div className={styles.countdownItem}>
                      <span>{countdowns[city.id]?.days ?? "00"}</span>
                      <label>days</label>
                    </div>
                    <div className={styles.countdownItem}>
                      <span>{countdowns[city.id]?.hours ?? "00"}</span>
                      <label>hours</label>
                    </div>
                    <div className={styles.countdownItem}>
                      <span>{countdowns[city.id]?.minutes ?? "00"}</span>
                      <label>mins</label>
                    </div>
                  </div>
                  <p className={styles.venue}>{city.venue}</p>
                  <button 
                    className={styles.mapsButton}
                    onClick={() => {
                      // Scroll to registration section
                      document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
                      // Update location in parent component
                      onSelectLocation(city.state as Location);
                    }}
                  >
                    Register now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
