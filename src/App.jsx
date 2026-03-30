import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaLayerGroup,
  FaHome,
  FaHammer,
  FaStore,
  FaRegPaperPlane,
} from 'react-icons/fa'

const galleryImages = [
  {
    src: '/edilvenus1.jpeg',
    title: 'Bagni e rivestimenti di pregio',
    text: 'Soluzioni eleganti con posa precisa e resa luminosa dell’ambiente.',
  },
  {
    src: '/edilvenus2.jpeg',
    title: 'Grande formato e allineamento perfetto',
    text: 'Cura delle linee, controllo delle fughe e impatto visivo pulito.',
  },
  {
    src: '/edilvenus3.jpeg',
    title: 'Effetto marmo lucido',
    text: 'Pavimentazioni sceniche per ambienti moderni e raffinati.',
  },
  {
    src: '/edilvenus4.jpeg',
    title: 'Posa tecnica professionale',
    text: 'Uso di sistemi livellanti per un risultato ordinato e stabile.',
  },
  {
    src: '/edilvenus5.jpeg',
    title: 'Contrasti di design',
    text: 'Bagni e pareti con combinazioni cromatiche forti e contemporanee.',
  },
]

const serviceCards = [
  {
    icon: <FaLayerGroup />,
    title: 'Pavimenti interni',
    text: 'Posa di pavimenti moderni e grandi formati con attenzione alla geometria e alla finitura finale.',
  },
  {
    icon: <FaHome />,
    title: 'Rivestimenti bagno e parete',
    text: 'Lavori estetici e funzionali per ambienti puliti, eleganti e di forte impatto visivo.',
  },
  {
    icon: <FaHammer />,
    title: 'Finiture e dettagli',
    text: 'Precisione su tagli, bordi, fughe, allineamenti e valorizzazione complessiva dello spazio.',
  },
]

const salesCards = [
  {
    title: 'Sezione vendita dedicata',
    text: 'Area separata per mostrare materiali, prodotti o accessori disponibili su richiesta.',
  },
  {
    title: 'Richiesta rapida prodotto',
    text: 'Il cliente può contattare l’attività direttamente su WhatsApp per disponibilità e informazioni.',
  },
  {
    title: 'Sito che converte',
    text: 'Non solo presenza online: struttura pensata per trasformare visite in contatti reali.',
  },
]

const strengths = [
  'Foto reali dei lavori eseguiti',
  'WhatsApp diretto sempre visibile',
  'Immagine aziendale più professionale',
  'Sezione preventivi semplice e immediata',
  'Presentazione moderna per spingere online',
]

function scrollToSection(id) {
  const node = document.getElementById(id)
  if (node) node.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  return (
    <div className="site-shell">
      <a
        className="floating-whatsapp"
        href="https://wa.me/393289710937?text=Salve%2C%20vorrei%20informazioni%20sui%20vostri%20servizi"
        target="_blank"
        rel="noreferrer"
        aria-label="Scrivi su WhatsApp"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

      <header className="topbar">
        <div className="container navbar">
          <div className="brand" onClick={() => scrollToSection('home')}>
            <div className="brand-logo-wrap">
              <img src="/logoedilvenus.jpeg" alt="Logo Edil Venus" className="brand-logo" />
            </div>
            <div>
              <strong>Edil Venus</strong>
              <small>Pavimenti, rivestimenti e realizzazioni</small>
            </div>
          </div>

          <nav className="nav-links">
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('servizi')}>Servizi</button>
            <button onClick={() => scrollToSection('lavori')}>Lavori</button>
            <button onClick={() => scrollToSection('vendita')}>Vendita</button>
            <button onClick={() => scrollToSection('preventivi')}>Preventivi</button>
          </nav>

          <a
            className="nav-cta"
            href="https://wa.me/393289710937?text=Salve%2C%20vorrei%20un%20preventivo"
            target="_blank"
            rel="noreferrer"
          >
            Contattaci ora
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-badge">EDIL VENUS · IMMAGINE PREMIUM ONLINE</div>
              <h1>
                Un sito vero, elegante e serio per mostrare lavori, servizi e richieste
                immediate.
              </h1>
              <p>
                Questa struttura è pensata per dare forza all’attività online: mostra i lavori
                reali, valorizza la qualità della posa, separa la parte vendita dai servizi e
                porta il cliente a contattare subito l’azienda.
              </p>

              <div className="hero-actions">
                <a
                  className="primary-btn"
                  href="https://wa.me/393289710937?text=Salve%2C%20vorrei%20informazioni"
                  target="_blank"
                  rel="noreferrer"
                >
                  Scrivi su WhatsApp <FaArrowRight />
                </a>
                <button className="secondary-btn" onClick={() => scrollToSection('lavori')}>
                  Guarda i lavori
                </button>
              </div>

              <div className="hero-points">
                {strengths.map((item) => (
                  <div className="mini-point" key={item}>
                    <FaCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card logo-card">
                <img src="/logoedilvenus.jpeg" alt="Edil Venus" />
              </div>
              <div className="hero-card contact-card">
                <div>
                  <span className="card-label">Contatto diretto</span>
                  <h3>Pronto per clienti reali</h3>
                  <p>WhatsApp, Instagram, email e richiesta preventivo già integrati.</p>
                </div>
              </div>
              <div className="hero-card stat-card">
                <span className="card-label">Impatto</span>
                <h3>Più credibilità online</h3>
                <p>Un sito ben fatto fa percepire ordine, precisione e valore del lavoro.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block intro-block">
          <div className="container intro-grid">
            <div className="intro-card dark-card">
              <h2>Perché questo sito spinge davvero</h2>
              <p>
                Un profilo social da solo non basta. Con un sito strutturato bene, Edil Venus può
                presentarsi in modo più serio, raccogliere contatti diretti, far vedere lavori di
                qualità e separare chiaramente servizi, vendita e richieste di preventivo.
              </p>
            </div>
            <div className="intro-card">
              <h3>Struttura pensata per vendere meglio</h3>
              <ul className="list-clean">
                <li>Home d’impatto con messaggio forte</li>
                <li>Sezione lavori con foto reali</li>
                <li>Sezione vendita separata</li>
                <li>Preventivi rapidi su WhatsApp</li>
                <li>Immagine aziendale più affidabile</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="servizi" className="section-block">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Servizi</span>
              <h2>Realizzazioni curate, impostazione ordinata, presenza forte.</h2>
              <p>
                Sezione dedicata alla parte operativa dell’attività, con tono professionale e
                orientato al risultato.
              </p>
            </div>

            <div className="service-grid">
              {serviceCards.map((card) => (
                <article className="service-card" key={card.title}>
                  <div className="service-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lavori" className="section-block gallery-block">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Lavori</span>
              <h2>Foto reali che trasmettono qualità.</h2>
              <p>
                Le immagini mostrano precisione, ordine di cantiere, posa tecnica e risultato
                finale. Questa è la prova visiva che fa la differenza.
              </p>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((item) => (
                <article className="gallery-card" key={item.src}>
                  <img src={item.src} alt={item.title} />
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="vendita" className="section-block sales-block">
          <div className="container sales-layout">
            <div className="sales-copy">
              <span className="section-kicker">Vendita</span>
              <h2>Una sezione separata per far crescere anche la parte commerciale.</h2>
              <p>
                Qui si può inserire in seguito una selezione di prodotti, materiali o articoli in
                evidenza. L’impostazione è già pronta per essere ampliata senza rifare il sito.
              </p>
            </div>

            <div className="sales-cards">
              {salesCards.map((item) => (
                <article className="sales-card" key={item.title}>
                  <div className="sales-icon"><FaStore /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="preventivi" className="section-block quote-block">
          <div className="container quote-grid">
            <div className="quote-panel dark-card">
              <span className="section-kicker">Preventivi</span>
              <h2>Contatto semplice, rapido e diretto.</h2>
              <p>
                Il modo migliore per convertire chi entra nel sito è facilitare subito la richiesta.
                Qui il cliente trova WhatsApp, email, Instagram e sede operativa.
              </p>

              <div className="contact-list">
                <a href="https://wa.me/393289710937" target="_blank" rel="noreferrer">
                  <FaWhatsapp /> <span>328 971 0937</span>
                </a>
                <a href="mailto:edilvenus86@gmail.com">
                  <FaEnvelope /> <span>edilvenus86@gmail.com</span>
                </a>
                <a href="https://www.instagram.com/edilvenus.1986_/" target="_blank" rel="noreferrer">
                  <FaInstagram /> <span>@edilvenus.1986_</span>
                </a>
                <div>
                  <FaMapMarkerAlt /> <span>Andria (BT)</span>
                </div>
              </div>
            </div>

            <div className="quote-panel form-panel">
              <h3>Richiedi informazioni</h3>
              <p>
                Modulo rapido con invio automatico su WhatsApp. Funziona subito senza sistemi
                esterni.
              </p>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Edil Venus</h3>
            <p>
              Presenza online professionale per mostrare lavori, servizi, contatti e opportunità
              commerciali in modo ordinato e moderno.
            </p>
          </div>
          <div>
            <h4>Contatti</h4>
            <ul>
              <li><FaPhoneAlt /> 328 971 0937</li>
              <li><FaEnvelope /> edilvenus86@gmail.com</li>
              <li><FaMapMarkerAlt /> Andria (BT)</li>
            </ul>
          </div>
          <div>
            <h4>Link rapidi</h4>
            <ul>
              <li><button onClick={() => scrollToSection('servizi')}>Servizi</button></li>
              <li><button onClick={() => scrollToSection('lavori')}>Lavori</button></li>
              <li><button onClick={() => scrollToSection('vendita')}>Vendita</button></li>
              <li><button onClick={() => scrollToSection('preventivi')}>Preventivi</button></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

function QuoteForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const nome = form.get('nome')?.toString().trim() || ''
    const telefono = form.get('telefono')?.toString().trim() || ''
    const richiesta = form.get('richiesta')?.toString().trim() || ''
    const messaggio = form.get('messaggio')?.toString().trim() || ''

    const text = [
      'Salve, vorrei informazioni da Edil Venus.',
      `Nome: ${nome}`,
      `Telefono: ${telefono}`,
      `Richiesta: ${richiesta}`,
      `Messaggio: ${messaggio}`,
    ].join('\n')

    const url = `https://wa.me/393289710937?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <input name="nome" type="text" placeholder="Nome e cognome" required />
      <input name="telefono" type="text" placeholder="Telefono" required />
      <input name="richiesta" type="text" placeholder="Tipo di lavoro o richiesta" required />
      <textarea name="messaggio" placeholder="Scrivi qui i dettagli" rows="6" />
      <button type="submit" className="primary-btn form-btn">
        <FaRegPaperPlane /> Invia su WhatsApp
      </button>
    </form>
  )
}
