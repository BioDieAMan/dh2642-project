import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, CssBaseline, Container } from "@mui/material";
import "./index.css";
import Homepage from "./Pages/Homepage";
import AccountPage from "./Pages/AccountPage";
import DetailPage from "./Pages/DetailPage";
import MapPage from "./Pages/MapPage";
import ComparePage from "./Pages/ComparePage";
// import ComparePage from "./Pages/ComparePage";
import Navbar from "./components/Navbar";
import history from "./history";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector(
    (state) => state.firebase.auth.isLoaded && !state.firebase.auth.isEmpty
  );
  return (
    <>
      <CssBaseline />

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
      <Container maxWidth="xl">
        <BrowserRouter>
          <Navbar />
          <Routes history={history}>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/account" element={<AccountPage />} />
            {/* <Route path="/map" element={<MapPage />} /> */}
            <Route path="/details" element={<DetailPage />} />
            <Route path="/compare" element={<ComparePage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
