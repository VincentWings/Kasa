import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/style.css'
import App from './components/App'
import FlatOverview from './components/FlatOverview'
import About from './components/About'
import PageNotFound from './components/PageNotFound'

const rootElement = document.getElementById('root')

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flat" element={<FlatOverview />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)