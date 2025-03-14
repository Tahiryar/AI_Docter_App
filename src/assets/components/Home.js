import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // Inline styles
  const styles = {
    container: {
      backgroundImage: 'url(https://www.shutterstock.com/image-vector/hand-doctor-robot-finger-cyborg-600nw-2353082531.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
    },
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '2rem',
      borderRadius: '10px',
    },
    typingEffect: {
      overflow: 'hidden', // Hide overflow to create the typing effect
      whiteSpace: 'nowrap', // Prevent text from wrapping
      margin: '0 auto', // Center the text
      letterSpacing: '0.15em', // Add spacing between letters for better effect
      animation: 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite', // Typing and cursor animation
    },
    shineEffect: {
      background: 'linear-gradient(90deg, transparent, orange, transparent)',
      backgroundSize: '200% 100%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      animation: 'shine 3s linear infinite', // Shine animation
    },
    button: {
      marginTop: '1rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
  };

  // Inline CSS animations
  const animations = `
    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }
    @keyframes blink-caret {
      from, to { border-color: transparent; }
      50% { border-color: orange; }
    }
    @keyframes shine {
      0% { background-position: -100% 0; }
      100% { background-position: 100% 0; }
    }
  `;

  // useNavigate hook for redirection
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Add inline styles for animations */}
      <style>{animations}</style>
      <div style={styles.content}>
        <h1 style={{ ...styles.typingEffect, ...styles.shineEffect }}>Welcome to AI Doctor</h1>
        <p style={{ ...styles.typingEffect, ...styles.shineEffect }}>Get quick guidance for your health concerns.</p>
        
        {/* "Get Started" button */}
        <button style={styles.button} onClick={() => navigate('/symptom-checker')}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;