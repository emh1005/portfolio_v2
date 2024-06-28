const Deckflow = () => {
  return (
    <div className="page">
      <img src="/img/df-bg.png" alt="DeckFlow" className="page-img" />

      <div className="page-title-container">
        <h1 className="page-title">DeckFlow</h1>
        <h2 className="page-subtitle">2023-2024</h2>
        <h2 className="page-category">
          Generative AI
          <br />
          Web App Development
          <br />
          UI/UX Design
        </h2>

        <p className="page-desc">
          DeckFlow is an infinite canvas that allows user to create images with
          generative AI through multimodal input specification. Users can test
          image generation ideas, and iteratively improve their image creation
          workflow. The system is designed to be user-friendly and intuitive,
          and to provide a seamless experience for users to create images.
          <br />
          <br />
          In collaboration with Gregory Croisdale, John Joon Young Chung, Anhong
          Guo, and Xu Wang.
        </p>
      </div>

      <div className="content-container">
        <div className="content-header">Design Goals</div>
        <div className="content-body">
          <p>
            <ul>
              <li>Facilitate Exploration and Tinkering</li>
              <li>
                Lower the barrier for prompt engineering and make prompt design
                more systematic
              </li>
              <li>Support multimodal input beyond text</li>
              <li>Reveal intermediate contexts for reuse and transparency</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="content-whole">
        <img src="/img/deckflow.png" alt="DeckFlow"></img>
      </div>

      <div className="content-container">
        <div className="content-header">Interface Overview</div>
        <div className="content-body">
          <p>
            <ol>
              <li>
                The interface is designed following Nielsen's{" "}
                <em>
                  <strong>10 general principles for interaction design</strong>
                </em>
              </li>
              <li>
                UI elements and interactions were designed around a card-game
                aesthetic, to enhance engagement and familiarity within the
                system.
                {/* <em>(Match Between the System and the Real World)</em> */}
              </li>
              <li>
                Infinite canvas with only cards.{" "}
                {/* <em>(Aesthetic and Minimalist Design)</em> */}
              </li>
            </ol>
          </p>
        </div>

        <div className="content-header">Card Types</div>
        <div className="content-body">
          <p style={{ marginBottom: "5px" }}>
            <div className="list-grid">
              <p>
                Data Cards (Text and Image): used as input to inform the
                function cards
              </p>
              <p>
                Function Cards (Goal and Action): allow the user to interact
                with data elements and providing input
              </p>
              <figure style={{ margin: 0 }}>
                <img
                  src="img/df-datacard.png"
                  alt="Data Card"
                  className="content-img"
                ></img>
              </figure>
              <figure style={{ margin: 0 }}>
                <img
                  src="img/df-funccard.png"
                  alt="Function Card"
                  className="content-img"
                ></img>
              </figure>
            </div>
          </p>

          <p style={{ marginTop: "20px", marginBottom: "5px" }}>
          <div className="list-grid">
              <p>
              Goal Card: high-level goal scaffolding; it generates an Action Card
            with text labels to serve as scaffolds, extracted from the provided
            goal text
              </p>
              <p>
              Action Card: modular prompt; it combines the content of all
            connected Cards, creating Text Cards to serve as the prompt for
            Image Cards
              </p>
              <figure style={{ margin: 0 }}>
                <img
                  src="img/df-goal.png"
                  alt="Goal Card"
                  className="content-img"
                ></img>
              </figure>
              <figure style={{ margin: 0 }}>
                <img
                  src="img/df-action.png"
                  alt="Action Card"
                  className="content-img"
                ></img>
              </figure>
            </div>
          </p>
        </div>

        <div className="content-header">Interacting with Cards</div>
        <div className="content-body">
          <p style={{ marginBottom: "5px" }}>
            Cards as interactive atoms, and have an Info Button which shows how
            it was created
          </p>
          <figure style={{ margin: 0, width: 400 }}>
            {/* <figcaption style={{ marginBottom: "5px" }}>
            Cards as interactive atoms, and have an Info Button which shows how it was created
            </figcaption> */}
            <img
              src="img/df-cardinfo.jpg"
              alt="Card Info"
              className="content-img"
            ></img>
          </figure>
          <p style={{ marginTop: "20px", marginBottom: "5px" }}>
            Lifecycle of a generated card: Micro-interactions help communicate
            the system status to the user
          </p>
          <figure style={{ margin: 0, width: 400 }}>
            {/* <figcaption style={{ marginBottom: "5px" }}>
            Lifecycle of a generated card
            </figcaption> */}
            <img
              src="img/df-cardstatus.jpg"
              alt="Card Status"
              className="content-img"
            ></img>
          </figure>
        </div>

        <div className="content-header">Clusters</div>
        <div className="content-body">
          <p style={{ marginBottom: "5px" }}>
            Cluster accepts any number of cards and one optional text label, and
            it generates the shared features of the inputs, steered by the text
            label.
          </p>
          <figure style={{ margin: 0, width: 300 }}>
            <img
              src="img/df-cluster.png"
              alt="Cluster"
              className="content-img"
            ></img>
          </figure>
        </div>
      </div>

      <div className="content-whole">
       <div className="iframe-container">
            <iframe
              src="https://player.vimeo.com/video/970958757?badge=0&amp;autopause=0"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Home"
              className="content-vid"
            ></iframe>
          </div>
      </div>

    </div>
  );
};

export default Deckflow;
