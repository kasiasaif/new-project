import { adminUrl } from '../config'

export function AdminMoved() {
  return (
    <section className="page">
      <div className="shell">
        <p className="eyebrow">Admin</p>
        <h1>Catalog admin moved</h1>
        <p className="lede">
          The editor lives on a separate domain: <strong>tescgsm-admin.es</strong>
        </p>
        <p>
          <a className="button" href={adminUrl}>
            Go to tescgsm admin
          </a>
        </p>
      </div>
    </section>
  )
}
