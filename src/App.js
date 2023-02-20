import "bootswatch/dist/solar/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
