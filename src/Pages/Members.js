import React from "react";
import Volunteer from "../Components/Volunteer";
import MemberList from "../Components/MemberList";

function Members() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Volunteer />
      <MemberList />
      <div 
  style={{
    fontFamily: "'Poppins', sans-serif",
    fontSize: "12px",
    paddingTop: "30px",
    paddingBottom: "20px",
    color: "#222",
    textAlign: "center"

  }}
>
  <p>© 2021-{currentYear} FR Society. All rights reserved.</p>
</div>

    </div>
  );
}

export default Members;
