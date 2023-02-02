import React from 'react';

const calculateCGPA = (grades, creditHours, cgpaScale) => {
  let totalGrades = 0;
  let totalCreditHours = 0;

  grades.forEach((grade, index) => {
    let convertedGrade = 0;

    switch (grade.toUpperCase()) {
      case 'A':
        convertedGrade = cgpaScale.a;
        break;
      case 'B':
        convertedGrade = cgpaScale.b;
        break;
      case 'C':
        convertedGrade = cgpaScale.c;
        break;
      case 'D':
        convertedGrade = cgpaScale.d;
        break;
      case 'E':
        convertedGrade = cgpaScale.e;
        break;
      case 'F':
        convertedGrade = cgpaScale.f;
        break;
      default:
        break;
    }

    totalGrades += convertedGrade * creditHours[index];
    totalCreditHours += creditHours[index];
  });

  return (totalGrades / totalCreditHours).toFixed(2);
};

export default calculateCGPA;
