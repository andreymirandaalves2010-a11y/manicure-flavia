import "./App.css";

function App() {
  const whatsappNumber = "5538992180646";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const googleMapsLink = "https://maps.app.goo.gl/sfDK4owFQys2ovKW7";
  const instagramLink = "https://www.instagram.com/flaviadiasnails";

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header" role="banner">
        <div className="header-content">
          <h1 className="header-title">Flávia Nails</h1>
          <p className="header-subtitle">Beleza e cuidado em cada detalhe.</p>
        </div>
      </header>

      <main>
        {/* SEÇÃO DE APRESENTAÇÃO */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-content">
            <div className="hero-text">
              <h2 id="hero-heading" className="hero-title">
                Sobre a Flávia Nails
              </h2>
              <p className="hero-description">
                Especialista em cuidados e design de unhas, a Flávia Nails
                oferece um atendimento personalizado para quem busca unhas
                bem cuidadas, bonitas e com acabamento profissional em
                Montes Claros, MG.
              </p>
            </div>
            <div className="hero-image">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver perfil da Flávia Nails no Instagram"
              >
                <img
                  src="flavia.png"
                  alt="Flávia, manicure especialista em unhas, em seu salão em Montes Claros"
                  width="350"
                  height="350"
                  loading="eager"
                />
              </a>
            </div>
          </div>
        </section>

        {/* CARDS DE INFORMAÇÕES */}
        <section className="info-cards" aria-label="Diferenciais da Flávia Nails">
          {/* CARD 01 */}
          <a href="https://www.instagram.com/stories/highlights/17952017309211638/" target="_blank">
          <article className="info-card" id="card01">
            <video
              className="info-video"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            >
              <source src="/videos/feedback.mp4" type="video/mp4" />
            </video>
            
            <div className="card-content">
              <span className="info-icon" role="img" aria-label="Estrela">
                ⭐
              </span>
              <h3>Avaliação</h3>
              <p className="highlight">5,0 estrelas</p>
              <p className="subtitle">40 avaliações no Google</p>
            </div>
           
          </article>
           </a>

          {/* CARD 02 */}
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver manutenção de unhas no Instagram da Flávia Nails"
          >
            <article className="info-card" id="card02">
              <video
                className="info-video"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                aria-hidden="true"
              >
                <source src="/videos/manute.mp4" type="video/mp4" />
              </video>

              <div className="card-content">
                <span className="info-icon" role="img" aria-label="Esmalte">
                  💅
                </span>
                <h3>Manutenção</h3>
                <p className="highlight">Atendimento especializado</p>
                <p className="subtitle">em unhas</p>
              </div>
            </article>
          </a>

          {/* CARD 03 */}
          <article className="info-card" id="card03">
            <video
              className="info-video"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            >
              <source src="/videos/atendimento.mp4" type="video/mp4" />
            </video>

            <div className="card-content">
              <span className="info-icon" role="img" aria-label="Brilho">
                ✨
              </span>
              <h3>Atendimento</h3>
              <p className="highlight">Personalizado</p>
              <p className="subtitle">Exclusivo e dedicado</p>
            </div>
          </article>

          {/* CARD 04 */}
          <a href={googleMapsLink} target="_blank">
          <article className="info-card" id="card04">
            <video
              className="info-video"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            >
              <source src="/videos/loc.mp4" type="video/mp4" />
            </video>

            <div className="card-content">
              <span className="info-icon" role="img" aria-label="Localização">
                📍
              </span>
              <h3>Localização</h3>
              <p className="highlight">Centro de Montes Claros</p>
              <p className="subtitle">Av. Afonso Pena, 248</p>
            </div>
          </article>
          </a>
        </section>

        {/* LOCALIZAÇÃO */}
        <section className="location" aria-labelledby="location-heading">
          <div className="location-container">
            <h2 id="location-heading" className="section-title">
              Onde estamos
            </h2>

            <div className="location-info">
              <address className="location-text">
                <p className="location-address">
                  <strong>
                    Flávia Nails, Av. Afonso Pena, 248 — Segundo andar, n°
                    202
                  </strong>
                </p>
                <p className="location-details">Centro, Montes Claros - MG</p>
                <p className="location-cep">
                  <strong>CEP:</strong> 39400-875
                </p>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Ver localização no mapa
                </a>
              </address>
            </div>
          </div>
        </section>

        {/* AGENDAMENTO */}
        <section className="booking" aria-labelledby="booking-heading">
          <div className="booking-container">
            <h2 id="booking-heading" className="section-title">
              Agende seu horário
            </h2>
            <p className="booking-subtitle">
              Entre em contato e agende seu atendimento.
            </p>

            <div className="booking-info">
              <p className="phone-display">
                <span className="phone-icon" aria-hidden="true">
                  ✆
                </span>
                <a href="tel:+5538992180646">
                  <strong>(38) 99218-0646</strong>
                </a>
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-whatsapp"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="footer-content">
          <h2 className="footer-title">Flávia Nails</h2>
          <p className="footer-subtitle">Beleza e cuidado em cada detalhe.</p>

          <address className="footer-info">
            <p>
              <strong>Centro — Montes Claros/MG</strong>
            </p>
            <p>
              Telefone:{" "}
              <a href="tel:+5538992180646">
                <strong>(38) 99218-0646</strong>
              </a>
            </p>
          </address>

          <p className="footer-copyright">
            © {new Date().getFullYear()} Flávia Nails. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;