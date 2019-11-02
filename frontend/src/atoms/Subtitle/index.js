import React from 'react'

import styles from './index.module.css'

function Subtitle({ children }) {
  return (
    <div className={styles.root}>
      { children }
    </div>
  );
}

export default Subtitle;
