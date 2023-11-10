import { Chat, Notifications, Search } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

type PostData = {
  post: {
    _id: number;
    desc?: string;
    img: string;
    date: string;
    userId: number;
    likes: number[];
    comment: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Social Verse</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="探し物は何ですか？"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <Link to={`/profile/${user?.username}`}>
            <img
              src={
                user?.profilePicture
                  ? PUBLIC_FOLDER + user?.profilePicture
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
          </Link>
          <button className="topbarLogOut" onClick={handleLogOut}>
            ログアウト
          </button>
        </div>
      </div>
    </div>
  );
}
