import React from "react";
import { Routes, Route } from "react-router-dom";

import CreateMentor from "./CreateMentor.js";
import CreateStudent from "./CreateStudent.js";
import SelectStudent from "./SelectStudent.js";
import AddMentor from "./AddMentor.js";
import SelectMentor from "./SelectMentor.js";
import Mentees from "./Mentees.js";
import SelectStudents from "./SelectStudents.js";
import DisplayMentees from "./DisplayMentees.js";
import Home from "./Home.js";

function RoutesBar({mentorData,setMentorData,studentData,setStudentData}) {

  return (
    <Routes>
      <Route exact path="/Create_Mentor" element={<CreateMentor />} />

      <Route exact path="/Create_Student" element={<CreateStudent />} />

      <Route
        exact
        path="/Assign_Mentor"
        element={
          <SelectStudent
            mentorData={mentorData}
            setMentorData={setMentorData}
            studentData={studentData}
            setStudentData={setStudentData}
          />
        }
      />

      <Route
        exact
        path="/addMentor"
        element={
          <AddMentor
            mentorData={mentorData}
            setMentorData={setMentorData}
            studentData={studentData}
            setStudentData={setStudentData}
          />
        }
      />

      <Route
        exact
        path="/Assign_Students"
        element={
          <SelectMentor
            mentorData={mentorData}
            setMentorData={setMentorData}
            studentData={studentData}
            setStudentData={setStudentData}
          />
        }
      />

      <Route
        exact
        path="/Mentees"
        element={
          <Mentees
            mentorData={mentorData}
            setMentorData={setMentorData}
            studentData={studentData}
            setStudentData={setStudentData}
          />
        }
      />

      <Route
        exact
        path="/selectStudents"
        element={
          <SelectStudents
            mentorData={mentorData}
            setMentorData={setMentorData}
            studentData={studentData}
            setStudentData={setStudentData}
          />
        }
      />

      <Route
        exact
        path="/displayMentees"
        element={
          <DisplayMentees
            mentorData={mentorData}
            setMentorData={setMentorData}
            studentData={studentData}
            setStudentData={setStudentData}
          />
        }
      />

      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutesBar;
