import { promises } from '../data/site'

export function TrustBar() {
  return (
    <ul className="trust-bar">
      {promises.map((item) => (
        <li key={item.title}>
          <strong>{item.title}</strong>
          <span>{item.body}</span>
        </li>
      ))}
    </ul>
  )
}
