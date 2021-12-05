import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, CssBaseline, Container } from "@mui/material";
import "./index.css";
import "./utils/css/news.css";
import "./utils/css/chart.css";
import "./utils/css/flex.css";
import "./utils/css/map.css";
import "./utils/css/comparison.css";
import Homepage from "./Pages/Homepage";
import DetailPage from "./Pages/DetailPage";
import MapPage from "./Pages/MapPage";
import ComparePage from "./Pages/ComparePage"


function App() {
  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Covindex
            </Typography>
          </Container>
          <Container maxWidth="lg">
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/details" element={<DetailPage />} />
                <Route path="/compare" element={<ComparePage />} />
              </Routes>
            </BrowserRouter>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
