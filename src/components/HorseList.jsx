/*import React from 'react';
import './HorseList.css';
import horse1Image from '../asset/horses1.jpg';
import horse2Image from '../asset/horse2.jpg';
import horse3Image from '../asset/horse3.jpg';
import horse4Image from '../asset/horse4.jpg';
import { Link } from 'react-router-dom';
const horses = [
  { id: 1, name: 'Thunder', description: 'A strong and fast horse.', image: horse1Image },
  { id: 2, name: 'Lightning', description: 'A swift and agile horse.', image: horse2Image },
  { id: 3, name: 'Storm', description: 'A fierce and powerful horse.', image: horse3Image },
  { id: 4, name: 'Breeze', description: 'A gentle and calm horse.', image: horse4Image }
];

const HorseList = () => {
  return (
    <div>
      <div className="horse-list">
        {horses.map(horse => (
          <div key={horse.id} className="horse-card">
            <img src={horse.image} alt={horse.name} />
            <h3>{horse.name}</h3>
            <p>{horse.description}</p>
          </div>
        ))}
      </div>
      <div className="bottom-button-container">
        <Link to="/booking" className="book-now-button">Book Now</Link>
      </div>
    </div>
  );
};

export default HorseList;*/
import React from 'react';
import './HorseList.css';
import { motion } from 'framer-motion';
import horse1Image from '../asset/horses1.jpg';
import horse2Image from '../asset/horse2.jpg';
import horse3Image from '../asset/horse3.jpg';
import horse4Image from '../asset/horse4.jpg';
import { Link } from 'react-router-dom';

const horses = [
  { id: 1, name: 'Thunder', description: 'A strong and fast horse.', image: horse1Image },
  { id: 2, name: 'Lightning', description: 'A swift and agile horse.', image: horse2Image },
  { id: 3, name: 'Storm', description: 'A fierce and powerful horse.', image: horse3Image },
  { id: 4, name: 'Breeze', description: 'A gentle and calm horse.', image: horse4Image }
];

const HorseList = () => {
  return (
    <div>
      <motion.div 
        className="horse-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {horses.map(horse => (
          <motion.div 
            key={horse.id} 
            className="horse-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={horse.image} alt={horse.name} />
            <h3>{horse.name}</h3>
            <p>{horse.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="bottom-button-container">
        <Link to="/booking" className="book-now-button">Book Now</Link>
      </div>
    </div>
  );
};

export default HorseList;
