/*import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>Contact us at: contact@horserides.com</p>
    <p>© 2024 Horse Rides Inc.</p>
  </footer>
);

export default Footer;
*//*
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>Contact us at: contact@horserides.com</p>
    <p>© 2024 Horse Rides Inc.</p>
  </footer>
);

export default Footer;
*/
import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => (
  <motion.footer 
    className="footer"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <p>Contact us at: contact@horserides.com</p>
    <p>© 2024 Horse Rides Inc.</p>
  </motion.footer>
);

export default Footer;
