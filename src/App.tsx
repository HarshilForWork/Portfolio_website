import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import MenuButton from './components/MenuButton'
import ThreeBackground from './components/ThreeBackground'
import AboutPage from './pages/AboutPage'
import MainPage from './pages/MainPage'

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <ThreeBackground />
        <CustomCursor />
        <MenuButton />
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
