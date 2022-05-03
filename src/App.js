import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import PostMain from "./page/post/PostMain";
import PostView from "./page/post/PostView";
import Write from "./page/post/Write";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/postView/:no" element={<PostView />} />
        <Route path="/" element={<PostMain />} />
        <Route path="/write" element={<Write />} />
      </Route>
    </Routes>
  );
}

export default App;
