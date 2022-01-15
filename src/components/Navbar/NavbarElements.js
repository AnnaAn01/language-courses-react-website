import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  // background: #3e8e7e;
  // background: #ff8c00;
  // background: #0e5540;
  // background: #e0c2c0;
  // background: linear-gradient(to right, #84ceeb, #5ab9ea, #8860d0);
  background: linear-gradient(
    to right,
    #bfe2fe,
    #fecdcb,
    #9dcbff,
    #f0cfe4,
    #ffeefc
  );

  // background: linear-gradient(to right, #16a085, #14d4ae);
  // background: linear-gradient(to right, #ff7a6d, #ff7a6d);
  // background: linear-gradient(to right, #799f0c, #799f0c);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  z-index: 10;
  // border-radius: 0 0 10px 10px;
  // box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  // box-shadow: 0 1rem 2rem rgba(170, 97, 7, 0.2);

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
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  color: #57394a;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  margin-left: -100px;
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
    color: #fff;
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
  color: #57394a;

  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.3rem;

  &.active {
    border-bottom: 3px solid #fabb51;
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
  background: #fff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #2e2c2c;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  // box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: whitesmoke;
    color: #3e8e7e;
    transform: translateY(3px);
    // box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
`;
