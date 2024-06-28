const HRPortal = () => {
  return (
    <div className="page">
      <img src="/img/hr-bg.png" alt="HR Portal" className="page-img" />

      <div className="page-title-container">
        <h1 className="page-title">Employee HR Portal</h1>
        <h2 className="page-subtitle">E.Sun Bank // 2021.05</h2>
        <h2 className="page-category">
          Info Architecture
          <br />
          UX Research
          <br />
          UI Redesign
        </h2>

        <p className="page-desc">
          The current employee portal's HR-related services are disorganized and
          cluttered, and users cannot complete tasks, such as requesting leave
          without great effort. The new portal aims to organize various
          functions and systems to create a smooth and uncomplicated user
          experience.
        </p>
      </div>

      <div className="content-container">
        <div className="content-header">Project Goals</div>
        <div className="content-body">
          <p>
            <ul>
              <li>
                Integrate all HR-related functions into a single portal
                interface, and improve the convenience of use and optimize the
                user experience
              </li>
              <li>
                Improve the efficiency of HR staff and reduce the time spent on
                answering questions
              </li>
            </ul>
          </p>
        </div>

        <div className="content-header">Research &amp; Design Process</div>
        <div className="content-body">
          <p>
            <ol>
              <li>
                Data Collection and Analysis: Inventory all related functions
                and systems, and collect and summarize relevant information
              </li>
              <li>
                Information Architecture Organization: Re-plan information
                categories, functions, and menus to create an efficient
                information architecture structure
              </li>
              <li>
                Design Planning: Propose design concepts and sitemaps based on
                the information architecture
              </li>
              <li>Visual and UI Design</li>
            </ol>
          </p>
        </div>
      </div>

      <div className="content-whole">
        <img src="/img/hr-design.png" alt="HR Portal"></img>
      </div>

      <div className="content-container">
        <div className="content-header">Data Collection &amp; Analysis</div>
        <div className="content-body">
          <p style={{ marginBottom: "20px" }}>
            We made an inventory of HR-related systems, which is a total of 125
            functions. Then we labeled each by the most frequently used, the
            most frequently asked about, the frequency of use, and special
            situations. We also collected and summarized relevant information,
            such as the number of users, the number of inquiries, and the number
            of transactions.
          </p>
          <figure style={{ margin: 0 }}>
            <figcaption style={{ marginBottom: "5px" }}>
              Extracted part of the table is as shown:
            </figcaption>
            <img
              src="img/hr-functiontable.png"
              alt="Functions Table"
              className="content-img"
            ></img>
          </figure>
        </div>

        <div className="content-header">
          Information Architecture Organization
        </div>
        <div className="content-body">
          <p style={{ marginBottom: "20px" }}>
            We utilized the card sorting method to understand how users name and
            create categories, explore the classification of information that
            matches user habits, compare the differences between users as a
            basis for the structure, and make the menu closer to the users'
            needs.
          </p>
          <figure style={{ margin: 0 }}>
            <figcaption style={{ marginBottom: "5px" }}>
              Selected card sorting results are as shown below:
            </figcaption>
            <img
              src="img/hr-cardsort.png"
              alt="Card Sorting"
              className="content-img"
            ></img>
          </figure>
        </div>
        <div className="content-header">Design Planning</div>
        <div className="content-body">
          <p style={{ marginBottom: "10px" }}>
            According to the results of card sorting, the functions are divided
            into eight categories, which are:
          </p>
          <p style={{ marginBottom: "10px" }}>
            <ol>
              <li>Attendance Management</li>
              <li>Compensation and Benefits</li>
              <li>Personal Information</li>
              <li>Performance Appraisal</li>
              <li>Application Form</li>
              <li>Retirement and Resignation</li>
              <li>Announcement</li>
              <li>Supervisor Management</li>
            </ol>
          </p>
          <p style={{ marginBottom: "10px" }}>
            The sitemap is drawn to show the information hierarchy, as rendered
            below:
          </p>
          <img
            src="img/hr-sitemap.png"
            alt="Sitemap"
            className="content-img"
          ></img>
        </div>
        <div className="content-header">Visual &amp; UI Design</div>
        <div className="content-body">
          <p style={{ marginBottom: "10px" }}>
            The main design challenge of this project is that the portal can
            only be a static one-page website. This design uses UI cards to
            group the categories in the sitemap, and the functions are directly
            linked and easily accessed with a single click.
          </p>
          <p style={{ marginBottom: "20px" }}>
            The original HR function portals are retained as the three buttons
            on the top of the page, so colleagues can still interact with the
            system according to their old habits; frequently used functions are
            presented as highlighted text so are more easily located.
          </p>
          <img
            src="/img/hr-design.png"
            alt="HR Portal"
            className="content-img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HRPortal;
