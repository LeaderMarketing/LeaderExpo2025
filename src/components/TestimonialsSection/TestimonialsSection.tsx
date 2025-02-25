import { useState, useEffect } from 'react';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import styles from './TestimonialsSection.module.css';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  message: string;
  image: string;
  linkedInPost: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Brother International Australia",
    company: "Brother At Your Side",
    message: "Our team had a fantastic time at the Melbourne, Sydney and Perth Leader Expo's earlier this year. It's always an excellent opportunity to connect with other industry experts, share knowledge and catch up with our customers.",
    image: "https://media.licdn.com/dms/image/v2/C560BAQFtacrk5J5QYQ/company-logo_100_100/company-logo_100_100/0/1630619074490/brother_international_australia_logo?e=1746057600&v=beta&t=IUhQMZopWNZPrirz64Pqui9x9ldNMYFfuqv6g-kACXY",
    linkedInPost: "https://www.linkedin.com/posts/brother-international-australia_brother-atyourside-tradeshow-activity-7229658661265031168-suoE?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 2,
    name: "MSI Australia and New Zealand",
    company: "MSI",
    message: "Kudos to Leader for hosting an incredible week of networking with Australia's leading tech innovators and resellers in Melbourne & Sydney last week.",
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQEcUWC8yMeYMw/company-logo_100_100/company-logo_100_100/0/1630639538707/msi_computer_australia_pty_ltd_logo?e=2147483647&v=beta&t=chwYFXi3cMQRdityf0a44AwpJuP-00v4uWe0c5heGw8",
    linkedInPost: "https://www.linkedin.com/posts/msi-computer-australia-pty-ltd_leaderexpo2024-leaderexpo2024-leaderexpo-activity-7198049787009536001-tb3D?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 3,
    name: "Markus Dambergs",
    company: "Berkana Group",
    message: "It was great to see the various vendors and hear their insights to AI, upcoming technologies that are coming out. Thanks Leader for the invitation, look forward in working with you and to next years Expo.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGCoG8dkGRb6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721706466636?e=2147483647&v=beta&t=y70X9Mu5yLK3pmm3MQjZ0SwDzSRunnGBRM2fU_T0Fs0",
    linkedInPost: "https://www.linkedin.com/posts/markus-dambergs_berkanagroup-leaderexpo2024-microsoft-activity-7257251594159697921-MhWD?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 4,
    name: "Chris Karapetcoff",
    company: "The Computing Australia Group",
    message: "Leader put on another amazing Expo at the Crown Perth last week. The seminar discussions on security and AI were very insightful and resonated with our future direction. It was impressive to see such a wide variety of technology and innovation all in one place.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEShzcmKKeQtA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667540944834?e=2147483647&v=beta&t=DbjJbTeU6s6G9a19l8wrQNKc1DkPUxEP1SeOAd5mCko",
    linkedInPost: "https://www.linkedin.com/posts/chris-karapetcoff-5a12852b_leaderexpo2024-activity-7221044993191292929-_LL2?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 5,
    name: "Chris Delacy",
    company: "Epic IT",
    message: "Informative afternoon at the LeaderExpo2024. Thanks for hosting the event Leader which had ICT trends and insights!",
    image: "https://media.licdn.com/dms/image/v2/C5603AQGmHAPjV8kdgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1614132815457?e=2147483647&v=beta&t=StLyrgRud5K9agJaLNUBDfcNz5xz305aMgKcvHu3RNw",
    linkedInPost: "https://www.linkedin.com/posts/cybersecurity-ict-services_leaderexpo2024-activity-7219500452197847040-Y5lK?utm_source=share&utm_medium=member_desktop"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 10000); // Change testimonial every 10 seconds

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>WHAT PAST ATTENDEES SAY</h2>
      <div className={styles.container}>
        <div className={styles.testimonialContainer}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <CircleChevronLeft size={56} strokeWidth={1} />
          </button>
          <div className={styles.testimonialContent}>
            <div className={styles.testimonial}>
              <p className={styles.message}>"{testimonials[currentIndex].message}"</p>
              <div className={styles.authorGroup}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className={styles.profileImage}
                  />
                </div>
                <div className={styles.author}>
                  <a 
                    href={testimonials[currentIndex].linkedInPost} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.testimonialLink}
                  >
                    <strong>{testimonials[currentIndex].name}</strong>
                    <p className={styles.company}>
                      {testimonials[currentIndex].company}
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.pagination}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.paginationDot} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <CircleChevronRight size={56} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
}
