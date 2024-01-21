import { headers } from 'next/headers'

export default async function NotFound() {
    const headersList = headers()
    const domain = headersList.get('referer')

  return (
    <div>La pagina solicitada no fue encontrada: {domain}</div>
  )
}