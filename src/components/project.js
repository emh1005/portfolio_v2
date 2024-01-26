const Project = (props) => {
  const subtitleElements = props.subtitle
    ? props.subtitle.split("||").map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))
    : "";

  return (
    <div className="proj-container">
      <div className="project">
        {props.pageIndex === props.currentPage ? (
          <>
            <h1 className="proj-title">{props.title}</h1>
            <h2 className="proj-subtitle">{subtitleElements}</h2>
            <div className="proj-line"></div>
            <img
              src={`/img/home-${props.img}.png`}
              alt={props.title}
              className="proj-img"
            />
            <img
              src={`/img/home-${props.img}-bg.png`}
              className="proj-img proj-img-sub"
            />
            <div className="proj-line-side"></div>
            <p className="proj-index">
              Work {props.pageIndex} of {props.numPages}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
