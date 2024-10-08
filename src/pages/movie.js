const Movie = () => {
  return (
    <div className="page">
      <img src="/img/movie-bg.png" alt="Movie" className="page-img" />

      <div className="page-title-container">
        <h1 className="page-title">Movie Review</h1>
        <h2 className="page-subtitle">2023.10-current</h2>
        <h2 className="page-category">
          App development
          <br />
          React Native
          <br />
          UI/UX Design
        </h2>
        <p className="page-desc">
          This app, developed in React Native and Expo, offers a platform where
          users can rate and review films, as well as curate and share movie
          playlists based on various themes such as genre. Users can also browse
          and follow playlists curated by others, allowing them to rate and
          review a diverse range of films.
          <br />
          <br />
          In collaboration with Leo Yeh.
        </p>
      </div>

      <div className="content-container">
        <div className="content-header">Process</div>
        <div className="content-body">
          <p>
            <ul>
              {/* <li>
                <b>Research</b>: Conducted user research to understand the
                target audience and their needs
              </li> */}
              <li>
                <b>Design</b>: Designed the user interface and user experience
                of the app in Figma, the visual identity is inspired by
                old-fashioned movie ticket stubs, and each movie is represented
                by a ticket stub with custom colors.
              </li>
              <li>
                <b>Development</b>: Developed the app using React Native and
                Expo, with a backend database in Firebase. The movies are
                fetched from the TMDB API with a custom hook alongside a custom
                backend to generate the custom color scheme from the movie
                poster for each movie, and stored in the Firebase database.
                <br />
                The app is currently still in development, with the following
                features already implemented, and more features to come.
              </li>
            </ul>
          </p>
        </div>
        {/* <div className="content-header">Target Audience</div>
        <div className="content-body">
          <p>
            <ul>
              <li>
                For movie enthusiasts who are eager to express their views and
                explore new films that align with their preferences and
                emotional states.
              </li>
            </ul>
          </p>
        </div> */}
      </div>

      <div className="content-whole">
        <img src="/img/movie.png" alt="Movie App"></img>
      </div>

      <div className="content-container">
        <div className="content-header">Recommendations</div>
        <div className="content-body">
          <p style={{ marginBottom: "10px" }}>
            The home page features a interactive ticket stubs with one movie on
            each slide. Users can swipe left or right to add movies to watchlist
            or mark as uninterested. The ticket stubs are also interactive,
            allowing users to tap on them to view more information about the
            movie.
          </p>
          <div className="iframe-container">
            <iframe
              src="https://player.vimeo.com/video/906531315?badge=0&amp;autopause=0"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Home"
              className="content-vid"
            ></iframe>
          </div>
        </div>

        <div className="content-header">Movie Details</div>
        <div className="content-body">
          <p style={{ marginBottom: "10px" }}>
            The movie details page features movie title, release year, genres,
            runtime, and a brief synopsis, as well as director, cast, and
            recommneded movies. Users can also rate and review the movie, add it
            to their watchlist, or select the movie to compare to other movies.
          </p>
          <div className="iframe-container">
            <iframe
              src="https://player.vimeo.com/video/906531271?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Details"
              className="content-vid"
            ></iframe>
          </div>
        </div>

        <div className="content-header">Search</div>
        <div className="content-body">
          <p style={{ marginBottom: "10px" }}>
            Users can search for movies using the search bar. The search results
            page displays movies that match the search query. Users can tap on
            the movie to view more details or add to watchlist on this page.
          </p>
          <div className="iframe-container">
            <iframe
              src="https://player.vimeo.com/video/906531301?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Search"
              className="content-vid"
            ></iframe>
          </div>
        </div>

        <div className="content-header">Watchlist/Favorites</div>
        <div className="content-body">
          <p style={{ marginBottom: "10px" }}>
            Users can view their watchlist on the favorites page. The watchlist
            page displays movies that users have added to their watchlist. Users
            can tap on the movie to view more details or remove from watchlist
            on this page.
          </p>
          <div className="iframe-container">
            <iframe
              src="https://player.vimeo.com/video/906531240?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Watchlist"
              className="content-vid"
            ></iframe>
          </div>
        </div>

        <div className="content-header">Compare Movies</div>
        <div className="content-body">
          <p style={{ marginBottom: "10px" }}>
            Users can compare movies by selecting the compare button on the
            movie details page. The compare page displays the up to three movies
            side by side, allowing users to compare the movies' release date,
            length, ratings, and other details. Users can also tap on the movie
            to view more details or remove from compare on this page.
          </p>
          <div className="iframe-container">
            <iframe
              src="https://player.vimeo.com/video/906739062?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Compare"
              className="content-vid"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
