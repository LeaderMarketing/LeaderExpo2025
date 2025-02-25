import { useState } from 'react';
import styles from './GallerySection.module.css';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

// Images for each row
const row1Images: ImageData[] = [
  { id: 1, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/img_0571.jpg", alt: "Expo Image 1" },
  { id: 2, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-206.jpg", alt: "Expo Image 2" },
  { id: 3, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/20230912-_dsc8559-1.jpg", alt: "Expo Image 3" },
  { id: 4, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-177.jpg", alt: "Expo Image 4" },
  { id: 5, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/img_0689.jpg", alt: "Expo Image 5" },
  { id: 6, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-255.jpg", alt: "Expo Image 6" },
  { id: 7, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-142.jpg", alt: "Expo Image 7" },
  { id: 8, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/img_0182.jpg", alt: "Expo Image 8" },  
];

const row2Images: ImageData[] = [
  { id: 9, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-251.jpg", alt: "Expo Image 9" },
  { id: 10, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-106.jpg", alt: "Expo Image 10" },
  { id: 11, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-202.jpg", alt: "Expo Image 11" },
  { id: 12, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-228.jpg", alt: "Expo Image 12" },
  { id: 13, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-71-2.jpg", alt: "Expo Image 13" },
  { id: 14, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-101.jpg", alt: "Expo Image 14" },
  { id: 15, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-49-2.jpg", alt: "Expo Image 15" },
  { id: 16, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-264.jpg", alt: "Expo Image 16" },
];

const row3Images: ImageData[] = [
  { id: 17, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/02/leader-expo-2024-peter-pap-photography-183.jpg", alt: "Expo Image 17" },
  { id: 18, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-43.jpg", alt: "Expo Image 18" },
  { id: 19, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-211.jpg", alt: "Expo Image 19" },
  { id: 20, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-112.jpg", alt: "Expo Image 20" },
  { id: 21, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-210.jpg", alt: "Expo Image 21" },
  { id: 22, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-64.jpg", alt: "Expo Image 22" },
  { id: 23, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-190.jpg", alt: "Expo Image 23" },
  { id: 24, src: "https://jcardenasleader.wordpress.com/wp-content/uploads/2025/01/leader-expo-2024-peter-pap-photography-107.jpg", alt: "Expo Image 24" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  
  // Combine all images for overlay navigation
  const allImages = [...row1Images, ...row2Images, ...row3Images];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = allImages.findIndex(img => img.id === selectedImage.id);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
      setSelectedImage(allImages[prevIndex]);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = allImages.findIndex(img => img.id === selectedImage.id);
      const nextIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(allImages[nextIndex]);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.title}>RELIVE LEADER EXPO 2024</h2>
      
      <div className={styles.galleryContainer}>
        {/* Row 1 - Scrolls Right */}
        <div className={styles.row}>
          <div className={`${styles.scrollingRow} ${styles.scrollRight}`}>
            {[...row1Images, ...row1Images].map((image, index) => (
              <div 
                key={`${image.id}-${index >= row1Images.length ? 'dup' : 'orig'}`}
                className={styles.imageWrapper}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Left */}
        <div className={styles.row}>
          <div className={`${styles.scrollingRow} ${styles.scrollLeft}`}>
            {[...row2Images, ...row2Images].map((image, index) => (
              <div 
                key={`${image.id}-${index >= row2Images.length ? 'dup' : 'orig'}`}
                className={styles.imageWrapper}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Scrolls Right */}
        <div className={styles.row}>
          <div className={`${styles.scrollingRow} ${styles.scrollRight}`}>
            {[...row3Images, ...row3Images].map((image, index) => (
              <div 
                key={`${image.id}-${index >= row3Images.length ? 'dup' : 'orig'}`}
                className={styles.imageWrapper}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Overlay */}
      {selectedImage && (
        <div 
          className={styles.overlay}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.overlayContent} onClick={e => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={handleClose}
            >
              ×
            </button>
            <button 
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={handlePrevImage}
            >
              ‹
            </button>
            <button 
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={handleNextImage}
            >
              ›
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className={styles.overlayImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
