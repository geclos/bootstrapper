import Header from 'atoms/Header'
import React from 'react'
import Subtitle from 'atoms/Subtitle'
import Title from 'atoms/Title'
import cn from 'classnames/bind'

import styles from './index.module.css'

const cx = cn.bind(styles)

function Article({
  title,
  subtitle,
  body,
  excerpt,
  onClick,
  collapsed = true
}) {
  return (
    <div
      className={cx('article', { collapsed })}
      onClick={onClick}
    >
      <div className={styles.header}>
        <Header>
          <Title size={collapsed ? 'xl' : '2xl'}>{title}</Title>
          {!collapsed && <div className={styles.subtitle}><Subtitle>{subtitle}</Subtitle></div>}
        </Header>
      </div>
      <div dangerouslySetInnerHTML={{__html: collapsed ? (excerpt.slice(0, 100) + '...') : body }} />
    </div>
  );
}

export default Article;
