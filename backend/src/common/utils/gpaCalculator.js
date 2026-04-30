import gradeScale from "../constant/gradeScale.js";

export const getGradeAndGpa = (marks, total) => {
  if (total <= 0) {
    return { grade: "F", gpa: 0 };
  }

  const percent = (marks / total) * 100;

  const match = gradeScale.find((g) => percent >= g.min);

  if (!match) {
    return { grade: "F", gpa: 0 };
  }

  return {
    grade: match.grade,
    gpa: match.gpa,
  };
};