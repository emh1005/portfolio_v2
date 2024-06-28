import { useRef, useState, useEffect } from "react";

import Project from "../components/project";

import { ParallaxProvider } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

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
  // const topRef = useRef();
  // const bottomRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorClass, setCursorClass] = useState("");
  const [cursorText, setCursorText] = useState("");
  const numPages = 5; // update the number of projects!!!

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

  const scrollContent = (direction) => {
    ref.current.scrollBy({
      top: direction * ref.current.offsetHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const pageIndex =
        Math.round(ref.current.scrollTop / ref.current.offsetHeight) + 1;
      // Math.round(ref.current.scrollLeft / ref.current.offsetWidth) + 1;
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

  // useEffect(() => {
  //   const propagateScroll = (e) => {
  //     e.preventDefault();
  //     ref.current.scrollTop += e.deltaY;
  //   };

  //   topRef.current.addEventListener('wheel', propagateScroll);
  //   bottomRef.current.addEventListener('wheel', propagateScroll);

  //   return () => {
  //     topRef.current.removeEventListener('wheel', propagateScroll);
  //     bottomRef.current.removeEventListener('wheel', propagateScroll);
  //   };
  // }, []);

  return (
    <div className="index-container">
      {/* <div className="button-container">
        <button
          onClick={scrollUp}
          disabled={currentPage === 1}
          onMouseEnter={() => handleMouseEnter("↑")}
          onMouseLeave={handleMouseLeave}
          className="button-half-page"
        ></button> */}
      {/* <div className="button-column"></div> */}
      {/* <button
          onClick={scrollDown}
          disabled={currentPage === numPages}
          onMouseEnter={() => handleMouseEnter("↓")}
          onMouseLeave={handleMouseLeave}
          className="button-half-page"
        ></button>
      </div> */}
      <button
        className="top"
        onClick={scrollUp}
        disabled={currentPage === 1 || isMobile()}
        onMouseEnter={() => handleMouseEnter("↑")}
        onMouseLeave={handleMouseLeave}
        // ref={topRef}
      ></button>

      <div
        className={`cursor ${cursorClass}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {cursorText}
      </div>

      <div className="project-wrapper" ref={ref}>
      <Link
          to="/deckflow"
          onMouseEnter={() => handleMouseEnter("view")}
          onMouseLeave={handleMouseLeave}
          className="proj-button"
        >
          <Project
            title="DeckFlow"
            subtitle="Generative AI||Web App develop||UI/UX Design"
            img="df"
            pageIndex={1}
            currentPage={currentPage}
            numPages={numPages}
          />
        </Link>
        <Link
          to="/movie"
          onMouseEnter={() => handleMouseEnter("view")}
          onMouseLeave={handleMouseLeave}
          className="proj-button"
        >
          <Project
            title="Movie"
            subtitle="Movie App||App development||UI/UX Design"
            img="movie"
            pageIndex={2}
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
            subtitle="UX Research||UI Redesign"
            img="ds"
            pageIndex={3}
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
            subtitle="Info Architecture||UX Research||UI Redesign"
            img="hr"
            pageIndex={4}
            currentPage={currentPage}
            numPages={numPages}
          />
        </Link>
        <Link
          to="/einvoice"
          onMouseEnter={() => handleMouseEnter("view")}
          onMouseLeave={handleMouseLeave}
          className="proj-button"
        >
          <Project
            title="Electronic Invoice"
            subtitle="Webpage Redeisgn||Web Development||Interaction Design"
            img="einvoice"
            pageIndex={5}
            currentPage={currentPage}
            numPages={numPages}
          />
        </Link>
      </div>

      <button
        className="bottom"
        onClick={scrollDown}
        disabled={currentPage === numPages || isMobile()}
        onMouseEnter={() => handleMouseEnter("↓")}
        onMouseLeave={handleMouseLeave}
        // ref={bottomRef}
      ></button>
    </div>
  );
};

export default Home;
