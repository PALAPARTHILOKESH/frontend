// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const styles = {
  footer: {
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

const Footer = () => {
  return (
    <Box style={styles.footer}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Placement Portal. All rights reserved by lokesh@gmail.
        Get Connected with the Best Opportunities.
      </Typography>
    </Box>
  );
};

export default Footer;
