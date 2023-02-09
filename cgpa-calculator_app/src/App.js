import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import Calculator from "./Calculator";
import Export from "./Export";
import "./styles.css";
import "./app.css";

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

  const grades = courses.map((course) => course.grade);
  const creditHours = courses.map((course) => course.creditHours);

  return (
    <div className="app">
      <h1 className="app-title">CGPA Calculator</h1>
      <Form
        onSubmit={addCourse}
        cgpaScale={cgpaScale}
        handleCgpaScaleChange={handleCgpaScaleChange}
      />
      <Table courses={courses} removeCourse={removeCourse} />
      <Calculator courses={courses} grades={grades} creditHours={creditHours} />
      <Export courses={courses} cgpaScale={cgpaScale} />
    </div>
  );
}

export default App;
