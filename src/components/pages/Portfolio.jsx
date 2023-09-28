import './Portfolio.css';

export default function ProjectBox({ backgroundImage, liveSiteURL, githubURL }) {
  return (
    <div className="mainContainer">
      <h1>Previous Projects</h1>
    <div className = "portfolioContainer">
      

      <div className="project-box" style={{ backgroundImage: `url("./assets/hopper.png")` }}>
          <div className="project-overlay">
              <a href={liveSiteURL}  className="project-link live-site">
                 
                  <img src="./assets/circle.png" alt="Live Site" />
              </a>
              <a href="https://github.com/brian-wastle/Channel-Hopper"  className="project-link github">
                 
                  <img src="./assets/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      <div className="project-box" style={{ backgroundImage: `url("./assets/note.png")` }}>
          <div className="project-overlay">
              <a href="https://radiant-ravine-01589-dee562bfc599.herokuapp.com"  className="project-link live-site">
                 
                  <img src="./assets/circle.png" alt="Live Site" />
              </a>
              <a href="https://github.com/danmac121/NoteApp"  className="project-link github">
                 
                  <img src="./assets/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      <div className="project-box" style={{ backgroundImage: `url("./assets/jate.png")` }}>
          <div className="project-overlay">
              <a href="https://lit-caverns-97353-16e931334f59.herokuapp.com"  className="project-link live-site">
                 
                  <img src="./assets/circle.png" alt="Live Site" />
              </a>
              <a href="https://github.com/danmac121/textEditor"  className="project-link github">
                 
                  <img src="./assets/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      <div className="project-box" style={{ backgroundImage: `url("./assets/p1.png")` }}>
          <div className="project-overlay">
              <a href="https://pb1983.github.io/Project1/"  className="project-link live-site">
                 
                  <img src="./assets/circle.png" alt="Live Site" />
              </a>
              <a href="https://github.com/danmac121/Project1"  className="project-link github">
                 
                  <img src="./assets/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      <div className="project-box" style={{ backgroundImage: `url("./assets/weather.png")` }}>
          <div className="project-overlay">
              <a href="https://danmac121.github.io/WeatherChecker/"  className="project-link live-site">
                 
                  <img src="./assets/circle.png" alt="Live Site" />
              </a>
              <a href="https://github.com/danmac121/WeatherChecker"  className="project-link github">
                 
                  <img src="./assets/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      <div className="project-box" style={{ backgroundImage: `url("./assets/portfolio.png")` }}>
          <div className="project-overlay">
              <a href={liveSiteURL}  className="project-link live-site">
                 
                  <img src="./assets/circle.png" alt="Live Site" />
              </a>
              <a href="https://github.com/danmac121/portfolio2"  className="project-link github">
                 
                  <img src="./assets/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      </div></div>
  );
}

