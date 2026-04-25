import gradeScale from "../constant/gradeScale.js";

export const getGradeAndGpa = (marks, total) => {
  const percent = (marks / total) * 100;

  const match = gradeScale.find((g) => percent >= g.min);

  return {
    grade: match.grade,
    gpa: match.gpa,
  };
};