import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState<string | any>({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        `https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`
      )
        .then((res) => res.json())
        .then((data) => localStorage.setItem("token", data?.token));
      navigate(`/profile`);
    } catch (e) {
      alert(`Access denied`);
    }
  };
  const handleChangeInput = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChangeInput}
            type="email"
            placeholder="Enter email"
            value={fields.email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={handleChangeInput}
            type="password"
            placeholder="Password"
            value={fields.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
