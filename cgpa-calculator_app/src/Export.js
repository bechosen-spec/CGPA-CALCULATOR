import React from 'react';

const Export = ({ courses, grades, creditHours, cgpa }) => {
  const handleExport = () => {
    const data = `Course,Grade,Credit Hour\n${courses
      .map((course, index) => `${course},${grades[index]},${creditHours[index]}`)
      .join('\n')}\n\nCGPA,${cgpa}`;
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'cgpa.csv';
    link.href = url;
    link.click();
  };

  return (
    <button onClick={handleExport}>Export to CSV</button>
  );
};

export default Export;
