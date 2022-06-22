import React from "react";
import { useNavigate } from "react-router-dom";

// MUI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// form
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "./index.schema";

// types
import { IProps } from "../../types";

interface Inputs {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
}

export const StepOne: React.FC<IProps> = ({ nextStep, setFormValues }) => {
  const navigate = useNavigate();

  // react-hook-form variant form
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<Inputs>({ resolver: yupResolver(FormSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (setFormValues) {
      setFormValues(data);
    }
    reset();
    if (nextStep) {
      nextStep("/two");
    }
  };

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
                // rules={{ required: true, maxLength: 10 }}
              />
              <p>{errors.firstName?.message}</p>
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
                // rules={{ required: true, maxLength: 20 }}
              />
              <p>{errors.secondName?.message}</p>
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
                // rules={{ required: true, pattern: emailFormat }}
              />
              <p>{errors.email?.message}</p>
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
                // rules={{ required: true, pattern: passwordFormat }}
              />
              {/*{errors.password && <span>This field is required</span>}*/}
              <p>{errors.password?.message}</p>
            </div>
          </div>
          <div className="formWrapper">
            <span className="button">
              <Button
                onClick={() => navigate(-1)}
                variant="contained"
                color="info"
                startIcon={<NavigateBeforeIcon />}
                name="previous step"
              >
                Welcome step
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
            <span className="button">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<NavigateNextIcon />}
                name="second step"
              >
                Next step
              </Button>
            </span>
          </div>
        </form>
      </>
    </>
  );
};
