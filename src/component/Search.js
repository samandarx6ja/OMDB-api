import React from 'react'
import { Container, Typography,Input } from '@mui/material'
import axios from 'axios'



const Search = () => {
    //http://www.omdbapi.com/?i=tt3896198&apikey=74edba20
    //key = 74edba20

    const [quote, setQuote] = React.useState('betman')
    const [data, setData] = React.useState([])
    const API = {
        KEY:'74edba20',
        BASE:'http://www.omdbapi.com/'
    }

    const getQuote = (event) =>{
        if( event.key === 'Enter' ){
        axios.get(`${API.BASE}?s=${quote}&apikey=${API.KEY}`)
        .then(res => {
            console.log(res)
            setData(res.data.Search)
        }).catch(err => {
            console.log(err)
        })
        }
    }

  return (
    <div>
        <Container fluid='true' maxWidth="xl" sx={{ bgcolor: '#f4f4f4', height: '300px', mt:5, borderRadius:2,boxShadow: 4}} >
            <Typography variant='h4' textAlign='center' sx={{pt:10, color:'#0077b6'}} >
                SEARCH FOR WATCH MOVIE  
            </Typography>
            <div className='search'>
                <div className='search__item'> 
                {quote}
                <Input placeholder="Placeholder"  sx={{pt:10, fontSize:22, width:'100%'}} onChange={e => setQuote(e.target.value)} onKeyPress={getQuote} />
                </div>
            </div>
        </Container>
        <Container fluid='true' maxWidth="xl">
            
        </Container>
    </div>
  )
}

export default Search