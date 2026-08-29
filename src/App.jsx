import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { SectionProvider } from "./context/SectionContext";
function App() {
  return (
    <SectionProvider>
      <Router basename="/portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </SectionProvider>
  );
}

export default App;
