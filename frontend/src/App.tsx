import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import People from "./components/People";
import NewPerson from "./components/NewPerson";
import FetchAlphaButton from "./components/FetchAlpha";
import UpdateAlphaButton from "./components/updateAlpha";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<People />} />
          <Route path="/new-person" element={<NewPerson />} />
          <Route path="/fetch-alpha" element={<FetchAlphaButton />} />
          <Route path="/update-alpha" element={<UpdateAlphaButton />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
