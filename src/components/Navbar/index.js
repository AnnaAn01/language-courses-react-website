// import React from "react";
// import { FaBars } from "react-icons/fa";
// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   MobileIcon,
//   NavMenu,
//   NavItem,
//   NavLinks,
//   NavBtn,
//   NavBtnLink,
// } from "./NavbarElements";

// function Navbar({ toggle }) {
//   return (
//     <div>
//       <Nav>
//         <NavbarContainer>
//           <NavLogo to="/">LogoHere</NavLogo>
//           <MobileIcon onClick={toggle}>
//             <FaBars />
//           </MobileIcon>
//           <NavMenu>
//             <NavItem>
//               <NavLinks to="about">About</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks to="courses">Our Courses</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks to="language-test">Language Test</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks to="blog">Blog</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks to="signup">Sign Up</NavLinks>
//             </NavItem>
//           </NavMenu>
//           <NavBtn>
//             <NavBtnLink to="/signin">Sign In</NavBtnLink>
//           </NavBtn>
//         </NavbarContainer>
//       </Nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: "#000" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            ProjectLogo
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="courses"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Our Courses
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="testimonials"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Testimonials
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="language-test"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Language Test
              </NavLinks>
            </NavItem>
            {/*
            <NavItem>
              <NavLinks
                to="blog"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Blog
              </NavLinks>
  
            </NavItem>*/}
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="/signin"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Sign In
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
