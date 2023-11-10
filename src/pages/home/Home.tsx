import React from "react";
import "./Home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Rightbar from "../../components/rightbar/Rightbar";

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
export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <TimeLine />
        <Rightbar />
      </div>
    </>
  );
}
