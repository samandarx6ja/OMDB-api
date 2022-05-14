import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import {Grid, Paper, Typography, ButtonBase, styled  } from '@mui/material';
import { minWidth } from '@mui/system';

const SearchItem = () => {
  const { id } = useParams()
  const [data, setData] = React.useState([{}])

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
      console.log(res.data)

      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  



  return (
    <div>
      <Paper
      maxWidth="xl"
      sx={{
        p: 2,
        mt: 4,
        maxWidth:900,

      }}
    >
        
      <Grid container spacing={2} 
      >
        <Grid item>
          <ButtonBase sx={{ height: '100%'}}>
            <Img alt="complex" src={data.Poster} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  )
}

export default SearchItem
