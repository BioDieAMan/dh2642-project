import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Counter from "./components/Counter";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/counter" element={<Counter />} />
        {/* <Route path="/map" element={<MapPage />} /> */}
        {/* <Route path="/details" element={<Details />}/>
        <Route path="/comparison" element={<Comparison/>}/>  */}
      </Routes>
    </BrowserRouter >
  );
}

export default App;
