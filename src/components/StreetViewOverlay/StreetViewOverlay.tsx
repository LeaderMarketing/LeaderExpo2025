import styles from './StreetViewOverlay.module.css';

interface CityEvent {
  id: number;
  state: string;
  venue: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface StreetViewOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  venue: CityEvent;
}

export const StreetViewOverlay = ({ isOpen, onClose, venue }: StreetViewOverlayProps) => {
  if (!isOpen) return null;

  // Map venue IDs to their exact names
  const venueNames: { [key: number]: string } = {
    1: 'Adelaide Convention Centre',
    4: 'Brisbane Royal International Convention Centre',
    2: 'CommBank Stadium',
    3: 'Caulfield Racecourse',
    5: 'Crown Perth'
  };

  // Get venue name and construct the search query
  const venueName = venueNames[venue.id];
  const searchQuery = encodeURIComponent(`${venueName}, ${venue.state}, Australia`);
  
  // Construct Google Maps embed URL with place search
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD8ze7PYwbu4m8xayJmA8i2Yxp13-L4h4E&q=${searchQuery}&zoom=18`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.header}>
          <h3>{venue.venue}</h3>
          <p>{venue.address}</p>
        </div>
        <iframe
          src={mapUrl}
          className={styles.iframe}
          title={`Map view of ${venue.venue}`}
          allowFullScreen
        />
      </div>
    </div>
  );
};
