import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const WelcomeStep: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome</h1>
      <Button onClick={() => navigate("/one")}>First Step</Button>
    </div>
  );
};
