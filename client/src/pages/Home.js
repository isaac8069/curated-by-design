function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-left">
          <p className="eyebrow">Curated Art Advisory</p>
          <h1>
            Artful curation for interiors, collectors, and spaces with a distinct point of view.
          </h1>
          <p className="hero-text">
            Curated by Design offers tailored art selection and placement guidance for residential,
            hospitality, and commercial spaces. We help clients shape environments that feel elevated,
            intentional, and visually compelling.
          </p>
          <a href="/contact" className="hero-button">
            Start a Consultation
          </a>
        </div>

        <div className="hero-right">
          <div className="hero-image-block">
            <div className="hero-image-overlay">
              <span>Featured Project</span>
              <p>Modern interiors paired with contemporary works and thoughtful placement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-grid">
        <div>
          <p className="section-label">What We Do</p>
          <h2>Thoughtful placement. Strong visual identity. Tailored recommendations.</h2>
        </div>
        <div>
          <p>
            We source and recommend artwork that supports the architecture, atmosphere, and emotional
            tone of a space. Every selection is guided by a balance of aesthetics, context, and story.
          </p>
          <p>
            Whether you are styling a private residence, hospitality environment, or curated collection,
            our approach is collaborative, design-driven, and deeply considered.
          </p>
        </div>
      </section>

      <section className="featured-section">
        <p className="section-label">Featured Services</p>

        <div className="featured-grid">
          <article className="featured-card">
            <h3>Residential Curation</h3>
            <p>
              Artwork selections designed to bring warmth, texture, and individuality into private homes.
            </p>
          </article>

          <article className="featured-card">
            <h3>Hospitality Projects</h3>
            <p>
              Distinctive visual concepts for hotels, lounges, restaurants, and public-facing interiors.
            </p>
          </article>

          <article className="featured-card">
            <h3>Collector Advisory</h3>
            <p>
              Personalized guidance for building a meaningful collection with cohesion and intention.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;