import Header from 'atoms/Header'
import React from 'react'
import Subtitle from 'atoms/Subtitle'
import Title from 'atoms/Title'
import cn from 'classnames/bind'

import styles from './index.module.css'

const cx = cn.bind(styles)

const _onClick = ({ collapsed, onClick }) => {
  if (collapsed) return onClick
  return null
}

const _Title = ({ collapsed, title, link }) => {
  const component = <Title size={collapsed ? 'xl' : '2xl'}>{title}</Title>

  if (collapsed) return component

  return (
    <a href={link} rel='noopener noreferrer' target='_blank'>{component}</a>
  )
}

const _Subtitle = ({ collapsed, subtitle }) => {
  if (collapsed) return null

  return <div className={styles.subtitle}><Subtitle>{subtitle}</Subtitle></div>
}

const _Collapser = ({ collapsed, onClick }) => {
  if (collapsed) return null

  return (
    <div className={styles.collapser} onClick={onClick}>
      collapse -
    </div>
  )
}

const Article = ({
  title,
  subtitle,
  body,
  link,
  excerpt,
  onClick,
  collapsed = true
}) => {
  return (
    <div
      className={cx('article', { collapsed })}
      onClick={_onClick({ collapsed, onClick })}
    >
      <div className={styles.header}>
        <Header>
          <_Collapser collapsed={collapsed} onClick={onClick} />
          <_Title link={link} collapsed={collapsed} title={title} />
          <_Subtitle collapsed={collapsed} subtitle={subtitle} />
        </Header>
      </div>
      <div className={styles.body} dangerouslySetInnerHTML={{__html: collapsed ? (excerpt.slice(0, 100) + '...') : body }} />
    </div>
  );
}

export default Article
