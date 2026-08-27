import { TrustBar } from '../components/TrustBar'
import { faqs, site } from '../data/site'

export function About() {
  return (
    <section className="page">
      <div className="shell">
        <p className="eyebrow">{site.name}</p>
        <h1>Mostrador de baterías y LCD en España.</h1>
        <p className="lede">
          Misma idea que una tienda de recambios para móviles: pantallas y
          baterías por modelo, para talleres. El resto de piezas, más adelante.
        </p>

        <TrustBar />

        <h2 className="section-title">Preguntas frecuentes</h2>
        <ul className="faq-list">
          {faqs.map((item) => (
            <li key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
