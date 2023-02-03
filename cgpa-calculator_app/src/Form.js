import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [course, setCourse] = useState('');
  const [grade, setGrade] = useState('');
  const [creditHour, setCreditHour] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(course, grade, creditHour);
    setCourse('');
    setGrade('');
    setCreditHour(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="course">Course:</label>
        <input
          type="text"
          id="course"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="grade">Grade:</label>
        <select
          id="grade"
          value={grade}
          onChange={(event) => setGrade(event.target.value)}
        >
          <option value="">Select a grade</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
      </div>
      <div>
        <label htmlFor="credit-hour">Credit Hour:</label>
        <input
          type="number"
          id="credit-hour"
          value={creditHour}
          onChange={(event) => setCreditHour(event.target.value)}
        />
      </div>
      <button type="submit">Add Course</button>
    </form>
  );
};

export default Form;
