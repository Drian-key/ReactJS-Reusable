import React from "react";
import { useParams } from "react-router-dom";

function Profile(props) {
  const params = useParams();
  return (
    <div>
      <h1>This is {params.username} profile</h1>
    </div>
  );
}

export default Profile;
