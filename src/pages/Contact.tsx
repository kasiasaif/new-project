import { useState, type FormEvent } from 'react'
import { site } from '../data/site'

type ContactForm = {
  name: string
  email: string
  message: string
}

const emptyForm: ContactForm = {
  name: '',
  email: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<ContactForm>(emptyForm)
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="page">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow">Ayuda</p>
          <h1>¿Necesitas una batería o un LCD?</h1>
          <p className="lede">
            Presupuestos, devoluciones y WhatsApp empiezan aquí. El formulario
            aún no envía correo.
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="muted">{site.location}</p>
        </div>

        {sent ? (
          <div className="form-note" role="status">
            <h2>Gracias — esto es un placeholder.</h2>
            <p>Conecta este formulario a email o una API cuando esté listo.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input
                name="name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                required
              />
            </label>
            <label>
              Mensaje
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                required
              />
            </label>
            <button className="button" type="submit">
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
