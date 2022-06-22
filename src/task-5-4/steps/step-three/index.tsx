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
  firstName2: string;
  secondName2: string;
  email2: string;
  password2: string;
}

export const StepThree: React.FC<IProps> = ({ nextStep, setFormValues }) => {
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
      setFormValues((prev) => {
        return { ...prev, ...data };
      });
    }
    reset();
    if (nextStep) {
      nextStep("/summary");
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
                    label="firstName2"
                    placeholder="firstName2"
                    {...field}
                  />
                )}
                name="firstName2"
                control={control}
                defaultValue=""
                // rules={{ required: true, maxLength: 10 }}
              />
              <p>{errors.firstName2?.message}</p>
            </div>
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="secondName2"
                    placeholder="secondName2"
                    {...field}
                  />
                )}
                name="secondName2"
                control={control}
                defaultValue=""
                // rules={{ required: true, maxLength: 20 }}
              />
              <p>{errors.secondName2?.message}</p>
            </div>
          </div>
          <div className="formWrapper">
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="email2"
                    placeholder="email2"
                    {...field}
                  />
                )}
                name="email2"
                control={control}
                defaultValue=""
                // rules={{ required: true, pattern: emailFormat }}
              />
              <p>{errors.email2?.message}</p>
            </div>
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="password2"
                    placeholder="password2"
                    {...field}
                  />
                )}
                name="password2"
                control={control}
                defaultValue=""
                // rules={{ required: true, pattern: passwordFormat }}
              />
              {/*{errors.password && <span>This field is required</span>}*/}
              <p>{errors.password2?.message}</p>
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
                Previous step
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
                name="summary"
              >
                Summary
              </Button>
            </span>
          </div>
        </form>
      </>
    </>
  );
};
