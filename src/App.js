import React from "react";
import Home from "./page/Home";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyle";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
