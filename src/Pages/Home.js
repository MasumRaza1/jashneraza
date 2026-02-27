// import React from "react";
// import Navbar from "../Components/Navbar";
// import Hero from "../Components/Hero";
// import About from "../Components/About";
// import ChooseFrsociety from "../Components/ChooseFrsociety";
// import Reviews from "../Components/Reviews";
// import Mission from "../Components/Mission";
// import OurWorks2 from "../Components/OurWorks2";
// import Donate from "../Components/Donate";
// import Footer from "../Components/Footer";


// function Home() {
//   return (
//     <div className="home-section">
//       <Navbar />
//       <Hero />
//       <Mission />
//       <About />
//       <ChooseFrsociety />
//       <OurWorks2 />
//       <Donate />
//       <Reviews />
//       <Footer />
//     </div>
//   );
// }

// export default Home;
import React from "react";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fdfdfd",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        textAlign: "center",
        color: "#666",
        padding: "20px"
      }}
    >
      <div style={{ lineHeight: "2", fontWeight: 300 }}>
        <div style={{ fontSize: "18px", color: "#444" }}>
          FR Society
        </div>
        <div
          style={{
            fontSize: "11px",
            color: "#b5b5b5",
            marginBottom: "25px",
            letterSpacing: "1.5px"
          }}
        >
          2021 — 2024
        </div>
        <div>This society has permanently closed.</div>
        <div>We are grateful for your support.</div>
        <div style={{ fontSize: "12px", marginTop: "20px", color: "#aaa" }}>
          For any enquiries: frsociety786@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Home;
