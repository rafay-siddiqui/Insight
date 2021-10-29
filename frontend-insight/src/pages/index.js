import React from "react";
import Footer from "../components/Footer";
import logo from "../images/2.jpg";
//import Button from "../Button";
import HeaderSection from "../components/HeaderSection";

import { NavLogoHome } from "../components/Navbar/NavbarElements";

import {
  HeaderContent,
  HeaderH1,
} from "../components/HeaderSection/HeaderElement";

function Home() {

  return (
    <>
      <NavLogoHome to="/">
        <HeaderH1>Welcome to</HeaderH1>
        <img src={logo} height="200" width="200" padding="24px" alt="" ></img>{" "}
      </NavLogoHome>
      <HeaderSection />
      <Footer />
    </>
  );
}

export default Home;
