import React, { useState } from 'react';

const calculateCGPA = (grades, creditHours) => {
  let totalPoints = 0;
  let totalCreditHours = 0;

  grades.forEach((grade, index) => {
    switch (grade) {
      case 'A':
        totalPoints += 5 * creditHours[index];
        break;
      case 'B':
        totalPoints += 4 * creditHours[index];
        break;
      case 'C':
        totalPoints += 3 * creditHours[index];
        break;
      case 'D':
        totalPoints += 2 * creditHours[index];
        break;
      case 'E':
        totalPoints += 1 * creditHours[index];
        break;
      case 'F':
        totalPoints += 0 * creditHours[index];
        break;
      default:
        break;
    }
    totalCreditHours += creditHours[index];
  });

  return totalPoints / totalCreditHours;
};

const Calculator = ({ courses, grades, creditHours }) => {
  const [cgpa, setCGPA] = useState(0);

  const handleCalculate = () => {
    const calculatedCGPA = calculateCGPA(grades, creditHours);
    setCGPA(calculatedCGPA);
  };

  return (
    <div>
      <button onClick={handleCalculate}>Calculate CGPA</button>
      <p>CGPA: {cgpa}</p>
    </div>
  );
};

export default Calculator;