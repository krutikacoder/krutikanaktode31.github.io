import profile from "../assets/profile.png";

const About = () => (
  <section id="about" className="hero">
    <div className="hero-left">
      <p>Hi, I'm</p>
      <h1>Krutika <span>Naktode</span></h1>
      <h3>React Developer & Software Engineer</h3>
      <p>Passionate about building scalable and beautiful web applications.</p>
      <button className="btn">Resume</button>
    </div>

    {/* <div className="hero-right">
      <img src={profile} alt="profile" />
    </div> */}
  </section>
);

export default About;
