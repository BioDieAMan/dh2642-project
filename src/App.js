import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, CssBaseline, Container } from "@mui/material";
import "./index.css";
import Homepage from "./Pages/Homepage";
import AccountPage from "./Pages/AccountPage";
import DetailPage from "./Pages/DetailPage";
import ComparePage from "./Pages/ComparePage";
import Navbar from "./components/Navbar";
import history from "./history";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase"
import { persistenceLoader } from "./firebasePersistence"

function App() {
  const dispatch = useDispatch()
  const authLoaded = useSelector(state => state.firebase.auth.isLoaded)
  const loggedIn = useSelector(state => state.firebase.auth.uid)
  if (!authLoaded) {
    return <div></div>
  }

  dispatch(persistenceLoader())
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
          <Navbar className="navbar" />
          <Routes history={history}>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/details" element={<DetailPage />} />
            <Route path="/compare" element={<ComparePage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
