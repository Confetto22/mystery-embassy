import { useLayoutEffect } from "react";
import "./App.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import EvtDetail from "./components/common/EvtDetail";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<EvtDetail />} />
          {/* <Route path="/about-us" element={<About />} />
          <Route path="/new-here" element={<NewHere />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<NewsBlog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/give" element={<Give />} />
          <Route path="/prayer-wall" element={<PrayerWall />} />
          <Route path="/give-online" element={<OnlineGive />} /> */}
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
