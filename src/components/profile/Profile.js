import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";
import { Link } from "react-router-dom";


const Profile = ({ match }) => {
  const [user, setUser] = useState({});
  

  const fetchUser = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/?id=${match.params.id}`)
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    fetchUser();
   
  }, [match]);

  return (
    <section className="container-fluid">
      <div className="row header">
        <div className="col-md-3 my-auto">
          <Link to="/">
            <h3>Previous</h3>
          </Link>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-4 offset-md-4 row-img-profile  ">
          <img
            src="https://github.com/Sirajeddine2020/first_repo/blob/master/profile.jpg?raw=true"
            alt="user "
            width="180px"
            height="180px"
            className="img-profile"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 offset-md-4 ">
          <h3 className="name-label">{user.name}</h3>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 offset-md-4 name-label">
          <h3 className="email-label">{user.email}</h3>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-4 offset-md-4 name-label">
          <span className="phone-label">{user.phone}</span>
        </div>
      </div>
      
    </section>
  );
};

export default Profile;