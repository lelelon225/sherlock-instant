import Home from './components/pages/Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import { Grid } from '@mui/material'
import AppBar from './components/organisms/AppBar'

function App() {

  return (
    <Grid container spacing={2} className="appContainer">
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Grid>
  )
}

export default App
