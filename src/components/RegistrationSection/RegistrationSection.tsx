import { useState, useEffect, FormEvent } from 'react';
import { PrizeCarousel } from './PrizeCarousel';
import styles from './RegistrationSection.module.css';

type Location = 'ADELAIDE' | 'BRISBANE' | 'SYDNEY' | 'MELBOURNE' | 'PERTH';

interface FormData {
  name: string;
  companyName: string;
  mobile: string;
  email: string;
  location: Location;
  accountManager: string;
}

interface RegistrationSectionProps {
  selectedLocation?: Location;
}

export const RegistrationSection = ({ selectedLocation }: RegistrationSectionProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    mobile: '',
    email: '',
    location: selectedLocation || 'ADELAIDE',
    accountManager: '',
  });

  // Update form when selectedLocation changes
  useEffect(() => {
    if (selectedLocation) {
      setFormData(prev => ({
        ...prev,
        location: selectedLocation
      }));
    }
  }, [selectedLocation]);

  const accountManagers = [
    'Woody Leng',
    'Raymond Tia',
    'Peter Papaioannou',
    'Grant Abbott',
    'Andy Kris',
    'David Litchfield',
    'Noel Ennis',
    'Paul Osborne',
    'Chris Eustace',
    'Mike Chandran',
    'Kevin Zhang',
    'Sethu Perumalsamy',
    'Harish CK',
    'Mark Marikkar',
    'Peter Eustace',
    'David Sloss',
    'Jaimie Ianson',
    'Andy Nguyen',
    'Andoni Tsokos',
    'Paul Yau',
    'Jardi Conklin',
    'Mark Glickman',
    'Alan Tan',
    'Leong Chen',
    'Scott Shariffdeen',
    'Nathan Puri',
    'Tong Zheng',
    'William Lam',
    'Benson Yin',
    'Raymond Wong',
    'Mia Zhang',
    'Max Shubber',
    'Victor Huang',
  ];

  const locations: Location[] = [
    'ADELAIDE',
    'BRISBANE',
    'SYDNEY',
    'MELBOURNE',
    'PERTH'
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="registration" className={styles.registration}>
      <h2>LEADER EXPO 2025 REGISTRATION</h2>
      <p className={styles.description}>
        Don't miss out on Australia's largest ICT distributor event and get a chance to win awesome prizes - exclusively brought to you by Leader.
      </p>
      <div className={styles.twoColumnLayout}>
        <div className={styles.formColumn}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your company name"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="location">Your Location</label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="accountManager">Your Account Manager</label>
                <select
                  id="accountManager"
                  name="accountManager"
                  value={formData.accountManager}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select an account manager</option>
                  {accountManagers.map((manager) => (
                    <option key={manager} value={manager}>
                      {manager}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit Registration
            </button>
            <p className={styles.disclaimer}>
              *You agree by registering to receive SMS reminders from us. Also that if you are unable to attend please give us at least 3 days notice before the event.
            </p>
          </form>
        </div>
        <div className={styles.prizeColumn}>
          <PrizeCarousel />
        </div>
      </div>
    </section>
  );
};
