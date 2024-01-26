const DesignSystem = () => {
  return (
    <div className="page">
      <img src="/img/ds-bg.png" alt="Design System" className="page-img" />

      <div className="page-title-container">
        <h1 className="page-title">Design System</h1>
        <h2 className="page-category">
          Information Architecture
          <br />
          UX Research
          <br />
          UI Redesign
        </h2>
        <p className="page-desc">
          This design system is for all client-facing websites and products. The
          team established a brand new design system, including design
          principles, component library, usage rules, and governance strategy,
          to serve as a design basis for all current and future products and
          deliver a cohesive visual and interactive experience for the users.
        </p>
        <p className="page-desc-link">
          <a href="https://www.esunbank.com.tw/bank/personal">
            Visit E.Sun Bank's new homepage designed based on the design system
            &gt;
          </a>
        </p>
      </div>

      <div className="content-container">
        <div className="content-header">Project Goals</div>
        <div className="content-body">
          <p>
            <ul>
              <li>
                Improve the consistency of customer experience when using
                different products
              </li>
              <li>
                Deepen customers' impression of the overall brand and digital
                services
              </li>
              <li>
                Improve teamwork &amp; development efficiency: Designers and
                developers have a common set of standards
              </li>
              <li>
                Establish commonality: Ensuring that outsourcing operations and
                overseas expansion maintain brand consistency
              </li>
            </ul>
          </p>
        </div>
        <div className="content-header">Framework</div>
        <div className="content-body">
          <img
            src="/img/ds-framework.png"
            alt="Design System Framework"
            className="content-img"
          />
        </div>

        <div className="content-header">Design Principles</div>
        <div className="content-body">
          <p style={{ marginBottom: "10px" }}>
            The design principles define the core values of the Design System
            and create directions for the Design System to follow. The team
            selected keywords that communicate the bank's mission statement and
            vision and reimagined and redefined them into the design principles.
          </p>
          <p style={{ marginBottom: "20px" }}>
            <ol>
              <li>Humanity -- people-oriented, think one step ahead</li>
              <li>Trust -- Integrity, Transparency and Immediateness</li>
              <li>Simplicity -- clean and elegant, fast and smooth</li>
            </ol>
          </p>
          <figure style={{ margin: 0 }}>
            <img
              src="/img/ds-principle.png"
              alt="Design System Framework"
              className="content-img"
            ></img>
            <figcaption>Brainstorming the Design Principles</figcaption>
          </figure>
        </div>
      </div>

      <div className="content-whole">
        <img src="/img/ds.png" alt="Design System"></img>
      </div>

      <div className="content-container">
        <div className="content-header">Application of Design System</div>
        <div className="content-body">
          <p>
            The team applied the design system to the bank's new homepage and
            banking app. The following are the redesigned pages.
          </p>
        </div>
        <div className="content-header">Homepage</div>
        <div className="content-body">
          <img
            src="img/ds-weborg.png"
            alt="Webpage Original Design"
            className="content-img content-img-half"
          ></img>
          <img
            src="img/ds-webnew.png"
            alt="Webpage New Design"
            className="content-img content-img-half"
          ></img>
        </div>
        <div className="content-header">Banking App</div>
        <div className="content-body">
          <img
            src="img/ds-apporg.png"
            alt="App Original Design"
            className="content-img content-img-half"
          ></img>
          <img
            src="img/ds-appnew.png"
            alt="App New Design"
            className="content-img content-img-half"
          ></img>
        </div>
      </div>

      <div className="content-container">
        <div className="content-header">
          Comparison of Original and Redesigned Components
        </div>
        <div className="content-body">
          <p>
            The team categorized all styles from E.Sun's current websites,
            banking apps, and web banking pages to assess what elements to keep,
            modify inconsistency, and define lacking components.
          </p>
        </div>
        <div className="content-header">Colors</div>
        <div className="content-body">
          <p style={{ marginBottom: "20px" }}>
            Multiple colors are used for the same component, resulting in no
            unified logic for the usage of colors
          </p>
          {/* <figure style={{ margin: 0 }}>
            <figcaption style={{ marginBottom: "5px" }}>
            Original Colors
            </figcaption> */}
          <img
            src="img/ds-colororg.png"
            alt="Desgin System Original Colors"
            className="content-img content-img-half"
          ></img>
          {/* </figure>
          <figure style={{ margin: 0 }}>
            <figcaption style={{ marginBottom: "5px" }}>
              Redefined Colors
            </figcaption> */}
          <img
            src="img/ds-colornew.png"
            alt="Desgin System New Colors"
            className="content-img content-img-half"
          ></img>
          {/* </figure> */}
        </div>

        <div className="content-header">Icons</div>
        <div className="content-body">
          <p style={{ marginBottom: "20px" }}>
            Various styles of icons appear on a single platform, and different
            icons for the same ideas
          </p>
          {/* <figure style={{ margin: 0 }}> */}
          {/* <figcaption style={{ marginBottom: "5px" }}>
              Original Icons
            </figcaption> */}
          <img
            src="img/ds-iconorg.png"
            alt="Desgin System Original Icons"
            className="content-img content-img-half"
          ></img>
          {/* </figure> */}
          {/* <figure style={{ margin: 0 }}> */}
          {/* <figcaption style={{ marginBottom: "5px" }}>
              Redefined Icons
            </figcaption> */}
          <img
            src="img/ds-iconnew.png"
            alt="Desgin System New Icons"
            className="content-img content-img-half"
          ></img>
          {/* </figure> */}
        </div>
        <div className="content-header">Buttons</div>
        <div className="content-body">
          <p style={{ marginBottom: "20px" }}>
            A wide variety of styles and colors for buttons
          </p>
          {/* <figure style={{ margin: 0 }}> */}
          {/* <figcaption style={{ marginBottom: "5px" }}>
              Original Icons
            </figcaption> */}
          <img
            src="img/ds-buttonorg.png"
            alt="Desgin System Original Buttons"
            className="content-img content-img-half"
          ></img>
          {/* </figure> */}
          {/* <figure style={{ margin: 0 }}> */}
          {/* <figcaption style={{ marginBottom: "5px" }}>
              Redefined Icons
            </figcaption> */}
          <img
            src="img/ds-buttonnew.png"
            alt="Desgin System New Buttons"
            className="content-img content-img-half"
          ></img>
          {/* </figure> */}
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
