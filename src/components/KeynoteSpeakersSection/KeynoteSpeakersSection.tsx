import React from 'react';
import styles from './KeynoteSpeakersSection.module.css';

interface Speaker {
  name: string;
  position: string;
  company: string;
  imageUrl: string;
}

const speakers: Speaker[] = [
  {
    name: "Roland Juenemann",
    position: "Distribution Manager",
    company: "Schneider Electric",
    imageUrl: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/roland_juenemann_apc.jpg"
  },
  {
    name: "Brett Fraser",
    position: "Partner Sales Executive",
    company: "Microsoft",
    imageUrl: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/brett_fraser.jpg"
  },
  {
    name: "Oktay Tilkili",
    position: "Commercial Sales Manager",
    company: "MSI",
    imageUrl: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/oktay_tilkili_msi.jpg"
  },
  {
    name: "Robert Litvin",
    position: "Head of Sales",
    company: "Teltonika Networks",
    imageUrl: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/robert_litvin_teltonika.jpg"
  },
  {
    name: "John Hopping",
    position: "Director Sales Engineering APAC",
    company: "Ericsson",
    imageUrl: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/john_hopping_ericsson.jpg"
  },
];

const KeynoteSpeakersSection: React.FC = () => {
  return (
    <section className={styles.section} id="keynote-speakers">
      <h2 className={styles.title}>KEYNOTE SPEAKERS</h2>
      <p className={styles.subheadline}>
        Get ready for Australia's gathering of the brightest IT vendors and professionals, coming together to empower your business with the latest in technology and AI.
      </p>
      <div className={styles.speakersGrid}>
        {speakers.map((speaker, index) => (
          <div key={index} className={styles.speakerCard}>
            <div className={styles.imageWrapper}>
              <img
                src={speaker.imageUrl}
                alt={`${speaker.name}`}
                className={styles.speakerImage}
              />
            </div>
            <h3 className={styles.speakerName}>{speaker.name}</h3>
            <p className={styles.speakerPosition}>{speaker.position}</p>
            <p className={styles.speakerCompany}>{speaker.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeynoteSpeakersSection;
