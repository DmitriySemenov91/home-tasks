import { Button, Nav } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  }, [pathname]);

  const handleClickAuth = () => {
    if (isLogin && window.confirm("Do you want logout?")) {
      localStorage.removeItem("token");
      navigate(`/`);
      setIsLogin(false);
    } else {
      navigate(`/login`);
    }
  };

  return (
    <div className="header">
      <h2>React Blog</h2>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link to="/" as={Link}>
            Main
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/about" as={Link}>
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Button
            onClick={handleClickAuth}
            variant={isLogin ? "danger" : "primary"}
          >
            {isLogin ? "Login" : "Logout"}
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  );
};
