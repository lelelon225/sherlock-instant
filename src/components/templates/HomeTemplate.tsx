import { Grid } from '@mui/material'
import ListPopular from '../organisms/ListPopular'


function HomeTemplate() {
  return (
    <Grid container spacing={2} className="homeContainer">
      <Grid>
          <ListPopular />
      </Grid>
    </Grid>
  )
}

export default HomeTemplate