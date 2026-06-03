import { Grid, Typography } from '@mui/material'

function HomeTemplate() {
  return (
    <Grid container spacing={2} className="homeContainer">
      <Grid>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Sherlock Instant!
        </Typography>
        <Typography variant="body1">
          This is the home page of the application. Use the navigation bar to explore different features.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default HomeTemplate