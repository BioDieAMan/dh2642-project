import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./index.css"
import Counter from "./components/Counter";
import Homepage from "./Pages/Homepage";
import DetailPage from "./Pages/DetailPage";
import Navbar from "./components/Navbar";
import MapPage from "./Pages/MapPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/details" element={<DetailPage />} />
        {/* <Route path="/comparison" element={<Comparison/>}/> */}
      </Routes>
    </BrowserRouter >
  );
}

export default App;
