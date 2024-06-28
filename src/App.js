import "./App.css";
import React, { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import {
  //MemoryRouter as Router,
  BrowserRouter as Router,
  // HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages";
import About from "./pages/about";
import NoPage from "./pages/nopage";
import DeckFlow from "./pages/deckflow";
import DesignSystem from "./pages/designsystem";
import Movie from "./pages/movie";
import HRPortal from "./pages/hrportal";
import EInvoice from "./pages/einvoice";
import Login from "./pages/login";

// import Layout from "./pages/layout";

// import { PASSWORD } from "./config";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [cursorText, setCursorText] = useState("");

  // const navigate = useNavigate();
  const authenticate = (password) => {
    if (password === process.env.REACT_APP_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // useEffect(() => {

  //   console.log(cursorText);
  // }, [cursorText]);

  // useEffect(() => {
  //   console.log(isAuthenticated);
  //   if (isAuthenticated) {
  //     navigate("/designsystem");
  //   }
  // }, [isAuthenticated, navigate]);
  return (
    <>
      <Router basename={`/${process.env.PUBLIC_URL}`}>
        {/* <Router> */}
        {!isMobile() && (
          <AnimatedCursor
            color="#fff"
            innerSize={8}
            outerSize={50}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            trailingSpeed={3}
            outerStyle={{
              border: "2px solid #fff",
              backgroundColor: "rgba(191, 0, 45, 0.3)",
              // opacity: 0.3,
              // mixBlendMode: "exclusion",
            }}
            clickables={[
              "a",
              ".link",
              ".proj-img",
              ".proj-title",
              ".page-desc-password button",
              // {
              //   target: ".proj-title",
              //   options: {
              //     innerSize: 12,
              //     outerSize: 12,
              //     color: "100, 100, 255",
              //     outerAlpha: 0.3,
              //     innerScale: 0.7,
              //     outerScale: 5
              //   }
              // }
            ]}
            // innerStyle={{
            //   backgroundColor: "var(--cursor-color)"
            // }}
          >
            {/* <div>
        {cursorText}
      </div> */}
          </AnimatedCursor>
        )}
        <Navbar />
        <Routes>
          <Route index path="" element={<Home />} />
          {/* <Route index path="/" element={<Home setCursorText={setCursorText} />} /> */}
          <Route path="about" element={<About />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route
            path="designsystem"
            element={
              isAuthenticated ? (
                <DesignSystem />
              ) : (
                <Navigate to="/login" replace={false} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login authenticate={authenticate} />}
          />
          {/* <Route path="designsystem" element={<DesignSystem />} /> */}
          <Route path="deckflow" element={<DeckFlow />} />
          <Route path="movie" element={<Movie />} />
          <Route path="hrportal" element={<HRPortal />} />
          <Route path="einvoice" element={<EInvoice />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
