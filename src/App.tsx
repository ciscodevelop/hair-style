import React from "react";

import "./app.scss";
import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavBar />
      </header>
      <main className="main">
        <Home />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
