import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";

const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);

  const fetchListOfUSer = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUSer(res.data))
      .catch();
  };

  useEffect(() => {
    fetchListOfUSer();
  }, []);

  return (
    <div className="flexy" style={{display:"flex", flexDirection:"wrap", flexWrap:"wrap"}}>
      {listOfUSer.map((el, i) => (
        <ProfileCard user={el} key={i} />
      ))}
    </div>
  );
};

export default UserList;