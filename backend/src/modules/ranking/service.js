import ExamResult from "../examResult/model.js";
import Student from "../student/student.model.js";

export const getClassRanking = async (classId) => {
  // 1. Get all results for that class
  const results = await ExamResult.find({ classId });

  // 2. Group by student (if multiple exams exist)
  const studentScores = {};

  results.forEach((res) => {
    const id = res.studentId.toString();

    if (!studentScores[id]) {
      studentScores[id] = {
        studentId: res.studentId,
        total: 0,
        count: 0,
      };
    }

    studentScores[id].total += res.totalMarks;
    studentScores[id].count += 1;
  });

  // 3. Convert to array + average
  let rankingArray = Object.values(studentScores).map((s) => ({
    studentId: s.studentId,
    average: s.total / s.count,
  }));

  // 4. Sort descending
  rankingArray.sort((a, b) => b.average - a.average);

  // 5. Attach rank + student details
  const ranked = await Promise.all(
    rankingArray.map(async (item, index) => {
      const student = await Student.findById(item.studentId);

      return {
        rank: index + 1,
        student: student.fullName,
        average: item.average,
      };
    })
  );

  return ranked;
};