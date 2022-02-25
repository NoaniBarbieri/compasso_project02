import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer"
import CentralContentHome from "./components/CentralContentHome/index"
import React from "react";

function HomePage() {
  return (
    <div className="App">
          <Header/>
          <CentralContentHome/>
          <Footer/>
    </div>
  );
}

export default HomePage;
