import React, { useState } from "react";

import { $api } from "../http";
import axios from "axios";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import * as yup from "yup";

interface IUsers {
  id: string;
  publicDate: string;
  name: string;
  avatar: string;
  carNames: string;
  age: number;
}

interface Inputs {
  name: string;
  age: number;
}

export const Users: React.FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState<IUsers[]>([]);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await $api.get("/users");
      if (data) {
        setUsers(data);
        setLoading(false);
      }
    } catch (e) {
      setError("Error");
      setLoading(false);
    }
  };

  // POST
  const FormSchema = yup.object({
    name: yup.string(),
    age: yup.number(),
  });

  // react-hook-form variant form
  const { handleSubmit, control } = useForm<Inputs>({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await $api.post("/users", data);
    } catch (e) {
      console.log(e);
    }
  };

  const sendFile = async () => {
    const fileElem = document.querySelector("#file") as HTMLInputElement | null;

    const fileItem = fileElem?.files;
    const formData = new FormData();

    if (fileItem) {
      formData.append("file", fileItem[0]);
    }
    await axios.post("http://localhost:9999", formData, {
      headers: { "Content-type": "multipart/form-data" },
    });
  };

  return (
    <>
      <div>{loading && "Loading....."}</div>
      <div>{error}</div>
      <div>
        <input id="file" type="file" />
        <input type="button" onClick={sendFile} value="send file" />
      </div>
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formWrapper">
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="name"
                    placeholder="name"
                    {...field}
                  />
                )}
                control={control}
                name="name"
                defaultValue=""
              />
            </div>
            <div className="formItem">
              <Controller
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="age"
                    placeholder="age"
                    {...field}
                  />
                )}
                control={control}
                name="age"
                defaultValue={0}
              />
            </div>
          </div>
          <div className="formWrapper">
            <span className="button">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<NavigateNextIcon />}
                name="second step"
              >
                Send
              </Button>
            </span>
          </div>
        </form>
      </>
      <div>
        <button onClick={getData}>get list of users</button>
        {users.map(
          ({ id, publicDate, name, avatar, carNames, age }: IUsers) => (
            <div key={id}>
              <div>Date: {publicDate}</div>
              <div>Name: {name}</div>
              <div>
                <img src={avatar || ""} alt={name} data-testid="avatar" />
              </div>
              <div>Car: {carNames}</div>
              <div>Age: {age}</div>
            </div>
          )
        )}
      </div>
    </>
  );
};
