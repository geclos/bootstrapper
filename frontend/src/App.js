import Article from 'atoms/Article'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

const useData = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://backend.localhost/posts')
      setArticles(data)
    }

    fetchData()
  }, [])

  return [articles]
}

const useSelectedList = (initState) => {
  const [selected, setSelected] = useState(initState)

  const toggleSelected = (elm) => {
    let arr = new Array(selected)
    const i = selected.indexOf(elm)

    if (i > -1) arr.splice(i, 1)
    else arr.push(elm)

    setSelected(arr)
  }

  return [selected, toggleSelected]
}

function App() {
  const [selected, toggleSelected] = useSelectedList([])
  const [articles] = useData()

  return (
    <div className='container my-12 mx-auto'>
      {articles.map(article => (
        <Article
          key={article.id}
          body={article.content}
          collapsed={!selected.includes(article.id)}
          excerpt={article.description}
          link={article.link}
          onClick={() => toggleSelected(article.id)}
          subtitle={article.pub_date}
          title={article.title}
        />
      ))}
    </div>
  );
}

export default App
