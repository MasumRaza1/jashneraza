import React, { useState } from "react";
import "../Styles/MemberList.css"; 
import alam from "../Assets/members_img/alam.png";
import amin from "../Assets/members_img/amin.png";
import bablu from "../Assets/members_img/bablu-removebg-preview.png";
import islamuddin from "../Assets/members_img/islamuddin-removebg-preview.png";
import kalim from "../Assets/members_img/kalim-removebg-preview.png";
import sabir from "../Assets/members_img/sabir-removebg-preview.png";
import tauhid from "../Assets/members_img/tauhid_Khalifa-removebg-preview.png";
import najmuddin from "../Assets/members_img/najmuddin.png";

const members = [
  { img: alam, name: "Md. Alam Ansari", designation: "Member", id: "126"},
    { img: najmuddin, name: "Najmuddin Noori", designation: "Member", id: "123"},
    { img: bablu, name: "Manjur Alam", designation: "Member", id: "124"},
    { img: islamuddin, name: "Islamuddin Ansari", designation: "Member", id: "125"},
    { img: amin, name: "Amin Ansari", designation: "Member", id: "127"},
    { img: sabir, name: "Sabir Ansari", designation: "Member", id: "011"},
    { img: tauhid, name: "Tauhid Khalifa", designation: "Member", id: "129"},
    { img: kalim, name: "Kalimuddin Ansari", designation: "Member", id: "130"},
];

const MemberCard = ({ name, designation, img, id }) => {
  return (
    <div className="member-card">
      <div className="member-info">
        <span className="member-name">{name}</span>
        <span className="member-designation">{designation}</span>
        <span className="member-id">Member ID: 232/{id}</span>
      </div>
      <div className="profile-container">
        {img ? (
          <img src={img} alt={name} />
        ) : (
          <span className="profile-placeholder">No Image</span>
        )}
      </div>
    </div>
  );
};

const MemberList = () => {
  const [search, setSearch] = useState("");

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.designation.toLowerCase().includes(search.toLowerCase()) ||
      member.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="member-list">
      <input
        type="text"
        placeholder="Search by name, ID, or designation"
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid-container">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))
        ) : (
          <div className="no-results">No members found</div>
        )}
      </div>
    </div>
  );
};

export default MemberList;
