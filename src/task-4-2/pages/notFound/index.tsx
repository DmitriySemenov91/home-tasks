import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="full-post">
      <h1>Page not found</h1>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};
