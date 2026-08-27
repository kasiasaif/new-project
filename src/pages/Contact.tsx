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
          <p className="eyebrow">Hello</p>
          <h1>Contact</h1>
          <p className="lede">
            The form does not send mail yet. It only demonstrates the layout and
            TypeScript state. Wire it to an API or email service later.
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="muted">{site.location}</p>
        </div>

        {sent ? (
          <div className="form-note" role="status">
            <h2>Thanks — this is a placeholder.</h2>
            <p>
              In a later pass, this message can come from a real submission
              endpoint.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
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
              Message
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
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
