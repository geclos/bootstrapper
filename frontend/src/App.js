import Article from 'atoms/Article'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { format } from 'date-fns'

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
    let arr = [...selected]
    const i = selected.indexOf(elm)

    if (i > -1) arr.splice(i, 1)
    else arr.push(elm)

    setSelected(arr)
  }

  return [selected, toggleSelected]
}

function App() {
  const [articles] = useData()
  const [selected, toggleSelected] = useSelectedList([])

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
          subtitle={format(new Date(article.pub_date), 'yyyy-MM-dd HH:mm')}
          title={article.title}
        />
      ))}
    </div>
  );
}

export default App
