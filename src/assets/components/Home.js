import React from 'react';

const Home = () => {
  // Inline styles
  const styles = {
    container: {
      backgroundImage: 'url(https://www.shutterstock.com/image-vector/hand-doctor-robot-finger-cyborg-600nw-2353082531.jpg)', // Direct image URL
      backgroundSize: 'cover', // Cover the entire container
      backgroundPosition: 'center', // Center the image
      backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      height: '100vh', // Full viewport height
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white', // Text color
    },
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better readability
      padding: '2rem',
      borderRadius: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1>Welcome to AI Doctor</h1>
        <p>Get quick guidance for your health concerns.</p>
      </div>
    </div>
  );
};

export default Home;