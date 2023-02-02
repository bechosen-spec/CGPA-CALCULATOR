import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import calculateCGPA from "./calculateCGPA";
import "./styles.css";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [cgpa, setCgpa] = useState(null);
  const [cgpaScale, setCgpaScale] = useState(null);

  const handleSubmit = (grades, credits) => {
    setCourses(grades.map((grade, index) => ({ grade, credit: credits[index] })));
    setCgpa(calculateCGPA(grades, credits, cgpaScale));
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} setCgpaScale={setCgpaScale} />
      <Table courses={courses} cgpa={cgpa} />
    </div>
  );
};

export default App;
