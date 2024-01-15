import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import Week1 from "../pages/portfolio/week/week1";
import Week2 from "../pages/portfolio/week/week2";
import Week3 from "../pages/portfolio/week/week3";
import Week4 from "../pages/portfolio/week/week4";
import Week5 from "../pages/portfolio/week/week5";
import Week6 from "../pages/portfolio/week/week6";
import Week7 from "../pages/portfolio/week/week7";
import Week9 from "../pages/portfolio/week/week9";
import Week10 from "../pages/portfolio/week/week10";
import Week11 from "../pages/portfolio/week/week11";
import Week12 from "../pages/portfolio/week/week12";
import Week13 from "../pages/portfolio/week/week13";
import Week14 from "../pages/portfolio/week/week14";
import Week15 from "../pages/portfolio/week/week15";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/week/week1" element={<Week1 />} />
        <Route path="/portfolio/week/week2" element={<Week2 />} />
        <Route path="/portfolio/week/week3" element={<Week3 />} />
        <Route path="/portfolio/week/week4" element={<Week4 />} />
        <Route path="/portfolio/week/week5" element={<Week5 />} />
        <Route path="/portfolio/week/week6" element={<Week6 />} />
        <Route path="/portfolio/week/week7" element={<Week7 />} />
        <Route path="/portfolio/week/week9" element={<Week9 />} />
        <Route path="/portfolio/week/week10" element={<Week10 />} />
        <Route path="/portfolio/week/week11" element={<Week11 />} />
        <Route path="/portfolio/week/week12" element={<Week12 />} />
        <Route path="/portfolio/week/week13" element={<Week13 />} />
        <Route path="/portfolio/week/week14" element={<Week14 />} />
        <Route path="/portfolio/week/week15" element={<Week15 />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
