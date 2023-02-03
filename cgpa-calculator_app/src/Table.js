import React from 'react';

const Table = ({ courses, removeCourse }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Grade</th>
          <th>Credit Hour</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{course.course}</td>
            <td>{course.grade}</td>
            <td>{course.creditHours}</td>
            <td>
              <button type="button" onClick={() => removeCourse(index)}>
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
