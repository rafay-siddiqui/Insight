import React from "react";
import Video from "../../videos/video.mp4";
import Button from "../Button";
import { useState,useContext } from "react";
import Login from "../Login";
import { authContext } from "../../providers/AuthProvider";

import LoginInfo from "../../components/LoginInfo";

import {
  HeaderContainer,
  HeaderBg,
  VideoBg,
  HeaderContent,
  HeaderH1,
  HeaderH2,
  HeaderP,
  HeaderBtnWrapper,
  HeaderContentRight,
} from "./HeaderElement";

function HeaderSection() {
  const { auth } = useContext(authContext);
  const [hover, SetHover] = useState(false);
  const onHover = () => {
    SetHover(!hover);
  };
  return (
    
      <HeaderContainer>
        <HeaderBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeaderBg>
        <HeaderContent>
          <HeaderH1> ABOUT US</HeaderH1>
          <br />
          <br />
          <HeaderH2> StockQuotes </HeaderH2>
          <HeaderH2> Portfolios </HeaderH2>
          <HeaderH2> Financial Models </HeaderH2>
          <br />
          <br />

          <HeaderH1> Let The Money Work For You !!</HeaderH1>
          {/*<HeaderP>
            Join Us Today to Make Smart Investments and Receive Stocks worth of
            $100 for FREE!!
          </HeaderP> */}
          <HeaderBtnWrapper>
            <Button to="/" onMouseEnter={onHover} OnMouseLeave={onHover}>
              Get Started
            </Button>
          </HeaderBtnWrapper>
        </HeaderContent>
        <HeaderContentRight>
          {!auth && <Login />}
          {auth && <LoginInfo />}
        </HeaderContentRight>
      </HeaderContainer>
    
  );
}

export default HeaderSection;
