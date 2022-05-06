import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SearchItem = () => {
  const { id } = useParams()
  const [data, setData] = React.useState([])

  //http://www.omdbapi.com/?i=tt0099785&apikey=74edba20

  const API = {
    KEY: '74edba20',
    BASE: 'http://www.omdbapi.com/',
  }

  useEffect(() => {
    axios
      .get(`${API.BASE}?i=${id}&apikey=${API.KEY}`)
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])
  console.log(data)

  return (
    <div>
      {data.Actors}
    </div>
  )
}

export default SearchItem
