import React, { useState } from "react";

// MUI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

// form
import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface Inputs {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
}

export const Form: React.FC<{}> = () => {
  const [showDate, setShowDate] = useState<Inputs>({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
  });

  // patterns for email and password fields

  // work example --> ddd@gmail.com
  const emailFormat =
    /^[a-zA-Z0-9_.+]+(?<!^[0-9])@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
  // asdfghQ1
  const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  // react-hook-form variant form
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setShowDate(data);
    reset();
  };

  const isEmpty = !Object.values(showDate).some(x => ( x !== ''));

  return (
    <>
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formWrapper">
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="firstName"
                    placeholder="firstName"
                    {...field}
                  />
                )}
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: true, maxLength: 10 }}
              />
              {errors.firstName && <span>This field is required</span>}
            </div>
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="secondName"
                    placeholder="secondName"
                    {...field}
                  />
                )}
                name="secondName"
                control={control}
                defaultValue=""
                rules={{ required: true, maxLength: 20 }}
              />
              {errors.secondName && <span>This field is required</span>}
            </div>
          </div>
          <div className="formWrapper">
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="email"
                    placeholder="email"
                    {...field}
                  />
                )}
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: true, pattern: emailFormat }}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="password"
                    placeholder="password"
                    {...field}
                  />
                )}
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: true, pattern: passwordFormat }}
              />
              {errors.password && <span>This field is required</span>}
            </div>
          </div>
          <div className="formWrapper">
            <span className="button">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                name="submit"
              >
                Submit
              </Button>
            </span>
            <span className="button">
              <Button
                variant="outlined"
                onClick={() => reset()}
                color="error"
                startIcon={<DeleteIcon />}
                // type="reset"
                name="reset"
              >
                Clean
              </Button>
            </span>
          </div>
        </form>
      </>
      <br />
      {!isEmpty && (
        <div>
          <div>User Name: {showDate.firstName}</div>
          <div>User SecondName: {showDate.secondName}</div>
          <div>User E-mail: {showDate.email}</div>
          <div>User Password: {showDate.password}</div>
        </div>
      )}
    </>
  );
};
