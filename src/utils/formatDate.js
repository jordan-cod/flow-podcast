const formatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'America/Sao_Paulo'
})

export function formatDate (iso) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  const parts = Object.fromEntries(formatter.formatToParts(date).map(part => [part.type, part.value]))
  return `${parts.day} ${parts.month.replace('.', '')} ${parts.year}`
}
