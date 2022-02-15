import React from "react";
import Footer from "./Footer";
import Main from "./Main";
import Nav from "./Nav";

function App(){
  return (
    <div className="container">
      <Nav />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
