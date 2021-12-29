import React from 'react';
import {Routes, Route} from 'react-router-dom';

import CreateMentor from './CreateMentor.js';
import CreateStudent from './CreateStudent.js';
import SelectStudent from './SelectStudent.js';
import AddMentor from './AddMentor.js';
import SelectMentor from './SelectMentor.js';
import Mentees from './Mentees.js';
import SelectStudents from './SelectStudents.js';
import DisplayMentees from './DisplayMentees.js';
import Home from './Home.js';

function RoutesBar() {
    return (
        <>
      <Routes>
        <Route path="/Create Mentor">
          <CreateMentor />
        </Route>
        <Route path="/Create Student">
          <CreateStudent />
        </Route>
        <Route path="/Assign Mentor">
          <SelectStudent />
        </Route>
        <Route path="/addMentor">
          <AddMentor />
        </Route>
        <Route path="/Assign Students">
          <SelectMentor />
        </Route>
        <Route path="/Mentees">
          <Mentees />
        </Route>
        <Route path="/selectStudents">
          <SelectStudents />
        </Route>
        <Route path="/displayMentees">
          <DisplayMentees />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </>
    )
}

export default RoutesBar
