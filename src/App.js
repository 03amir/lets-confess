import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ConfessPage from "./Pages/ConfessPage";
import Navbar from "./Components/Navbar";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <h1>Open Letter</h1>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/confess" element={<ConfessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
