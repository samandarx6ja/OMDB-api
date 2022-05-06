import React from 'react'
import {
  Container,
  Typography,
  Input,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Grid,
} from '@mui/material'
import axios from 'axios'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import DataAlert from './DataAlert'
import { Link } from 'react-router-dom'

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: '#fff',
  },
}))

const Search = () => {
  //http://www.omdbapi.com/?i=tt3896198&apikey=74edba20
  //key = 74edba20

  const [quote, setQuote] = React.useState('')
  const [data, setData] = React.useState([])
  const [error, setError] = React.useState('True')
  const API = {
    KEY: '74edba20',
    BASE: 'http://www.omdbapi.com/',
  }

  const getQuote = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(`${API.BASE}?s=${quote}&apikey=${API.KEY}`)
        .then((res) => {
          console.log(res)
          setQuote('')
          if (res.data.Response === 'True') {
            setData(res.data.Search)
            setError(res.data.Response)
          } else {
            setError(res.data.Response)
          }
        })
        .catch((err) => {
          console.log('12121')
        })
    }
  }

  return (
    <Root>
      <Container
        maxWidth="xl"
        sx={{
          mt: 4,
          bgcolor: '#f4f4f4',
          height: '300px',
          borderRadius: 2,
          boxShadow: 4,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ pt: 10, color: '#0077b6' }}
        >
          SEARCH FOR WATCH MOVIE
        </Typography>
        <div className="search">
          <div className="search__item">
            <Input
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              placeholder="Placeholder"
              onKeyPress={getQuote}
              sx={{ pt: 10, fontSize: 22, width: '100%' }}
            />
          </div>
        </div>
      </Container>
      <Container maxWidth="xl">
        {/* Item <-----------------------------------------------------------------> card */}

        {error === 'True' ? (
          <Grid container spacing={1}>
            {data.map((item) => (
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 245, mt: 5, bgcolor: '#333' }}>
                  <CardActionArea>
                    <Box sx={{ height: 360 }}>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={item.Poster}
                        sx={{ p: 1, objectFit: 'cover' }}
                      />
                    </Box>
                    <CardContent sx={{ p: 0 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign="center"
                        color="#fff"
                      >
                        {item.Title.slice(0, 16)}...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={`search/${item.imdbID}`} >
                      <Button
                        sx={{ display: 'flex', justifyContent: 'center' }}
                        size="small"
                        color="primary"
                        variant="contained"
                      >
                        WATCH NOW
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <DataAlert />
        )}
      </Container>
    </Root>
  )
}

export default Search
