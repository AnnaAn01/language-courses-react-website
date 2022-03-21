// import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

// export const Nav = styled.nav`
//   background: #fdfdfd;
//   // margin-top: -80px;
//   // height: 80px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1rem;
//   position: sticky;
//   top: 0;
//   z-index: 10;

//   @media screen and (max-width: 960px) {
//     transition: 0.8s all ease;
//   }
// `;

// export const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 80px;
//   z-index: 1;
//   width: 100%;
//   padding: 0 24px;
//   max-width: 1100px;
// `;

// export const NavLogo = styled(LinkR)`
//   color: #57394a;
//   display: flex;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 1.5rem;
//   align-items: center;
//   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;
// `;

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     cursor: pointer;
//     color: #000;
//   }
// `;

// export const NavMenu = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   margin-right: -22px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavItem = styled.li`
//   height: 80px;
// `;

// export const NavLinks = styled(LinkS)`
//   color: #57394a;

//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   font-size: 1.3rem;

//   &.active {
//     border-bottom: 3px solid #fabb51;
//   }
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(LinkR)`
//   border-radius: 50px;
//   background: #fff;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #2e2c2c;
//   font-weight: bold;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   text-decoration: none;
//   transition: all 0.2s ease-in-out;
//   // box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #3e8e7e;
//     color: whitesmoke;
//     transform: translateY(3px);
//     // box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
//   }
// `;

import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
// background: #40E340;
background:rgba(255,255,255, 0.8);
  // background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top 0;
  z-index: 10;

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
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #000;
  // color: ${({ scrollNav }) => (scrollNav ? "#fff" : "#000")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  z-index: 111;
  font-weight: 500;

  &.active {
    border-bottom: 3px solid #40e340;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01BF71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border:none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  

  &:hover {
      transition: a;; 0.2s ease-in-out;
      background: #eee;
      
      color: #010606;

  }
`;
