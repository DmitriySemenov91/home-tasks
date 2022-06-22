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

export interface IProps {
  nextStep?: (string) => void;
  setFormValues?: (object) => void;
  formValues?: IFormsValue;
}
