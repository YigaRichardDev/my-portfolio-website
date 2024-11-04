import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <MoonLoader size={60} color="#3315F4" />
    </div>
  );
};

const styles: {loaderContainer: React.CSSProperties} = {
  loaderContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 1000,
  },
};

export default Loader;
