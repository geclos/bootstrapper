import Header from 'atoms/Header'
import React from 'react'
import Subtitle from 'atoms/Subtitle'
import Title from 'atoms/Title'

import styles from './index.module.css'

function Article({ title, subtitle, body }) {
  return (
    <div className={styles.article}>
      <Header>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Header>
      <div dangerouslySetInnerHTML={{__html: body}} />
    </div>
  );
}

export default Article;
