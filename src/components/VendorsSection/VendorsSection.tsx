import styles from './VendorsSection.module.css';

const platinumLogos = [
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/microsoft_white-text.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/microsoft_white-text.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/microsoft_white-text.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/microsoft_white-text.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/microsoft_white-text.png',
];

const regularLogos = [
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
  'https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-logo.png',
];

export const VendorsSection = () => {
  return (
    <section className={styles.vendors}>
      <h2>LEARN FROM THE WORLD'S LEADING VENDORS</h2>
      <div className={styles.platinumGrid}>
        {platinumLogos.map((logo, index) => (
          <div key={`platinum-${index}`} className={styles.platinumItem}>
            <img src={logo} alt={`Platinum Sponsor ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className={styles.regularGrid}>
        {regularLogos.map((logo, index) => (
          <div key={`regular-${index}`} className={styles.regularItem}>
            <img src={logo} alt={`Sponsor ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};
