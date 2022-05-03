import React from "react";
import { useParams } from "react-router-dom";

function PostView(props) {

  const { no } = useParams();


  return (
    <div className="container">
      <h2
      style={{
        textAlign:"center"
      }}>{no}page</h2>
    </div>
  );
}

export default PostView;