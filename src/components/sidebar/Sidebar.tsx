import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";
import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebaricon" />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebarListItemText" >ホーム</span>
            </Link>
          </li>

          <li className="sidebarListItem">
            <Search className="sidebaricon" />
            <span className="sidebarListItemText">検索</span>
          </li>

          <li className="sidebarListItem">
            <Notifications className="sidebaricon" />
            <span className="sidebarListItemText">通知</span>
          </li>

          <li className="sidebarListItem">
            <MessageRounded className="sidebaricon" />
            <span className="sidebarListItemText">メッセージ</span>
          </li>

          <li className="sidebarListItem">
            <Bookmark className="sidebaricon" />
            <span className="sidebarListItemText">ブックマーク</span>
          </li>

          <li className="sidebarListItem">
            <Person className="sidebaricon" />
            <Link
              to="/profile/Yasuda"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className="sidebarListItemText">プロフィール</span>
            </Link>
          </li>

          <li className="sidebarListItem">
            <Settings className="sidebaricon" />
            <span className="sidebarListItemText">設定</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <CloseFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
