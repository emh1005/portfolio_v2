import { useRef, useState, useEffect } from "react";

import Project from "../components/project";

import { ParallaxProvider } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";

const Home = () => {
  // const parallax = useParallax({
  //   rotate: [0, 360],
  // });
  // return (
  //   <div className="container-body">
  //     <div ref={parallax.ref} className="spinner"></div>
  //   </div>
  // );
  const ref = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorClass, setCursorClass] = useState("");
  const [cursorText, setCursorText] = useState("");
  const numPages = 3; // update the number of projects!!!

  const scrollLeft = () => {
    if (currentPage > 1) {
      ref.current.scroll({
        left: ref.current.scrollLeft - ref.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (currentPage < numPages) {
      ref.current.scroll({
        left: ref.current.scrollLeft + ref.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollUp = () => {
    if (currentPage > 1) {
      ref.current.scroll({
        top: ref.current.scrollTop - ref.current.offsetHeight,
        behavior: "smooth",
      });
    }
  };
  
  const scrollDown = () => {
    if (currentPage < numPages) {
      ref.current.scroll({
        top: ref.current.scrollTop + ref.current.offsetHeight,
        behavior: "smooth",
      });
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const pageIndex =
        Math.round(ref.current.scrollLeft / ref.current.offsetWidth) + 1;
      setCurrentPage(pageIndex);
    };

    ref.current.addEventListener("scroll", handleScroll);

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  const handleMouseEnter = (text) => {
    setCursorClass("arrow-cursor");
    setCursorText(text);
  };

  const handleMouseLeave = () => {
    setCursorClass("");
    setCursorText("");
  };

  return (
    //   // <div
    //   //   style={{
    //   //     // display: "flex",
    //   //   //  height: "100vh",
    //   //   //   height: "calc(100vh - 200px)",
    //   //   //  // margin: "100px auto",
    //   //   //   padding: "100px 0",
    //   //   }}
    //   // >
    //   <div
    //     style={{
    //       height: "9000px",
    //     }}>
    //   {/* // <ParallaxProvider> */}
    //     <Project />
    //     {/* <Project /> */}
    //   {/* // </ParallaxProvider> */}

    //   </div>
    <div>
      <div className="button-container">
        <button
          onClick={scrollLeft}
          disabled={currentPage === 1}
          onMouseEnter={() => handleMouseEnter("←")}
          onMouseLeave={handleMouseLeave}
          className="button-half-page"
        ></button>
        {/* <div className="button-column"></div> */}
        <button
          onClick={scrollRight}
          disabled={currentPage === numPages}
          onMouseEnter={() => handleMouseEnter("→")}
          onMouseLeave={handleMouseLeave}
          className="button-half-page"
        ></button>
      </div>

      {/* <p>{currentPage} of {numPages}</p> */}
      <div
        className={`cursor ${cursorClass}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {cursorText}
      </div>
      <div className="project-wrapper" ref={ref}>
        <Link
          to="/movie"
          onMouseEnter={() => handleMouseEnter("view")}
          onMouseLeave={handleMouseLeave}
          className="proj-button"
        >
          <Project
            title="Movie"
            subtitle="A Movie Recommendation App||App development||UI/UX Design"
            img="movie"
            pageIndex={1}
            currentPage={currentPage}
            numPages={numPages}
          />
        </Link>
        <Link
          to="/designsystem"
          onMouseEnter={() => handleMouseEnter("view")}
          onMouseLeave={handleMouseLeave}
          className="proj-button"
        >
          <Project
            title="Design System"
            subtitle="Information Architecture||UX Research||UI Redesign"
            img="ds"
            pageIndex={2}
            currentPage={currentPage}
            numPages={numPages}
          />
        </Link>
        <Link
          to="/hrportal"
          onMouseEnter={() => handleMouseEnter("view")}
          onMouseLeave={handleMouseLeave}
          className="proj-button"
        >
          <Project
            title="HR Portal"
            subtitle="Information Architecture||UX Research||UI Redesign"
            img="hr"
            pageIndex={3}
            currentPage={currentPage}
            numPages={numPages}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
