import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./index.css"
import "./utils/css/news.css"
import "./utils/css/chart.css"
import "./utils/css/countryToggle.css"
import "./utils/css/flex.css"
import "./utils/css/map.css"
import Counter from "./components/Counter";
import Homepage from "./Pages/Homepage";
import ComparePage from "./Pages/ComparePage";
import DetailPage from "./Pages/DetailPage";
import Navbar from "./components/Navbar";
import MapPage from "./Pages/MapPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/details" element={<DetailPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
