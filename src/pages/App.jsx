import React, { Suspense } from "react";
import SplashScreen from "./SplashScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";
import Homepage from "./Homepage";
import StoryDetatils from "./storyDetails";

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/storyDetails" element={<StoryDetatils />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
