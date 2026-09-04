/** Shop listing: only exact boolean true (or MySQL 1) counts as active. */
export function isActive(value: unknown): boolean {
  return value === true || value === 1
}
