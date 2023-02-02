import React from "react";

const Table = ({ courses, cgpa, scale }) => {
  const grades = ["A", "B", "C", "D", "E", "F"];
  const weights = {};
  grades.forEach((grade, index) => {
    weights[grade] = scale === 5.0 ? 5 - index : 4 - index;
  });

  const rows = courses.map((course, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{course.grade}</td>
      <td>{course.hours}</td>
      <td>{course.hours * weights[course.grade]}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Grade</th>
          <th>Credit Hours</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      <tfoot>
        <tr>
          <td colSpan="3">CGPA</td>
          <td>{cgpa}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
