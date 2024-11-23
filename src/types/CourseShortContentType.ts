import { MouseEventHandler } from "react";

export type CourseShortContentType = {
  courseBookImg: string;
  alt: string;
  shortDescription: string;
  teacherName: string;
  onClickGoToTeacherProfile: MouseEventHandler<HTMLDivElement>;
  onClickOpenMenu: MouseEventHandler<HTMLDivElement>;
  onClickGoToStudentsList: MouseEventHandler<HTMLDivElement>;
  onClickCourse: MouseEventHandler<HTMLDivElement>;
  deleteCourse: MouseEventHandler<HTMLDivElement>;
  modifyCourse: MouseEventHandler<HTMLDivElement>;
  hideCourse: MouseEventHandler<HTMLDivElement>;
  duplicateCourse: MouseEventHandler<HTMLDivElement>;
  onClickImage: MouseEventHandler<HTMLDivElement>;
};
