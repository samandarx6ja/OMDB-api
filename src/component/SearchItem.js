import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  styled,
  Container,
  Stack,
  Button,
} from '@mui/material'
import { Box, minWidth } from '@mui/system'

const SearchItem = () => {
  const { id } = useParams()
  const [data, setData] = React.useState([{}])

  //http://www.omdbapi.com/?i=tt0099785&apikey=74edba20
  const API = {
    KEY: '74edba20',
    BASE: 'https://www.omdbapi.com/',
  }

  useEffect(() => {
    axios
      .get(`${API.BASE}?i=${id}&apikey=${API.KEY}`)
      .then((res) => {
        console.log(res)
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  })

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          mt: 4,
          maxWidth: 900,
        }}
      >
        <Paper
          sx={{
            p: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ height: '100%' }}>
                <Img alt="Poster photo" src={data.Poster} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    textAlign="center"
                  >
                    {data.Title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Genre: {data.Genre}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Released: {data.Released}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Rated: {data.Rated}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    ImdbVotes: {data.imdbVotes}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Director: {data.Director}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Writer: {data.Writer}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Actors: {data.Actors}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={{ p: 2 }}>
              <hr />
              <Typography variant="h5" color="" sx={{mt:4}} >
                Plot: {data.Plot}
              </Typography>
              <Button
              sx={{mt:2}}
                href={`https://www.imdb.com/title/${data.imdbID}/`}
                target="_blank"
                variant="contained"
              >
                View IMDB
              </Button>
            </Box>
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}

export default SearchItem
