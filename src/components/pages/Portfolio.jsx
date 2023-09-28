import './Portfolio.css';

export default function ProjectBox({ backgroundImage, liveSiteURL, githubURL }) {
  return (
    <div className="mainContainer">
      <h1>Previous Projects</h1>
    <div className = "portfolioContainer">
      

      <div className="project-box" style={{ backgroundImage: `url("./public/hopper.png")` }}>
          <div className="project-overlay">
              <a href="#"  className="project-link live-site">
                 
                  <p className="name">Channel Hopper</p>
              </a>
              <a href="https://github.com/brian-wastle/Channel-Hopper"  className="project-link github">
                 
                  <img src="/public/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      <div className="project-box" style={{ backgroundImage: `url("./public/note.png")` }}>
          <div className="project-overlay">
              <a href="https://radiant-ravine-01589-dee562bfc599.herokuapp.com"  className="project-link live-site">
                 
                  <p className="name">Note App</p>
              </a>
              <a href="https://github.com/danmac121/NoteApp"  className="project-link github">
                 
                  <img src="/public/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      <div className="project-box" style={{ backgroundImage: `url("./public/jate.png")` }}>
          <div className="project-overlay">
              <a href="https://lit-caverns-97353-16e931334f59.herokuapp.com"  className="project-link live-site">
                 
              <p className="name">Text Editor</p>
              </a>
              <a href="https://github.com/danmac121/textEditor"  className="project-link github">
                 
                  <img src="/public/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      <div className="project-box" style={{ backgroundImage: `url("./public/p1.png")` }}>
          <div className="project-overlay">
              <a href="https://pb1983.github.io/Project1/"  className="project-link live-site">
                 
              <p className="name">BrewJoke</p>
              </a>
              <a href="https://github.com/danmac121/Project1"  className="project-link github">
                 
                  <img src="/public/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      <div className="project-box" style={{ backgroundImage: `url("./public/weather.png")` }}>
          <div className="project-overlay">
              <a href="https://danmac121.github.io/WeatherChecker/"  className="project-link live-site">
                 
              <p className="name">Weather Checker</p>
              </a>
              <a href="https://github.com/danmac121/WeatherChecker"  className="project-link github">
                 
                  <img src="/public/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      <div className="project-box" style={{ backgroundImage: `url("./public/portfolio.png")` }}>
          <div className="project-overlay">
              <a href="https://danmacportfolio.netlify.app/#about"  className="project-link live-site">
                 
              <p className="name">This site</p>
              </a>
              <a href="https://github.com/danmac121/portfolio2"  className="project-link github">
                 
                  <img src="/public/github.png" alt="GitHub Repo" />
              </a>
          </div>
      </div>
      </div></div>
  );
}

