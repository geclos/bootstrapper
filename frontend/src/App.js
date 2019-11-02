import Article from 'atoms/Article'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [isFetching, setFetching] = useState(false)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true)

      const { data } = axios.get('http://backend.localhost/posts')

      setArticles(data)
      setFetching(false)
    }

    fetchData()
  }, [])

  console.log(articles)

  return (
    <div className='container my-12 mx-auto'>
      <Article
        title='Hello world!'
        subtitle='This is a fancy subtitle'
        body="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
      />
      <Article
        title='Hello world for the second time!'
        subtitle='This is, once again, a very fancy subtitle'
        body="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
      />
    </div>
  );
}

export default App
