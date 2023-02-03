import React from 'react';

const Table = ({ courses, grades, creditHours, cgpa }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Grade</th>
          <th>Credit Hour</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{course}</td>
            <td>{grades[index]}</td>
            <td>{creditHours[index]}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>CGPA: {cgpa}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
