import React from "react";
import { Navigate } from "react-router-dom";

export const Profile = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <h1>My Profile</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
          aliquam amet asperiores aut eius minima, nemo nostrum perspiciatis
          praesentium rerum tempora temporibus vero. Fugiat illo labore maiores
          quam sit?
        </p>
      </div>
    );
  }
};
