import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p style={styles.text}>
        We are a passionate team dedicated to creating innovative solutions for our users. Our mission is to provide a seamless and enjoyable experience on our platform. Explore our services and discover how we strive to make a positive impact in the digital world.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 64px)', // Adjusted height considering the navbar height (64px)
    padding: '20px',
  },
  text: {
    textAlign: 'center',
  },
};

export default About;
