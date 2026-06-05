import Home from './components/pages/Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import ErrorPage from './components/pages/ErrorPage'
import { Grid } from '@mui/material'
import AppBar from './components/organisms/AppBar'

function App() {

  return (
    <Grid container spacing={2} className="appContainer">
      <AppBar
        title="MovieDB"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Grid>
  )
}

export default App
