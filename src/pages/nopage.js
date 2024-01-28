import { Link } from "react-router-dom";
const NoPage = () => {
  return (
    <div className="page">
      <div className="page-title-container">
        <h1 className="page-title">Oops</h1>
        {/* <h2 className="page-subtitle"></h2> */}
        <h2 className="page-category">
          This page doesn't exist. Let's go back to <Link to="/">home</Link>.
        </h2>
        <p className="page-desc">
          {/* This page doesn't exist. Let's go back to <a href="/">home</a>. */}
        </p>
      </div>
    </div>
  );
};

export default NoPage;
