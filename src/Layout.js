import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goWrite = () => {
    navigate("./write");
  };

  return (
    <div>
      <main>
        <Outlet />
      </main>
      <footer
        style={{
          height:"200px"
        }}>
        <button
          style={{
            background: "white",
            color: "black",
            width: "100px",
            height: "50px",
            borderRadius: "50px",
            marginTop: "20px",
            display: "block",
            fontSize: "20px",
            position: "relative",
            left: "335px",
          }}
          onClick={goBack}
        >
          back
        </button>
        <button
          style={{
            background: "tomato",
            color: "white",
            border: "none",
            width: "100px",
            height: "50px",
            borderRadius: "50px",
            marginTop: "-50px",
            display: "block",
            fontSize: "20px",
            position: "absolute",
            right: "335px",
          }}
          onClick={goWrite}
        >
          write
        </button>
      </footer>
    </div>
  );
}

export default Layout;
