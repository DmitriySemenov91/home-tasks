import { Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="header">
      <h2>React Blog</h2>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link href="/">Main</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
