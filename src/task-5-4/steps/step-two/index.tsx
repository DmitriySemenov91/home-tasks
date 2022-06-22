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
  firstName1: string;
  secondName1: string;
  email1: string;
  password1: string;
}

export const StepTwo: React.FC<IProps> = ({ nextStep, setFormValues }) => {
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
      nextStep("/three");
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
                name="firstName1"
                control={control}
                defaultValue=""
                // rules={{ required: true, maxLength: 10 }}
              />
              <p>{errors.firstName1?.message}</p>
            </div>
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="secondName1"
                    placeholder="secondName1"
                    {...field}
                  />
                )}
                name="secondName1"
                control={control}
                defaultValue=""
                // rules={{ required: true, maxLength: 20 }}
              />
              <p>{errors.secondName1?.message}</p>
            </div>
          </div>
          <div className="formWrapper">
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="email1"
                    placeholder="email1"
                    {...field}
                  />
                )}
                name="email1"
                control={control}
                defaultValue=""
                // rules={{ required: true, pattern: emailFormat }}
              />
              <p>{errors.email1?.message}</p>
            </div>
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="password1"
                    placeholder="password1"
                    {...field}
                  />
                )}
                name="password1"
                control={control}
                defaultValue=""
                // rules={{ required: true, pattern: passwordFormat }}
              />
              {/*{errors.password && <span>This field is required</span>}*/}
              <p>{errors.password1?.message}</p>
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
                name="third step"
              >
                Next Step
              </Button>
            </span>
          </div>
        </form>
      </>
    </>
  );
};
