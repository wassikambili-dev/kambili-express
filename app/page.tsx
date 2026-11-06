const services = [
  {
    numero: "01",
    icone: "📦",
    titre: "Livraison de Colis",
    description: "Envoi rapide et sécurisé de vos paquets et documents à travers toute la ville.",
    zone: "Goma & Environs",
    delai: "Moins de 2h"
  },
  {
    numero: "02",
    icone: "🍽️",
    titre: "Repas & Restauration",
    description: "Vos plats préférés livrés chauds directement depuis vos restaurants favoris.",
    zone: "Centre-ville",
    delai: "30 - 45 min"
  },
  {
    numero: "03",
    icone: "🛒",
    titre: "Courses & Achats",
    description: "Faites vos courses au marché ou supermarché sans vous déplacer.",
    zone: "Toute la ville",
    delai: "Sur commande"
  }
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container navigation">
          <a href="#accueil" className="logo">
            <span className="logo-icon">K<span>.</span></span>
            <span>Kambili<span className="accent">Express</span></span>
          </a>
          <nav className="nav-links">
            <a href="#accueil">Accueil</a>
            <a href="#services">Services</a>
            <a href="#apropos">À propos</a>
            <a href="#contact">Commander</a>
          </nav>
          <a className="nav-cta" href="#contact">Commander un coursier</a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="accueil">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow"><span className="eyebrow-dot" /> service de livraison à goma</span>
              <h1>Vos livraisons rapides <span>à domicile.</span></h1>
              <p className="hero-description">
                Faites-vous livrer vos colis, repas et achats en toute sécurité et en un temps record partout à Goma.
              </p>
              <div className="hero-actions">
                <a href="#services" className="button button-primary">Nos Tarifs & Services</a>
                <a href="#contact" className="button button-outline">Passer une commande</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section formations-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">01/ NOS SERVICES</span>
                <h2>Une solution pour <span>chaque besoin.</span></h2>
              </div>
            </div>
            <div className="formation-grid">
              {services.map((s) => (
                <article className="formation-card" key={s.numero}>
                  <div className="card-top">
                    <span className="card-number">{s.numero}</span>
                    <span className="card-icon">{s.icone}</span>
                  </div>
                  <h3>{s.titre}</h3>
                  <p>{s.description}</p>
                  <div className="card-meta">
                    <span>{s.zone}</span>
                    <span>{s.delai}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="container contact-box">
            <div>
              <span className="section-label">02/ CONTACT & COMMANDE</span>
              <h2>Besoin d'une livraison urgente ?</h2>
              <p>Contactez notre dispatching via WhatsApp ou par téléphone.</p>
            </div>
            <a href="https://wa.me/qr/NBBISP22YCDWM1" className="button button-light">
              Commander sur WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Kambili Express. Service de livraison à Goma, RDC.</p>
        </div>
      </footer>
    </>
  );
}