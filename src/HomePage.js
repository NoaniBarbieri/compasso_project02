import Header from "./components/Header";
import Footer from "./components/Footer/footer"
import CentralContentHome from "./components/CentralContentHome/index"
import React from "react";

function App() {
  return (
    <div className="App">
          <Header/>
          <CentralContentHome/>
          <Footer/>
    </div>
  );
}

export default App;
