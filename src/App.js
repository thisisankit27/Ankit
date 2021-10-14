import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Tale from "./components/Tale/Tale";
//import Tracks from "./components/Tracks/Tracks";
import Community from "./components/Community/Community";
import Prizes from "./components/Prizes/Prizes";
// // import Video from "./components/Video/Video";
import Footer from "./components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div className="content">
          <Switch>
            <Route path="/">
              <Landing />
              <Tale />
              {/* <Video url="#" /> */}
              {/* <Tracks /> */}
              <Community />
              <Prizes />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
