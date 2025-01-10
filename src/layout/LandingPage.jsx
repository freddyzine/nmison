import React from "react";
import Footer from "../components/Footer";
import LandingPageHeader from "../components/LandingPageHeader";

const LandingPage = ({ children }) => {
  return (
    <>
      <LandingPageHeader />
      {children}
      <Footer />
    </>
  );
};

export default LandingPage;
