import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './style/themes/default'
import { GlobalStyle } from './style/global'
import { CycleContextProvider } from './contexts/CycleContext'


function App() {


  return (
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router/>
        </CycleContextProvider>
      </BrowserRouter>


      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
