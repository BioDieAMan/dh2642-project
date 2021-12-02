import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./utils/css/news.css";
import "./utils/css/chart.css";
import Homepage from "./Pages/Homepage";
import DetailPage from "./Pages/DetailPage";
import MapPage from "./Pages/MapPage";

import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
} from "@mui/material";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

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
                {/* <Route path="/comparison" element={<Comparison/>}/> */}
              </Routes>
            </BrowserRouter>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
