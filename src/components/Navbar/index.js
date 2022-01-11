import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

function Navbar() {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LogoHere</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="courses">Our Courses</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="language-test">Language Test</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="individual-study">Individual Study</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </div>
  );
}

export default Navbar;
