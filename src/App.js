import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, CssBaseline, Container } from "@mui/material";
import "./index.css";
import Homepage from "./Pages/Homepage";
import AccountPage from "./Pages/AccountPage";
import DetailPage from "./Pages/DetailPage";
import ComparePage from "./Pages/ComparePage";
import Navbar from "./components/Navbar";
import history from "./history";
import { useFirebaseConnect } from "react-redux-firebase"
import { useSelector, useDispatch } from "react-redux"
import { setCountry } from "./redux/actions/countryActions"

function App() {
  useFirebaseConnect([
    { path: "countries" }
  ])
  const dispatch = useDispatch()
  const countries = useSelector(state => state.firebase.data.countries)
  if (!countries) {
    return (
      <div></div>
    )
  }
  //dispatch(firebaseAction)
  dispatch(setCountry(countries.current))



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
            <Route path="/details" element={<DetailPage />} />
            <Route path="/compare" element={<ComparePage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
