import React from "react";
import {Link} from "react-router-dom"
import "./ProfileCard.css"

const ProfileCard = ({ user }) => {
  return (
    <div className="col-md-4 my-3">
      
      <div className="card" style={{ width: "18rem" }}>
      <div className="avatar-flip">
        <img 
          src="https://github.com/Sirajeddine2020/first_repo/blob/master/profile2.svg?raw=true"
          height="70px"
          width="70px"
         alt="profile pic"
          className="avatar1"
        />
         <img 
          src="https://github.com/Sirajeddine2020/first_repo/blob/master/profile.jpg?raw=true"
          height="70px"
          width="70px"
         alt="profile pic"
          className="avatar2"
        />
        </div>
        <Link to={`/users/${user.id}`}>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
        </div>
        </Link>
      </div>

      
    </div>
  );
};

export default ProfileCard;