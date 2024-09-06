import React from "react";
import Navbar from "../components/Navbar";
import Mobiles from "../components/Mobiles";
import Footer from "../components/Footer";

function Mobile() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Mobiles />
      </div>
      <Footer />
    </>
  );
}

export default Mobile;
