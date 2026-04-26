const Parents = () => {
  const data = {
    name: "Ahmed Hassan Ali",
    class: "Grade 8 - A",
    roll: 12,
    avg: 82,
    rank: 2,
    attendance: 92
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">👨‍👩‍👧 Student Dashboard</h2>

      <div className="bg-gray-100 p-4 rounded">
        <p><b>Name:</b> {data.name}</p>
        <p><b>Class:</b> {data.class}</p>
        <p><b>Roll No:</b> {data.roll}</p>
      </div>

      <div className="bg-blue-100 p-4 rounded">
        <p><b>Average Score:</b> {data.avg}%</p>
        <p><b>Class Rank:</b> {data.rank}rd</p>
      </div>

      <div className="bg-green-100 p-4 rounded">
        <p><b>Attendance:</b> {data.attendance}%</p>
      </div>
    </div>
  );
};

export default Parents;