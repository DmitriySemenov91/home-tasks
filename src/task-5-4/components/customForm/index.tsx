import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const CustomForm: React.FC<{}> = () => {
  // custom variant form
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
  });

  const handleClearClick = () => {
    setForm({
      firstName: "",
      secondName: "",
      email: "",
      password: "",
    });
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleClickRegistration = () => {
    if (!form.email.includes("@")) {
      alert("wrong email");
      return;
    }

    if (form.firstName.length < 3) {
      alert("write name");
      return;
    }

    if (form.secondName.length < 3) {
      alert("write name");
      return;
    }

    if (form.password.length < 5) {
      alert("password is too small");
      return;
    }

    handleClearClick();
  };

  // check if required fields aren't empty
  const isValid =
    !!form.firstName && !!form.secondName && !!form.email && !!form.password;

  const makeClean =
    !!form.firstName || !!form.secondName || !!form.email || !!form.password;

  return (
    <>
      <span>Custom Form</span>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name"
          value={form.firstName}
          onChange={handleChangeInput}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Surname"
          value={form.secondName}
          onChange={handleChangeInput}
          variant="outlined"
          fullWidth
        />
        <TextField
          type="email"
          value={form.email}
          onChange={handleChangeInput}
          label="E-mail"
          variant="outlined"
          fullWidth
        />
        <TextField
          type="password"
          value={form.password}
          onChange={handleChangeInput}
          label="Password"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Button
        variant="contained"
        onClick={handleClickRegistration}
        color="primary"
        disabled={!isValid}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        onClick={handleClearClick}
        color="secondary"
        disabled={makeClean}
      >
        Clean
      </Button>
    </>
  );
};
