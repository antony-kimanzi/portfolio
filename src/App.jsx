import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { SectionProvider } from "./context/SectionContext"
function App() {

  return (
    <SectionProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </SectionProvider>
  )
}

export default App
