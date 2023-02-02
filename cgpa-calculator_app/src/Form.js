import React, { useState } from 'react';

const Form = () => {
const [cgpaScale, setCGPAScale] = useState(5.0);
const [noOfCourses, setNoOfCourses] = useState(0);
const [grades, setGrades] = useState([]);
const [creditHours, setCreditHours] = useState([]);
const [cgpa, setCGPA] = useState(0);

const handleNoOfCoursesChange = (e) => {
setNoOfCourses(e.target.value);
};

const handleGradesChange = (e, index) => {
const updatedGrades = [...grades];
updatedGrades[index] = e.target.value;
setGrades(updatedGrades);
};

const handleCreditHoursChange = (e, index) => {
const updatedCreditHours = [...creditHours];
updatedCreditHours[index] = e.target.value;
setCreditHours(updatedCreditHours);
};

const calculateCGPA = () => {
let totalGradePoints = 0;
let totalCreditHours = 0;

grades.forEach((grade, index) => {
    let gradePoints;
    switch (grade) {
      case 'A':
        gradePoints = cgpaScale;
        break;
      case 'B':
        gradePoints = cgpaScale - 1;
        break;
      case 'C':
        gradePoints = cgpaScale - 2;
        break;
      case 'D':
        gradePoints = cgpaScale - 3;
        break;
      case 'E':
        gradePoints = cgpaScale - 4;
        break;
      default:
        gradePoints = 0;
    }
    totalGradePoints += gradePoints * creditHours[index];
    totalCreditHours += creditHours[index];
  });
  
  setCGPA(totalGradePoints / totalCreditHours);
};

const handleSubmit = (e) => {
e.preventDefault();
calculateCGPA();
};

const formInputs = [];
for (let i = 0; i < noOfCourses; i++) {
formInputs.push(
<div key={i}>
<label htmlFor={grade-${i}}>Grade for course {i + 1}:</label>
<input
type="text"
id={grade-${i}}
value={grades[i] || ''}
onChange={(e) => handleGradesChange(e, i)}
/>
<label htmlFor={credit-hours-${i}}>
Credit hours for course {i + 1}:
</label>
<input
type="number"
id={credit-hours-${i}}
value={creditHours[i] || 0}
onChange={(e) => handleCreditHoursChange(e, i)}
/>
</div>
);
}

return (
<form onSubmit={handleSubmit}>
<label htmlFor="cgpa-scale">CGPA Scale:</label>  