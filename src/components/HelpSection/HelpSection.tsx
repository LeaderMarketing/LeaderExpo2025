import styles from './HelpSection.module.css';

export const HelpSection = () => {
  return (
    <section className={styles.help}>
      <div className={styles.container}>
        <h2>NEED HELP?</h2>
        <p>Our events team is here to assist you with any questions about Leader Expo 2025</p>
        
        <div className={styles.contactButtons}>
          <a 
            href="mailto:events@leadersystems.com.au" 
            className={`${styles.button} ${styles.emailButton}`}
          >
            Email Events Team
          </a>
          
          <a 
            href="tel:1300453233" 
            className={`${styles.button} ${styles.phoneButton}`}
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};