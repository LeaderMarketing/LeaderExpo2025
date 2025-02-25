import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PrizeCarousel.module.css';

export const PrizeCarousel = () => {
  const settings = {
    dots: true, // Enable pagination bullets
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false
  };



  const images = [
    {
      url: 'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/expo-prize-winner_1.jpg',
      alt: 'Prize winner 1'
    },
    {
      url: 'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/expo-prize-winner_2.jpg',
      alt: 'Prize winner 2'
    },
    {
      url: 'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/expo-prize-winner_3.jpg',
      alt: 'Prize winner 3'
    },
    {
      url: 'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/expo-prize-winner_4.jpg',
      alt: 'Prize winner 4'
    },
    {
      url: 'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/expo-prize-winner_5.jpg',
      alt: 'Prize winner 5'
    }
  ];

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image.url} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
