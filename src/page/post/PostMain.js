import React from "react";
import PostList from "./PostList";

function PostMain(props) {
  return (
    <>
      <h1 style={{ margin: "50px auto 50px auto", textAlign: "center" }}>
        notice board
      </h1>
      <PostList />;
    </>
  );
}

export default PostMain;
