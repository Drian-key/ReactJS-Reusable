import React from "react";
import { useParams } from "react-router-dom";

function Profile(props) {
  const params = useParams();
  return (
    <div>
      <h1>
        This is {params.username} profile
        {params.umur ? ` umur ${params.umur} tahun` : ""}
      </h1>
    </div>
  );
}

export default Profile;
