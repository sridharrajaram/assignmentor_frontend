import React, { useState } from "react";

function AddMentees({ nonMentee, newMentees, setnewMentees }) {
  const [select, setSelect] = useState(false);

  
  return (
    <div className="card">
      <img src={nonMentee.pic} alt="" />
      <div className="name">{nonMentee.name}</div>
      <div className="mobileNo">{nonMentee.mobileNo}</div>
      <div className="email">{nonMentee.email}</div>
      <button
        className="submit-button"
        onClick={() => {
          setSelect(!select);
          !select
            ? setnewMentees([...newMentees, nonMentee])
            : setnewMentees(
                newMentees.filter((student) => student !== nonMentee)
              );
        }}
      >
        {select ? "Remove student" : "Add student"}
      </button>
    </div>
  );
}

export default AddMentees;
