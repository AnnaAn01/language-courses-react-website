import React from "react";

const Courses = () => {
  return (
    <CoursesContainer>
      <CoursesH1>Our Courses</CoursesH1>
      <CoursesWrapper>
        <CoursesCard>
          <CoursesIcon sr={Icon1} />
          <CoursesH2>For Elementary Students</CoursesH2>
          <CoursesP>Learn the basics with this course.</CoursesP>
        </CoursesCard>
        <CoursesCard>
          <CoursesIcon sr={Icon2} />
          <CoursesH2>For Elementary Students</CoursesH2>
          <CoursesP>Learn the basics with this course.</CoursesP>
        </CoursesCard>
        <CoursesCard>
          <CoursesIcon sr={Icon3} />
          <CoursesH2>For Elementary Students</CoursesH2>
          <CoursesP>Learn the basics with this course.</CoursesP>
        </CoursesCard>
      </CoursesWrapper>
    </CoursesContainer>
  );
};

export default Courses;
