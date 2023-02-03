import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';
import Calculator from './Calculator';
import Export from './Export';
import './styles.css';
import './app.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [cgpaScale, setCgpaScale] = useState(5.0);

  const addCourse = (course, grade, creditHours) => {
    setCourses([...courses, { course, grade, creditHours }]);
  };

  const removeCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const handleCgpaScaleChange = (event) => {
    setCgpaScale(event.target.value);
  };

  const totalCreditHours = courses.reduce((acc, course) => acc + course.creditHours, 0);
  const totalGrades = courses.reduce((acc, course) => acc + (course.grade * course.creditHours), 0);
  const cgpa = totalCreditHours > 0 ? totalGrades / totalCreditHours : 0;

  return (
    <div className="app">
      <h1 className="app-title">CGPA Calculator</h1>
      <Form
        onSubmit={addCourse}
        cgpaScale={cgpaScale}
        handleCgpaScaleChange={handleCgpaScaleChange}
      />
      <Table courses={courses} removeCourse={removeCourse} />
      <Calculator cgpa={cgpa} cgpaScale={cgpaScale} />
      <Export courses={courses} cgpa={cgpa} cgpaScale={cgpaScale} />
    </div>
  );
}

export default App;
