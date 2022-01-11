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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <sidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="courses">Our Courses</SidebarLink>
          <SidebarLink to="language-test">Language Test</SidebarLink>
          <SidebarLink to="individual-study">Individual Study</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarMenu>
      </sidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
