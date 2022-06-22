import React, { useState } from "react";

import { $api } from "../http";

interface IUsers {
  id: string;
  publicDate: string;
  name: string;
  avatar: string;
  carNames: string;
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

  return (
    <>
      <div>{loading && "Loading....."}</div>
      <div>{error}</div>
      <div>
        <button onClick={getData}>get list of users</button>
        {users.map(({ id, publicDate, name, avatar, carNames }: IUsers) => (
          <div key={id}>
            <div>Date: {publicDate}</div>
            <div>Name: {name}</div>
            <div>
              <img src={avatar || ""} alt={name} data-testid="avatar" />
            </div>
            <div>Car: {carNames}</div>
          </div>
        ))}
      </div>
    </>
  );
};
