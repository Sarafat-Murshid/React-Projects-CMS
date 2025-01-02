import heroImg from "./assets/hero.svg";
const hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My CMS</h1>
          <p>
            Welcome to my projects site! Explore a collection of my work,
            showcasing innovative solutions in web development, software
            engineering, and research. From responsive web applications to
            AI-driven projects, each endeavor reflects my passion for
            problem-solving, creativity, and continuous learning. Let’s build
            the future, one project at a time!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and a browser" />
        </div>
      </div>
    </section>
  );
};
export default hero;
