import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const Skills = () => (
  <section id="skills">
    <h2 className="section-title">Tech Stack</h2>

    <div className="skills-grid">
      <div className="skill-card"><FaJs size={40} /><p>JavaScript</p></div>
      <div className="skill-card"><FaReact size={40} /><p>React</p></div>
      <div className="skill-card"><FaHtml5 size={40} /><p>HTML</p></div>
      <div className="skill-card"><FaCss3Alt size={40} /><p>CSS</p></div>
    </div>
  </section>
);

export default Skills;
