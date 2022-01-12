import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  sidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <sidebarWrapper>
        <SideBtnWrap>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="courses" onClick={toggle}>
              Our Courses
            </SidebarLink>
            <SidebarLink to="language-test" onClick={toggle}>
              Language Test
            </SidebarLink>
            <SidebarLink to="individual-study" onClick={toggle}>
              Individual Study
            </SidebarLink>
            <SidebarLink to="signup" onClick={toggle}>
              Sign Up
            </SidebarLink>
            <SidebarRoute to="/signin" onClick={toggle}>
              Sign In
            </SidebarRoute>
          </SidebarMenu>
        </SideBtnWrap>
      </sidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
