import React, { useEffect, useState } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import axios from "axios";
// import { Users } from "../../dummyData";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

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

type UserData = {
  _id: number;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  coverPicture: string;
  followers: string[];
  followings: string[];
  isAdmin: boolean;
  desc: string;
  city: string;
};

export default function Post({ post }: PostData) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  // const user = Users.filter((user) => user.id === 1)
  // console.log(user[0].username)
  const [like, setLike] = useState<number>(post.likes.length);
  const [isLiked, setIsLiked] = useState<boolean>(false); // falseはまだ押されていない状態
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`); // 投稿した人
      // console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1); // trueの場合は押されているから-1する falseで押してない場合は+1する
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user?.username}`}>
            <img
              src={
                // PUBLIC_FOLDER +
                // Users.filter((user) => user.id === post.id)[0].profilePicture
                // user.profilePicture
                user?.profilePicture
                  ? user?.profilePicture
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="postProfileImg"
            /></Link>
            <span className="postUsername">
              {
                /* {Users.filter((user) => user.id === post.id)[0].username} */
                //
                user ? user.username : "Unknown User"
              }
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">
              {like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
