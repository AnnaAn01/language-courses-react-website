import React from "react";
import {
  CoursesContainer,
  CoursesH1,
  CoursesWrapper,
  CoursesCard,
  CoursesIcon,
  CoursesH2,
  CoursesP,
} from "./CoursesElements";
import Icon1 from "../../images/svg-2.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-4.svg";

const Courses = () => {
  return (
    <CoursesContainer>
      <CoursesH1>Our Courses</CoursesH1>
      <CoursesWrapper>
        <CoursesCard>
          <CoursesIcon src={Icon1} />
          <CoursesH2>For Elementary Students</CoursesH2>
          <CoursesP>Learn the basics with this course.</CoursesP>
        </CoursesCard>
        <CoursesCard>
          <CoursesIcon src={Icon2} />
          <CoursesH2>For Elementary Students</CoursesH2>
          <CoursesP>Learn the basics with this course.</CoursesP>
        </CoursesCard>
        <CoursesCard>
          <CoursesIcon src={Icon3} />
          <CoursesH2>For Elementary Students</CoursesH2>
          <CoursesP>Learn the basics with this course.</CoursesP>
        </CoursesCard>
      </CoursesWrapper>
    </CoursesContainer>
  );
};

export default Courses;
