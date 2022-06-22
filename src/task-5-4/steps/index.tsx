import { Routes, Route, useNavigate } from "react-router-dom";

import { NotFound } from "../components/not-found";

// steps
import { WelcomeStep } from "./welcome-step";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { SummaryOfSteps } from "./summary-of-steps";
import { useState } from "react";

interface IFormsValue {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  firstName1: string;
  secondName1: string;
  email1: string;
  password1: string;
  firstName2: string;
  secondName2: string;
  email2: string;
  password2: string;
}

export const MultiStepForm = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<IFormsValue>({
    email: "",
    email1: "",
    email2: "",
    firstName: "",
    firstName1: "",
    firstName2: "",
    password: "",
    password1: "",
    password2: "",
    secondName: "",
    secondName1: "",
    secondName2: "",
  });

  const nextStep = (name: string) => {
    navigate(name);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeStep />} />
        <Route
          path="/one"
          element={
            <StepOne nextStep={nextStep} setFormValues={setFormValues} />
          }
        />
        <Route
          path="/two"
          element={
            <StepTwo nextStep={nextStep} setFormValues={setFormValues} />
          }
        />
        <Route
          path="/three"
          element={
            <StepThree nextStep={nextStep} setFormValues={setFormValues} />
          }
        />
        <Route
          path="/summary"
          element={
            <SummaryOfSteps
              formValues={formValues}
              setFormValues={setFormValues}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
