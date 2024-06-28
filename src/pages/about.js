const About = () => {
  return (
    <div className="page about">
      <img
        src="/img/about.jpg"
        alt="Emily"
        className="page-img"
        style={{ height: "100vh" }}
      />
      <div className="page-title-container">
        <h1 className="page-title">Frontend Developer &amp; Interaction Desginer</h1>
        {/* <h2 className="page-subtitle"></h2> */}
        {/* <h2 className="page-category">
          Let's Chat! Email me at <a href="mailto:em@emhuang.com">em@emhuang.com</a>
        </h2> */}

        <p className="page-desc-link">
          Let's Chat! Email me at{" "}
          <a href="mailto:emily@emhuang.com">emily@emhuang.com</a>
        </p>
        <p className="page-desc">
          I'm a full-time bookworm and a part-time designer and developer. I
          graduated with a Bachelor's degree in Interaction Design from
          University of Washington, and I'm currently completing my Master's
          degree in HCI at University of Michigan. I most recently worked at
          E.Sun Bank in Taiwan as a UX researcher and designer. I'm passionate
          about storytelling through different means, be it through video,
          voice, or words. I'm always up for a challenge and learning or trying
          new things. When I'm not designing or reading, I like traveling, oil
          painting and photography.
        </p>
      </div>
    </div>
  );
};

export default About;
