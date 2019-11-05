import Article from 'atoms/Article'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [isFetching, setFetching] = useState(false)
  const [articles, setArticles] = useState([])
  const [selected, setSelected] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true)

      const { data } = await axios.get('http://backend.localhost/posts')

      setFetching(false)
      setArticles(data)
    }

    fetchData()
  }, [])

  console.log(selected)

  return (
    <div className='container my-12 mx-auto'>
      {articles.map(article => (
        <Article
          key={article.id}
          body={article.content}
          collapsed={!selected.includes(article.id)}
          excerpt={article.description}
          onClick={() => setSelected(selected.concat([article.id]))}
          subtitle={article.pub_date}
          title={article.title}
        />
      ))}
    </div>
  );
}

export default App
