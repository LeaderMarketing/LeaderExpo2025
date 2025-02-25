import styles from './WhyAttendSection.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import InsightsIcon from '@mui/icons-material/Insights';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Box from '@mui/material/Box';

interface MainCard {
  title: string;
  description: string;
  image: string;
}

interface StandardCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const mainCard: MainCard = {
  title: "Windows 10 End-of-Service Opportunity",
  description: "Get exclusive insights from Microsoft on the Windows 10 EOS transition. Learn strategic approaches to help your customers upgrade and maximize this significant business opportunity ahead of October 2025.",
  image: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/w11.jpg"
};

const standardCards: StandardCard[] = [
  {
    icon: <Box className={styles.iconWrapper}><GroupsIcon className={styles.icon} /></Box>,
    title: "Australia's Premier IT Industry Exhibition",
    description: "Experience Australia's most comprehensive annual IT distribution showcase, uniting the industry's finest professionals and enthusiasts under one roof."
  },
  {
    icon: <Box className={styles.iconWrapper}><EmojiEventsIcon className={styles.icon} /></Box>,
    title: "28 Years of Industry Excellence",
    description: "Be part of our continued legacy of innovation, where industry leaders showcase cutting-edge AI solutions and next-generation technologies."
  },
  {
    icon: <Box className={styles.iconWrapper}><ConnectWithoutContactIcon className={styles.icon} /></Box>,
    title: "Expand Your Business Network",
    description: "Connect with an elite network of vendors, resellers, and industry experts to unlock new business opportunities especially in the age of AI."
  },
  {
    icon: <Box className={styles.iconWrapper}><InsightsIcon className={styles.icon} /></Box>,
    title: "Empower Your Business",
    description: "Elevate your expertise through cutting-edge seminars and exclusive keynotes delivered by industry thought leaders with topics about the most pressing issues in the IT industry."
  },
  {
    icon: <Box className={styles.iconWrapper}><CardGiftcardIcon className={styles.icon} /></Box>,
    title: "Unmatched Value, Zero Cost",
    description: "Attend completely free of charge while enjoying premium catering, exclusive giveaways, and opportunities to win valuable prizes throughout the event."
  },
  {
    icon: <Box className={styles.iconWrapper}><AutoAwesomeIcon className={styles.icon} /></Box>,
    title: "AI Innovation Showcase",
    description: "Discover how artificial intelligence is revolutionizing IT distribution. Experience firsthand demonstrations of AI-powered solutions and learn how to leverage these innovations to transform your business offerings."
  }
];

export const WhyAttendSection = () => {
  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <section className={styles.whyAttend}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00ffff' }} />
            <stop offset="50%" style={{ stopColor: '#0b60dd' }} />
            <stop offset="100%" style={{ stopColor: '#00ffff' }} />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.container}>
        <h2 className={styles.title}>WHY ATTEND LEADER EXPO 2025</h2>
        <div className={styles.reasons}>
          <div className={styles.mainCard}>
            <div className={styles.mainCardContent}>
              <h3 className={styles.mainCardTitle}>{mainCard.title}</h3>
              <p className={styles.mainCardDescription}>{mainCard.description}</p>
            </div>
          </div>
          <div className={styles.gridLayout}>
            {standardCards.map((card, index) => (
              <div key={index} className={styles.standardCard}>
                <div className={styles.iconContainer}>
                  {card.icon}
                </div>
                <h3 className={styles.standardCardTitle}>{card.title}</h3>
                <p className={styles.standardCardDescription}>{card.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.carouselLayout}>
            <Slider {...carouselSettings} className={styles.standardCardsSlider}>
              {standardCards.map((card, index) => (
                <div key={index}>
                  <div className={styles.standardCard}>
                    <div className={styles.iconContainer}>
                      {card.icon}
                    </div>
                    <h3 className={styles.standardCardTitle}>{card.title}</h3>
                    <p className={styles.standardCardDescription}>{card.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
