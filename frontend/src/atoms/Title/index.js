import React from 'react'
import cn from 'classnames/bind'

import styles from './index.module.css'

const cx = cn.bind(styles)

function Title({ children, size = '2xl' }) {
  return (
    <div className={cx('title', size)}>
      { children }
    </div>
  );
}

export default Title;
