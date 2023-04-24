import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

// type ProfileType = {
//   profile?: boolean;
// };

type UserData = {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  coverPicture: string;
  followers: string[];
  followings: string[];
  isAdmin: boolean;
  desc?: string;
  city: string;
};

type RightbarProps = {
  user?: UserData;
};

export default function Rightbar({ user }:RightbarProps) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
        </div>
        <img src="assets/event.jpeg" alt="" className="eventImg" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          src="assets/promotion/promotion1.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">ショッピング</p>
        <img
          src="assets/promotion/promotion2.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">カーショップ</p>
        <img
          src="assets/promotion/promotion3.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">YCode株式会社</p>
      </>
    );
  };

  const ProfileRightbar = () => {
    return <>
    <h4 className="rightbarTitle">ユーザー情報</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarIngoKey">出身：</span>
        <span className="rightbarIngoKey">三重</span>
      </div>
      <h4 className="rightbarTitle">あなたの友達</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Yasuda</span>
        </div>
        <div className="rightbarFollowing">
          <img src={PUBLIC_FOLDER + "/person/2.jpeg"} alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">fujiwara</span>
        </div>
        <div className="rightbarFollowing">
          <img src={PUBLIC_FOLDER + "/person/3.jpeg"} alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Masukawa</span>
        </div>
        <div className="rightbarFollowing">
          <img src={PUBLIC_FOLDER + "/person/4.jpeg"} alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Masu</span>
        </div>
        <div className="rightbarFollowing">
          <img src={PUBLIC_FOLDER + "/person/5.jpeg"} alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Naoi</span>
        </div>
      </div>
    </div>
    </>;
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
