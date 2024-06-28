const EInvoice = () => {
  return (
    <div className="page">
      <img src="/img/einvoice-bg.png" alt="Electronic Invoice" className="page-img" />

      <div className="page-title-container">
        <h1 className="page-title">Electronic Invoice</h1>
        <h2 className="page-subtitle">Universal EC Inc. // 2020.08</h2>
        <h2 className="page-category">
          Webpage Redeisgn
          <br />
          Frontend Development
          <br />
          Interaction Design
        </h2>

        <p className="page-desc">
          The original webpage of Universal EC Inc.'s Electronic Invoice product
          page is a static one-page. I introduced UX concepts and elements to
          this page and redesigned it into an interactive webpage. With
          reorganized content based on information relevant to target audiences
          and improved navigation, the new design aims to improve the user
          experience and increase the user's understanding of the product.
        </p>
        <p className="page-desc-link">
          <a href="https://www.universalec.com/electronic_invoice/" target="_blank">
            Visit the redesigned Universal EC Inc.'s Electronic Invoice &gt;
          </a>
        </p>
      </div>

      <div className="content-container">
        <div className="content-header">Project Goals</div>
        <div className="content-body">
          <p>
            <ul>
              <li>
                Improve the user experience and increase the user's
                understanding
              </li>
              <li>
                Reorganize the content based on information relevant to target
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="content-whole">
        <img src="/img/einvoice-design.png" alt="Electronic Invoice"></img>
      </div>

      <div className="content-container">
        <div className="content-header">Original Website</div>
        <div className="content-body">
          <p style={{ marginBottom: "20px" }}>
            Some of the main pain points of the original website include the
            lack of distinction of information for different target audiences,
            complicated explanation of the product, and the lack of
            call-to-actions.
          </p>
          <img
            src="img/einvoice-org.png"
            alt="Original Website"
            className="content-img"
          ></img>
        </div>

        <div className="content-header">Redesigned Wireframe</div>
        <div className="content-body">
          <p style={{ marginBottom: "20px" }}>
            The redesign focuses on pointing out the main features and benefits
            of this product and clear distinction of different target audiences
            (B2B, B2C, cooperate), as well as a contact page. The new design
            also includes a call-to-action button for each target audience.
            Before the redesign, I made a wireframe to plan the layout and
            content of the new design.
          </p>
          <img
            src="img/einvoice-wireframe.png"
            alt="Wireframe"
            className="content-img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default EInvoice;
