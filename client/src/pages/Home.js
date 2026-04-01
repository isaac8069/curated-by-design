function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <p className="eyebrow">Curated Art Advisory</p>
        <h1>
          Artful curation for interiors, collectors, and spaces that deserve a
          distinctive point of view.
        </h1>
        <p className="hero-text">
          Curated by Design offers tailored art selection and placement guidance,
          helping clients shape spaces with contemporary works that feel refined,
          intentional, and deeply considered.
        </p>
      </section>

      <section className="intro-grid">
        <div>
          <p className="section-label">What We Do</p>
          <h2>Thoughtful art placement with a strong editorial eye.</h2>
        </div>
        <div>
          <p>
            We work across residential, hospitality, and commercial settings to
            source artwork that complements architecture, atmosphere, and the
            emotional identity of a space.
          </p>
          <p>
            From early concept through final recommendations, our process is
            collaborative, tailored, and visually driven.
          </p>
        </div>
      </section>

      <section className="featured-section">
        <p className="section-label">Featured Categories</p>
        <div className="featured-grid">
          <article className="featured-card">
            <h3>Residential Curation</h3>
            <p>
              Artwork selections designed to elevate private homes with warmth,
              balance, and individuality.
            </p>
          </article>

          <article className="featured-card">
            <h3>Hospitality Projects</h3>
            <p>
              Distinctive visual concepts for hotels, lounges, and public-facing
              interiors.
            </p>
          </article>

          <article className="featured-card">
            <h3>Collector Advisory</h3>
            <p>
              Personalized guidance for building a cohesive and meaningful art
              collection.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;