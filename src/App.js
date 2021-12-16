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
import { updateFromFirebase } from "./firebasePersistence";
import { isLoaded, useFirebaseConnect } from "react-redux-firebase";

function App() {
<<<<<<< HEAD
  const loggedIn = useSelector(state => !state.firebase.auth.isEmpty)
  const dispatch = useDispatch()
=======
  const loggedIn = useSelector((state) => state.firebase.auth.uid);
  const dispatch = useDispatch();
>>>>>>> 4485cb8ca9de5e82d946f8f06b4221a49e6c3d0b

  useFirebaseConnect([
    {
      type: "value",
      path: `top`,
    },
  ]);

  function DataIsLoaded({ children }) {
    const data = useSelector((state) => state.firebase.data.top);
    if (!isLoaded(data)) return <div></div>;
    else {
      dispatch(updateFromFirebase());
      return children;
    }
  }
  function AuthIsLoaded({ children }) {
    const auth = useSelector((state) => state.firebase.auth);
    if (!isLoaded(auth)) return <div></div>;
    return children;
  }

  return (
    <AuthIsLoaded>
      <DataIsLoaded>
        <>
          <CssBaseline />

          <Container maxWidth="xl">
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
  );
}

export default App;
