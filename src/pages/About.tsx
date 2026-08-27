import { TrustBar } from '../components/TrustBar'
import { faqs, site } from '../data/site'

export function About() {
  return (
    <section className="page">
      <div className="shell">
        <p className="eyebrow">{site.name}</p>
        <h1>A parts counter for batteries and LCD, based in Spain.</h1>
        <p className="lede">
          Model-specific screens and batteries for repair shops. Other parts can
          be added later.
        </p>

        <TrustBar />

        <h2 className="section-title">Questions people ask</h2>
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
