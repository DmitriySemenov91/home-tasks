import React, { useState } from "react";

import "./assets/style.css";
import defaultImg from "./assets/img/avatar.png";
import axios from "axios";

interface IAccount {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  location: string;
  blog: string;
}

interface IError {
  message: string;
}
export const GitHubAccount: React.FC<{}> = () => {
  const [nickName, setNickName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>({ message: "" });

  const [account, setAccount] = useState<IAccount>({
    avatar_url: "",
    bio: "",
    blog: "",
    followers: 0,
    id: 0,
    location: "",
    login: "",
    name: "",
    public_repos: 0,
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${nickName}`
      );
      setAccount(data);
      setLoading(false);
      setNickName("");
      setError({ message: "" });
    } catch (e: any) {
      setError({ message: `${e.response.statusText} ${e.response.status}` });
      setLoading(false);
      setNickName("");
    }
  };

  return (
    <>
      <div id="app">
        <div className="app-container">
          <form className="app-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={nickName}
              className="app-input"
              placeholder="Укажите GitHub-аккаунт"
              onChange={(e) => setNickName(e.target.value)}
            />
            <button
              className="app-form_btn"
              onClick={handleSubmit}
              disabled={!nickName.length || loading}
            >
              {loading ? " Загрузка..." : "Найти"}
            </button>
          </form>
          {error && <span>{error.message}</span>}
          {account.id > 0 && !error.message.length && (
            <div className="app-user" key={account.id}>
              <div className="app-user_info">
                <div className="app-user_image">
                  <img
                    src={account.avatar_url || defaultImg}
                    alt={account.name}
                    className="account-img"
                  />
                </div>
                <div className="app-user_data">
                  <h1 className="app-user_name">
                    {account.name || "---"}
                    <span>{account.login || "---"}</span>
                  </h1>
                  <p className="app-user_about">{account.bio || "---"}</p>
                </div>
              </div>
              <ul className="app-user_stats">
                <li className="app-user_stats-item">
                  Репозитории
                  <span>{account.public_repos || "---"}</span>
                </li>
                <li className="app-user_stats-item">
                  Подписчиков
                  <span>{account.followers || "---"}</span>
                </li>
                <li className="app-user_stats-item">
                  Звезд
                  <span>1.2к</span>
                </li>
              </ul>
              <ul className="app-user_location">
                <li className="app-user_location-item">
                  {account.location || "---"}
                </li>
                <li className="app-user_location-item">
                  <a href={account.blog || "---"}>{account.blog || "---"}</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
