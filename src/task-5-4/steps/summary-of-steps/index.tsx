import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

// types
import { IProps } from "../../types";

export const SummaryOfSteps: React.FC<IProps> = ({ formValues }) => {
  const navigate = useNavigate();
  const [showData, setShowData] = useState(false);

  // react-hook-form variant form
  const { handleSubmit } = useForm<{}>();

  const onSubmit: SubmitHandler<{}> = () => {
    setShowData(true);
  };

  return (
    <>
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formWrapper">Show</div>
          <div className="formWrapper">
            <span className="button">
              <Button
                variant="outlined"
                onClick={() => navigate(-1)}
                color="info"
                startIcon={<NavigateBeforeIcon />}
                // type="reset"
                name="previous step"
              >
                Previous step
              </Button>
            </span>
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
          </div>
        </form>
      </>
      <br />
      {showData && (
        <div>
          <div>
            <div>User Name: {formValues?.firstName}</div>
            <div>User SecondName: {formValues?.secondName}</div>
            <div>User E-mail: {formValues?.email}</div>
            <div>User Password: {formValues?.password}</div>
          </div>
          <div>
            <div>User Name1: {formValues?.firstName1}</div>
            <div>User SecondName1: {formValues?.secondName1}</div>
            <div>User E-mail1: {formValues?.email1}</div>
            <div>User Password1: {formValues?.password1}</div>
          </div>
          <div>
            <div>User Name2: {formValues?.firstName2}</div>
            <div>User SecondName2: {formValues?.secondName2}</div>
            <div>User E-mail2: {formValues?.email2}</div>
            <div>User Password2: {formValues?.password2}</div>
          </div>
        </div>
      )}
    </>
  );
};
