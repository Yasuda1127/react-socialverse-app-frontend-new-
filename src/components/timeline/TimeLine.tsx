import React, { useContext, useEffect, useState } from "react";
import "./TimeLine.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios, { AxiosResponse } from "axios";
import { AuthContext } from "../../state/AuthContext";
// import { Posts } from "../../dummyData";

type PostData = {
  _id: number;
  desc: string;
  img: string;
  date: string;
  userId: number;
  likes: number[];
  comment: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type UserType = {
  username?: string;
};

export default function TimeLine({ username }: UserType) {
  const [posts, setPosts] = useState<PostData[]>([]);

  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const response: AxiosResponse<PostData[]> = username
        ? await axios.get(`/posts/profile/${username}`) // 自分の投稿だけが見れるようにする(usernameがあった場合)、プロフィールの場合
        : await axios.get(`/posts/timeline/${user?._id}`); // ホームの場合
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username,user?._id]); // 一度だけタイムラインを読み込むための、useEffect。第二引数を空にすると、中に書いたものが一度だけ読み込まれる。

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map(
          (
            post // postsは自分の投稿と自分がフォローしているユーザーの投稿内容全てを含んだもの。
          ) => (
            <Post post={post} key={post._id} />
          )
        )}
      </div>
    </div>
  );
}
