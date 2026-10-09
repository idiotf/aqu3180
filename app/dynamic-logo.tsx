import { KoreanLogo } from './korean-logo'

function matchesDay(a: Date, b: Date) {
  return (
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

const koreanDay = new Date('10. 9.')

export function DynamicLogo(...props: React.ComponentProps<'svg'>) {
  const date = useMemo(() => new Date(), [])
  if (matchesDay(date, koreanDay)) {
    return <KoreanLogo />
  }
}
