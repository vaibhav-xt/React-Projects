import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <div>

      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route
            element={<News apiKey={apiKey} setProgress={setProgress} country="in" headline="General" category="general" key="1" />}
            exact
            path="/" />
          <Route
            element={<News apiKey={apiKey} setProgress={setProgress} country="in" headline="Business" category="business" key="2" />}
            exact
            path="/business" />
          <Route
            element={<News apiKey={apiKey} setProgress={setProgress} country="in" headline="Entertainment" category="entertainment" key="3" />}
            exact
            path="/entertainment" />
          <Route
            element={<News apiKey={apiKey} setProgress={setProgress} country="in" headline="Health" category="health" key="4" />}
            exact
            path="/health" />
          <Route
            element={<News apiKey={apiKey} setProgress={setProgress} country="in" headline="Science" category="science" key="5" />}
            exact
            path="/science" />
          <Route
            element={<News apiKey={apiKey} setProgress={setProgress} country="in" headline="Sports" category="sports" key="6" />}
            exact
            path="/sports" />
          <Route
            element={<News apiKey={apiKey} setProgress={setProgress} country="in" headline="Technology" category="technology" key="7" />}
            exact
            path="/technology" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
