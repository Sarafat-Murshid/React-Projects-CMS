import heroImg from "./assets/hero.svg";
const hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut
            deserunt asperiores rerum error saepe aut pariatur sequi eius ex
            consectetur dicta harum non, similique voluptates porro labore
            eveniet. Mollitia!
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
