import React from 'react';
import Video from '../../videos/video.mp4';
import Button from "../Button";
import { useState } from 'react';


import {HeaderContainer, 
    HeaderBg, 
    VideoBg, 
    HeaderContent, 
    HeaderH1, 
    HeaderP,
   HeaderBtnWrapper} from './HeaderElement';

function HeaderSection() {
    const [hover, SetHover]= useState(false)
    const onHover= () =>{
        SetHover(!hover)
    }
    return (
        <HeaderContainer>
        <HeaderBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeaderBg>
        <HeaderContent>
            <HeaderH1> Let The Money Work For You</HeaderH1>
            <HeaderP>
                Join Us Today to Make Smart Investments and Receive Stocks worth of $100 for FREE!!
            </HeaderP>
            <HeaderBtnWrapper>

            </HeaderBtnWrapper>
            <Button to="Signup" onMouseEnter={onHover} OnMouseLeave={onHover}></Button>
            Get Started 
        </HeaderContent>

        </HeaderContainer>
    )
}

export default HeaderSection;
