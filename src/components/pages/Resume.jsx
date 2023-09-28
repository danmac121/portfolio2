import './Resume.css';
export default function Blog() {
  return (
    <div>
      
      <h1 className="resume">Resume</h1>
      <a href="/DanMacResume.txt" download>Download My Resume</a>
     <h2 className="resume">Front-end Techs</h2>
     <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>jQuery</li>
      <li>Responsive Design</li>
      <li>React</li>
      <li>Bootstrap</li>
     </ul>
     <h2 className="resume">Back-end Techs</h2>
     <ul>
      <li>APIs</li>
      <li>Node</li>
      <li>Express</li>
      <li>MySQL, Sequelize</li>
      <li>MongoDB, Mongoose</li>
      <li>REST</li>
      <li>GraphQl</li>
     </ul>
    </div>
  );
}
