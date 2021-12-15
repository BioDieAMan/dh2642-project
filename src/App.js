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
import { updateFromFirebase } from "./firebasePersistence"
import { isLoaded, useFirebaseConnect } from "react-redux-firebase"

function App() {
  const loggedIn = useSelector(state => state.firebase.auth.uid)
  const dispatch = useDispatch()

  useFirebaseConnect([
    {
      type: "once",
      path: `top/${loggedIn}`
    }
  ])
  const data = useSelector(state => state.firebase.data.top)
  function DataIsLoaded({ children }) {
    if (!isLoaded(data)) return <div></div>;
    return children
  }
  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div></div>;
    return children
  }
  dispatch(updateFromFirebase())

  return (
    <AuthIsLoaded>
      <DataIsLoaded>
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
      </DataIsLoaded>
    </AuthIsLoaded>
  )
}

export default App;
