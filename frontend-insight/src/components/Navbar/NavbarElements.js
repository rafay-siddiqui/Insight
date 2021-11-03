import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: #000;
  height: 100px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  top: 0;
  z-index: 12;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 24px 24px;
  max-width: 100%;
  margin-right: 500px;
`;
export const NavLogo = styled(LinkR)`
color: #FFF;
justify-self: Flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;
&:hover{
    transition: all 0.2s ease-in-out;
  
    color: #ffd700;

`;

export const NavLogoHome = styled(LinkR)`
color: #FFF;
justify-self: Flex-start;
Background : #000;
cursor: pointer;
font-size: 2.5rem;
text-align: Center;
display: flex;
align-items : center;
justify-content: center; 
font-weight: bold;
text-decoration: none;
overflow: hidden;

&:hover{
    transition: all 0.2s ease-in-out;
  
    color: #ffd700;

`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 100px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  color: #ffd700;
`;

export const NavLinks = styled(LinkR)`
color: #fff;
display: flex;
align-item: center;
text-decoration: none;
padding: 2.5rem 1rem;
height: 100%;
cursor: pointer;

&.active{
    border-bottom: 3px solid #01bf71;
}

&:hover{
    transition: all 0.2s ease-in-out;
  
    color: #ffd700;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-item: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BalShow = styled.nav`
   {
    background: #d7b546;
    padding: 2px 10px 2px 0;
    border-radius: 25px;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9%;
    margin-left: -300px;
  }
`;
