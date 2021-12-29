import React, { createContext, useContext, useEffect, useState } from "react";
import { url } from "./UrlSettings";

const mentorContext = createContext(null);
function DisplayMentees() {

  const { mentorData } = useContext(mentorContext);
  let mentorEmail = mentorData.email;
  const [mentees, setMentees] = useState([]);

  function getMentees() {
    fetch(
      `${url}/mentees/${mentorEmail}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => setMentees(data));
  }
  
  useEffect(() => {
    getMentees();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="heading">Mentees</div>
      {mentees[0] !== undefined && mentees[0].assigned !== undefined
        ? mentees[0].assigned.map((mentee) => (
            <div className="card">
              <img src={mentee.pic} alt="" />
              <div className="name">{mentee.name}</div>
              <div className="mobileNo">{mentee.mobileNo}</div>
              <div className="email">{mentee.email}</div>
            </div>
          ))
        : ""}
    </div>
  );
}

export default DisplayMentees;
