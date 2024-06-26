import { Link, Route, Routes } from "react-router-dom";
import MyNavbar from "../../compounents/navbar/Navbar";
import "./Article.css";

function Article() {
  return (
    <div className="center">
      <MyNavbar />
      <h1>hello Article</h1>
      <hr />
      <div className="btnContainer">
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </div>
      <Routes>
        <Route path="m" element={<h1>2 hiiiiiiiiiiiiiii</h1>} />
        <Route path="z" element={<h1>3 hiiiiiiiiiiiiiii</h1>} />
        <Route path="a" element={<h1>4 hiiiiiiiiiiiiiii</h1>} />
      </Routes>
    </div>
  );
}

export default Article;
